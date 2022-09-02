import { ThemeProvider } from "@emotion/react"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopBar from "./components/TopBar"
import { createTheme } from "@mui/material"

import FrontPage from "./pages/FrontPage"
import DashBoard from "./pages/DashBoard"
import Expolore from "./pages/Explore"
import Redeem from "./pages/Redeem"
import { getDesignTokens } from "./shared/theme"

function App() {
  const [mode, setMode] = React.useState("light")
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<FrontPage />}></Route>
            <Route path="/user" element={<DashBoard />}></Route>
            <Route path="/explore" element={<Expolore />}></Route>
            <Route path="/redeem" element={<Redeem />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
