import React from "react"
import { Grid, Stack } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Link } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt"
import MapIcon from "@mui/icons-material/Map"

export default function Header() {
  const theme = useTheme()

  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      sx={{ padding: "1.5rem 0.5rem" }}
    >
      {useMediaQuery(theme.breakpoints.up("sm")) ? (
        <>
          <Grid item xs={12} sm={5}>
            <img
              src={"/logo_white_wide.png"}
              style={{ width: "100%", maxWidth: 350 }}
            />
          </Grid>
          <Grid item xs={6} sm={2}>
            <Link to={"/"}>
              <div className="bubble-btn">
                <div id="circle"></div>
                <HomeIcon sx={{ color: "white" }} />
                Home
              </div>
            </Link>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Link to={"/entry"}>
              <div className="bubble-btn">
                <div id="circle"></div>
                <AddLocationAltIcon sx={{ color: "white" }} />
                Entry
              </div>
            </Link>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Link to={"/map"}>
              <div className="bubble-btn">
                <div id="circle"></div>
                <MapIcon sx={{ color: "white" }} />
                Map
              </div>
            </Link>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={4}>
            <img src={"/drop.svg"} style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={8} sx={{ color: "white" }}>
            <Stack spacing={2} direction="row" alignItems="center">
              <Link to={"/"}>
                <div className="bubble-btn icon-btn">
                  <HomeIcon sx={{ width: 30, height: 30 }} />
                </div>
              </Link>
              <Link to={"/entry"}>
                <div className="bubble-btn icon-btn">
                  <AddLocationAltIcon sx={{ width: 50 }} />
                </div>
              </Link>
              <Link to={"/map"}>
                <div className="bubble-btn icon-btn">
                  <MapIcon sx={{ width: 50 }} />
                </div>
              </Link>
            </Stack>
          </Grid>
        </>
      )}
    </Grid>
  )
}
