import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select as SelectMui,
  Stack,
} from "@mui/material"
import { ArrowCircleDown } from "@mui/icons-material"
import { Formik, Form, Field, useFormikContext } from "formik"
import { TextField, Select, CheckboxWithLabel } from "formik-mui"
import { auth, loginGoogle, savePoint } from "../../../libs/firebase"
import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"
import deviceService from "../../../services/deviceService"
import Header from "../../Header"
import Map from "./Map"
import { User } from "../../../types/User"

// Updates position state to use current device position if available
const NavigatorUtility = () => {
  const { setFieldValue } = useFormikContext()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setFieldValue("site.latitude", pos.coords.latitude)
      setFieldValue("site.longitude", pos.coords.longitude)
    })
  }, [])
  return null
}

export default function PointForm() {
  const [user, setUser] = useState<User>()
  const [selectedFields, setSelectedFields] = useState([])
  // Currently a mock service simulating data retrieval from measurement device
  const deviceQuery = useQuery(
    "device-measurements",
    () => deviceService.getDeviceMeasurements({ delay: 1500 }),
    { refetchOnWindowFocus: false, enabled: false }
  )

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      user
        ? setUser({
            id: user.uid,
            name: user.displayName,
            photoUrl: user.photoURL,
          })
        : await loginGoogle(setUser)
    })
  }, [])

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Paper
          style={{
            padding: "2rem",
            margin: "0 auto",
          }}
        >
          <Formik
            initialValues={{
              tds: 0,
              ph: 7.0,
              contaminants: {
                arsenic: false,
                lead: false,
                mercury: false,
              },
              site: {
                latitude: 56.9,
                longitude: -3.4,
              },
            }}
            // validationSchema={toFormikValidationSchema(formPointSchema)}
            onSubmit={(values) => {
              const toSubmit = {
                site: values.site,
                contaminants: {},
                user: user,
              }
              selectedFields.forEach((field) => {
                if (["arsenic", "lead", "mercury"].includes(field)) {
                  toSubmit.contaminants[field] = values.contaminants[field]
                } else if (["tds", "ph"].includes(field)) {
                  toSubmit[field] = values[field]
                } else {
                  throw Error(
                    `Field in selectedField does not match formik field. Field: ${field}`
                  )
                }
              })
              console.dir(toSubmit)
              return savePoint(toSubmit)
                .then(() =>
                  Swal.fire({
                    title: "Thank you!",
                    text: "Your data has been successfully registered.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 3000,
                  })
                )
                .catch((err) =>
                  Swal.fire({
                    title: "Something was wrong..",
                    text: err,
                    icon: "error",
                    confirmButtonText: "close",
                  })
                )
            }}
          >
            {({ values, setFieldValue, handleReset }) => (
              <Form>
                <NavigatorUtility />
                <Stack direction="column" spacing={2} alignItems="stretch">
                  <Button onClick={() => deviceQuery.refetch()}>
                    Connect to Device
                  </Button>
                  {deviceQuery.isFetching ? (
                    <Alert severity="info">Searching for device...</Alert>
                  ) : deviceQuery.isSuccess ? (
                    <Alert
                      severity="info"
                      icon={false}
                      action={
                        <IconButton
                          size="small"
                          onClick={() => {
                            if (!selectedFields.includes("ph"))
                              setSelectedFields((sf) => [...sf, "ph"])
                            if (!selectedFields.includes("tds"))
                              setSelectedFields((sf) => [...sf, "tds"])
                            setFieldValue("ph", deviceQuery.data.ph)
                            setFieldValue("tds", deviceQuery.data.tds)
                          }}
                        >
                          <ArrowCircleDown color="primary" />
                        </IconButton>
                      }
                    >
                      pH: {deviceQuery.data.ph.toFixed(2)} | TDS:{" "}
                      {deviceQuery.data.tds}
                    </Alert>
                  ) : null}
                  <FormControl>
                    <InputLabel id="measured-values-label">
                      Measured values
                    </InputLabel>
                    <SelectMui
                      labelId="measured-values-label"
                      multiple
                      input={<OutlinedInput label="Measured values" />}
                      value={selectedFields}
                      onChange={(e) =>
                        setSelectedFields(e.target.value as string[])
                      }
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                    >
                      {[
                        { field: "ph", name: "pH" },
                        { field: "tds", name: "TDS (ppm)" },
                        { field: "mercury", name: "Mercury" },
                        { field: "lead", name: "Lead" },
                        { field: "arsenic", name: "Arsenic" },
                      ].map(({ field, name }) => (
                        <MenuItem key={name} value={field}>
                          {name}
                        </MenuItem>
                      ))}
                    </SelectMui>
                  </FormControl>
                  {selectedFields.includes("ph") && (
                    <Field
                      component={TextField}
                      type="number"
                      label="pH"
                      name="ph"
                    />
                  )}
                  {selectedFields.includes("tds") && (
                    <Field
                      component={TextField}
                      type="number"
                      label="TDS ppm"
                      name="tds"
                    />
                  )}

                  {selectedFields.includes("mercury") && (
                    <Field
                      component={CheckboxWithLabel}
                      type="checkbox"
                      name="contaminants.mercury"
                      Label={{ label: "mercury" }}
                    />
                  )}

                  {selectedFields.includes("lead") && (
                    <Field
                      component={CheckboxWithLabel}
                      type="checkbox"
                      name="contaminants.lead"
                      Label={{ label: "lead" }}
                    />
                  )}
                  {selectedFields.includes("arsenic") && (
                    <Field
                      component={CheckboxWithLabel}
                      type="checkbox"
                      name="contaminants.arsenic"
                      Label={{ label: "arsenic" }}
                    />
                  )}
                  <Field
                    component={TextField}
                    type="text"
                    label="Latitude"
                    name="site.latitude"
                  />
                  <Field
                    component={TextField}
                    type="text"
                    label="Longitude"
                    name="site.longitude"
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                  <Map
                    position={[values.site.latitude, values.site.longitude]}
                    setPosition={({ lat, lng }) => {
                      setFieldValue("site", { latitude: lat, longitude: lng })
                    }}
                  />
                  <button
                    type="submit"
                    className="bubble-btn"
                    style={{ marginTop: "2rem" }}
                  >
                    SUBMIT
                  </button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </>
  )
}
