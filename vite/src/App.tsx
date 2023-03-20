import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Home from "./components/pages/Home"
import Auth from "./components/pages/Auth"
import Map from "./components/pages/Map"
import Form from "./components/pages/Form"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/map" element={<Map />} />
          <Route path="/entry" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
