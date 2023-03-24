import React, { useState } from "react"
import LeafletMap from "./LeafletMap"
import { Container, Stack } from "@mui/system"
import Header from "../../Header"

export default function Map() {
  const [filter, setFilter] = useState({
    lat: 56.8,
    long: -3.5,
    zoom: 8,
  })

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Stack direction="column" alignItems="center">
          {/*<MapFilter filter={filter} setFilter={setFilter} />*/}
          <LeafletMap filter={filter} />
          <p style={{ textAlign: "center" }}>
            Here you can find water quality records. Samples deemed suitable for
            drinking are marked blue
            <img
              src={"/pin_blue.svg"}
              style={{ display: "inline-block", width: 25, marginBottom: -5 }}
            />
            Note that these samples are collected and tested by a community of
            volunteers. We can not guarantee the accuracy of these records.
            Check the water for signs of contamination before drinking and{" "}
            <strong>
              always defer to the advice from government officials and water
              maintainance staff regarding the quality of local water sources.
            </strong>
          </p>
        </Stack>
      </Container>
    </>
  )
}

