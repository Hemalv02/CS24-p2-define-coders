import express from "express";
const router = express.Router();

import authRoute from "./auth";
import userRoute from "./users";
import profileRoute from "./profile";
import rbacRoute from "./rbac";
import vehicleRoute from "./vehicles";
import stsRoute from "./sts";
import landfillRoute from "./landfills";
import landfillEntryRoute from "./landfillVehicle";
import stsEntryRoute from "./stsVehicle";
import billRoute from "./bills";
import tripRoute from "./trip";
import scheduleRoute from "./schedule";
import authChecker from "../middlewares/auth";
import contractorRoute from "./contractor";
import logRouter from "./logs";
import routeAreaRouter from "./routeArea";
import employeeRoute from "./employee";
import collectionPlanRoute from "./collectionPlans";
import issueRoute from "./issue";
import stsContractorRoute from "./stsContractor";
import contractorBillRoute from "./contractor-bills";

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/profile", profileRoute);
router.use("/rbac", rbacRoute); // authentication and authorization both will be added here
router.use("/vehicles", authChecker, vehicleRoute);
router.use("/sts", authChecker, stsRoute);
router.use("/landfills", authChecker, landfillRoute);
router.use("/landfill-entry", authChecker, landfillEntryRoute);
router.use("/sts-entry", authChecker, stsEntryRoute);
router.use("/bills", authChecker, billRoute);
router.use("/trips", authChecker, tripRoute);
router.use("/schedules", scheduleRoute);

// auth checker needed
router.use("/contractors", contractorRoute);
router.use("/logs", logRouter);
router.use("/route-areas", routeAreaRouter);
router.use("/employees", employeeRoute);
router.use("/collection-plans", collectionPlanRoute);
router.use("/issues", issueRoute);
router.use("/sts-contractor-entry", stsContractorRoute);
router.use("/contractor-bills", contractorBillRoute);

export default router;
