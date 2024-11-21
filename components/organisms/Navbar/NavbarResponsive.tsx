"use client";

import { DeviceSize, useResponsive } from "@/hooks/useResponsive";
import { Navbar } from "./Navbar";

export const NavbarResponsive = () => {
  const { deviceSize } = useResponsive();

  if (!deviceSize) {
    return null;
  }

  return deviceSize <= DeviceSize.lg ? <Navbar /> : <Navbar />;
};
