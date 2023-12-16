"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return <Switch onClick={() => toggleTheme()}>Light</Switch>;
}
