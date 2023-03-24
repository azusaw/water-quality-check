import React from "react"
import { Grid, Stack } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Link } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt"
import MapIcon from "@mui/icons-material/Map"
import InfoIcon from "@mui/icons-material/Info"

export default function Header() {
  const theme = useTheme()

  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      maxWidth="860px"
      margin="0 auto"
      sx={{ padding: "1.5rem 0.5rem" }}
    >
      {useMediaQuery(theme.breakpoints.up("sm")) ? (
        <>
          <Grid item sm={4} md={6}>
            <img
              src={"/logo_white_wide.png"}
              style={{ width: "100%", maxWidth: 350 }}
            />
          </Grid>
          <Grid item sm={2} md={1.5}>
            <Link to={"/"}>
              <div className="bubble-btn">
                <div id="circle"></div>
                <HomeIcon sx={{ color: "white" }} />
                Home
              </div>
            </Link>
          </Grid>
          <Grid item sm={2} md={1.5}>
            <Link to={"/entry"}>
              <div className="bubble-btn">
                <div id="circle"></div>
                <AddLocationAltIcon sx={{ color: "white" }} />
                Entry
              </div>
            </Link>
          </Grid>
          <Grid item sm={2} md={1.5}>
            <Link to={"/map"}>
              <div className="bubble-btn">
                <div id="circle"></div>
                <MapIcon sx={{ color: "white" }} />
                Map
              </div>
            </Link>
          </Grid>
          <Grid item sm={2} md={1.5}>
            <Link to={"/info"}>
              <div className="bubble-btn flexible-btn">
                <div id="circle"></div>
                <InfoIcon sx={{ color: "white" }} />
                Info
              </div>
            </Link>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <img src={"/drop.svg"} style={{ width: "80%", maxWidth: 200 }} />
          </Grid>
          <Grid item xs={8} sx={{ color: "white" }}>
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Link to={"/"}>
                <div className="bubble-btn icon-btn">
                  <HomeIcon sx={{ width: 40 }} />
                </div>
              </Link>
              <Link to={"/entry"}>
                <div className="bubble-btn icon-btn">
                  <AddLocationAltIcon sx={{ width: 40 }} />
                </div>
              </Link>
              <Link to={"/map"}>
                <div className="bubble-btn icon-btn">
                  <MapIcon sx={{ width: 40 }} />
                </div>
              </Link>
              <Link to={"/info"}>
                <div className="bubble-btn icon-btn">
                  <InfoIcon sx={{ width: 40 }} />
                </div>
              </Link>
            </Stack>
          </Grid>
        </>
      )}
    </Grid>
  )
}

