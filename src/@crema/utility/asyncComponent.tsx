import dynamic from "next/dynamic";
import React from "react";
import { AppLoader } from "../index";

export default function asyncComponent(importComponent: any) {
  return dynamic(importComponent, {
    loading: () => <AppLoader />,
  });
}
