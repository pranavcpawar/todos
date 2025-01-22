"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeButton() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => setTheme("dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => setTheme("light")}
        >
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      )}
    </>
  );
}
