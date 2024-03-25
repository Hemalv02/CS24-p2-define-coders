import { Request, Response } from "express";
import errorWrapper from "../middlewares/errorWrapper";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import {
  generateToken,
  getToken,
  invalidateToken,
  verifyToken,
} from "../services/Token";
import CustomError from "../services/CustomError";
import { randomOTPGenerator, randomPasswordGenerator } from "../services/utils";
import { sendMail, sendOTPMail } from "../services/mailService";

const prisma = new PrismaClient();

const createUser = errorWrapper(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      hashedPassword,
    },
  });

  const token = generateToken(
    {
      id: user.id,
      role: user.roleName,
    },
    "1h"
  );

  res.status(201).json({ user, token });
});

const login = errorWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new CustomError("This email do not exists", 404);
  }

  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(
    {
      id: user.id,
      role: user.roleName,
    },
    "1h"
  );

  res.json({ user, token });
});

const logout = errorWrapper(async (req: Request, res: Response) => {
  const token = getToken(req) || "no token";
  invalidateToken(token);
});

const updatePassword = errorWrapper(async (req: Request, res: Response) => {
  const { oldPassword, newPassword } = req.body;
  const token = getToken(req) || "no token";

  const decoded = verifyToken(token);

  const { id } = decoded as any;

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new CustomError("User not found", 404);
  }

  const isPasswordValid = await bcrypt.compare(
    oldPassword,
    user.hashedPassword
  );

  if (!isPasswordValid) {
    throw new CustomError("Invalid Old Password", 403);
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      hashedPassword,
    },
  });

  res.json({ msg: "Password Updated Successfully" });
});

const resetPasswordInit = errorWrapper(async (req: Request, res: Response) => {
  const { email } = req.body;
  const otp = randomOTPGenerator().toString();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new CustomError("This email do not exists", 404);
  }

  const otptoken = generateToken({ id: user.id, OTP: otp }, "5m");

  sendOTPMail(user, otp);

  res.json({ otptoken });
});

const resetPasswordConfirm = errorWrapper(
  async (req: Request, res: Response) => {
    const { otp } = req.body;

    const token = getToken(req) || "no token";

    const decoded = verifyToken(token);

    if ((decoded as any).OTP == otp) {
      const { id } = decoded as any;

      const newPassword = randomPasswordGenerator();
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      const user = await prisma.user.update({
        where: {
          id,
        },
        data: {
          hashedPassword,
        },
      });

      sendMail(
        user,
        `Reset Password Successful`,
        `Your New Password is ${newPassword}`,
        `Please change your password after login`
      );

      res.status(200).json({
        msg: "OTP is correct!, your new password is sent to your email",
      });
    } else {
      throw new CustomError("Wrong OTP", 403);
    }
  }
);

export {
  createUser,
  login,
  logout,
  resetPasswordInit,
  resetPasswordConfirm,
  updatePassword,
};
