import React, { useEffect, useState } from "react"
import LeafletMap from "./LeafletMap"
import MapFilter from "./Filter"
import { getPoints } from "../../../libs/firebase"
import { Point } from "../../../types/Point"
import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Container, Stack } from "@mui/system"

export default function Map() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState({
    lat: 56.8,
    long: -3.5,
    zoom: 8,
  })

  return (
    <Container>
      <Stack direction="column" alignItems="center" spacing={1}>
        <p style={{ textAlign: "center" }}>
          Here you can find water quality records. Samples deemed suitable for
          drinking are marked blue
          <img
            src={"/pin_blue.svg"}
            style={{ display: "inline-block", width: 25, marginBottom: -5 }}
          />
          Note that these samples are collected and tested by a community of
          volunteers. We can not guarantee the accuracy of these records. Check
          the water for signs of contamination before drinking and{" "}
          <strong>
            always defer to the advice from government officials and water
            maintainance staff regarding the quality of local water sources.
          </strong>
        </p>
        {/*<MapFilter filter={filter} setFilter={setFilter} />*/}
        <LeafletMap filter={filter} />
        <button className="bubble-btn" onClick={() => navigate(-1)}>
          Go back
        </button>
      </Stack>
    </Container>
  )
}

