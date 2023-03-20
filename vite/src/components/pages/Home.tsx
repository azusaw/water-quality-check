import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button, Stack } from "@mui/material"

export default function Home() {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Link to={"/entry"}>
        <Button variant="contained">Entry Data</Button>
      </Link>
      <Link to={"/map"}>
        <Button variant="contained">Show Map</Button>
      </Link>
    </Stack>
  )
}
