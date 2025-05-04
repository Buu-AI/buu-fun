"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import MyBitrefillWidget from "./bit-refill";

export default function BitRefillDialog() {
  return (
    <Dialog>
      <DialogTrigger>Open BitRefill</DialogTrigger>
      <DialogContent className="w-[90%] h-[90%] overflow-hidden max-w-full p-0">
        <MyBitrefillWidget />
      </DialogContent>
    </Dialog>
  );
}
