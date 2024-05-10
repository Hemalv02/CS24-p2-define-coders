"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

import useGetSTSAvailableVehicles from "@/hooks/vehicles/useSTSAvailableVehicles";
import { message } from "antd";

interface DialogWrapperProps {
  children: React.ReactNode;
}

export const AddNewAreaModal: React.FC<DialogWrapperProps> = ({ children }) => {
  const [areaName, setAreaName] = useState("");
  const handleSaveChanges = async () => {
    message.success("Area added successfully!");    
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        {children}
      </DialogTrigger>
      <DialogContent className="w-[825px]">
        <DialogHeader>
          <DialogTitle>Add New Area</DialogTitle>
          <DialogDescription>
            Add new area here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-flow-row grid-cols-4 items-center gap-4">
            <Label htmlFor="vehicleNumber" className="text-right col-span-1">
              Area Name
            </Label>
            <Input
              id="vehicleNumber"
              placeholder="Area Name"
              value={areaName}
              onChange={(e) => setAreaName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
