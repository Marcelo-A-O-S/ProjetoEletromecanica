"use client";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProjectProvider({ children, ...props }: ThemeProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}