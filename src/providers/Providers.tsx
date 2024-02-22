"use client";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  // 2. Wrap NextUIProvider at the root of your app
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
