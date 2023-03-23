import React from "react"
import { Link } from "react-router-dom"
import { Stack } from "@mui/material"

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Stack spacing={2} direction="column" alignItems="center">
        <img src={"/drop.svg"} style={{ width: 250, display: "block" }} />
        <img src={"/h2open.svg"} style={{ width: 250, display: "block" }} />
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          style={{ marginTop: "3rem" }}
        >
          <Link to={"/entry"}>
            <div className="bubble-btn">
              <div id="circle"></div>Entry Data
            </div>
          </Link>
          <Link to={"/map"}>
            <div className="bubble-btn">
              <div id="circle"></div>Show Map
            </div>
          </Link>
        </Stack>
      </Stack>
    </div>
  )
}
