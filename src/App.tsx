import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import HomePages from "./pages/homePages";

function App() {
  return (
    <ThemeProvider>
      <HomePages />
    </ThemeProvider>
  );
}

export default App;
