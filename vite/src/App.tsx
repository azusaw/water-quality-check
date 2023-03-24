import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material"
import "./App.css"

import Home from "./components/pages/Home"
import Map from "./components/pages/Map"
import Form from "./components/pages/Form"
import Info from "./components/pages/Info"

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 16,
    },
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/entry" element={<Form />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
export default App

