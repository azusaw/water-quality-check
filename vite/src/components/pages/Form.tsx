import React, { useEffect, useState } from "react"
import { Button, Stack, TextField } from "@mui/material"
import { Point } from "../../types/Point"
import { User } from "../../types/User"
import { savePoint } from "../../libs/firebase"

export default function Form() {
  const [point, setPoint] = useState<Point>({
    id: "",
    datetime: "",
    ph: 0,
    score: 0,
    site: {
      latitude: 0,
      longitude: 0,
    },
    user: {
      id: "dummy",
      name: "Hoge",
    },
  })

  useEffect(() => {
    console.log(point)
  }, [point])

  const handleInputChange = (value) => {
    setPoint((prev) => ({
      ...prev,
      ...value,
    }))
  }

  return (
    <Stack spacing={2} direction="column" alignItems="center">
      <Stack spacing={2} direction="row" alignItems="center">
        <TextField
          id="latitude"
          label="Latitude"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={point.site.latitude}
          onChange={(e) =>
            handleInputChange({
              site: {
                latitude: e.target.value,
                longitude: point.site.longitude,
              },
            })
          }
        />
        <TextField
          id="longitude"
          label="Longitude"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={point.site.longitude}
          onChange={(e) =>
            handleInputChange({
              site: {
                latitude: point.site.latitude,
                longitude: e.target.value,
              },
            })
          }
        />
      </Stack>
      <Stack spacing={2} direction="row" alignItems="center">
        <TextField
          id="score"
          label="Score"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={point.score}
          onChange={(e) => handleInputChange({ score: Number(e.target.value) })}
        />
        <TextField
          id="ph"
          label="Ph"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={point.ph}
          onChange={(e) => handleInputChange({ ph: Number(e.target.value) })}
        />
      </Stack>
      <Button variant="contained" onClick={() => savePoint(point)}>
        Submit
      </Button>
    </Stack>
  )
}
