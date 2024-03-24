import React from "react";
import Overview from "../components/card/overview";
import Preview from "../components/card/preview";
import Header from "../components/header";
import { useTheme } from "../context/ThemeContext";

export default function HomePages() {
  const { darkMode } = useTheme();
  const theme = darkMode ? "dark" : "light";
  return (
    <main data-bs-theme={theme}>
      <Header />
      <Preview />
      <Overview />
    </main>
  );
}
