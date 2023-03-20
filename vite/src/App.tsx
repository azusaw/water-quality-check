import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Home from "./components/pages/Home"
import Test from "./components/pages/Test"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
