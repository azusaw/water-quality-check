import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select as SelectMui,
  Stack,
} from "@mui/material"
import { TextField } from "formik-mui"
import { Formik, Form, Field } from "formik"
import { useNavigate } from "react-router-dom"
import { auth, loginGoogle, savePoint } from "../../../libs/firebase"
import Map from "./Map"
import Swal from "sweetalert2/dist/sweetalert2.js"
import { User } from "../../../types/User"
import Header from "../../Header"
import "sweetalert2/src/sweetalert2.scss"

export default function PointForm() {
  const navigate = useNavigate()
  const [user, setUser] = useState<User>()
  const [selectedFields, setSelectedFields] = useState([])

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      user
        ? setUser({
            id: user.uid,
            name: user.displayName,
            photoUrl: user.photoURL,
          })
        : await loginGoogle()
    })
  }, [])

  return (
    <Container>
      <Header />
      <Paper
        style={{
          padding: "3rem 1.5rem",
          margin: "0 auto",
          maxWidth: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Formik
          initialValues={{
            tds: 0,
            ph: 7.0,
            score: 5.0,
            site: {
              latitude: 56.9,
              longitude: -3.4,
            },
          }}
          // validationSchema={toFormikValidationSchema(formPointSchema)}
          onSubmit={(values) => {
            const toSubmit = {
              score: values.score,
              site: values.site,
              user: user,
            }
            selectedFields.forEach((field) => (toSubmit[field] = values[field]))
            savePoint(toSubmit)
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
          {({ values, setFieldValue }) => (
            <Form>
              <Stack direction="column" spacing={2}>
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
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                  >
                    {[
                      { field: "ph", name: "pH" },
                      { field: "tds", name: "TDS (ppm)" },
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

                <Field
                  component={TextField}
                  type="number"
                  label="Drinkability score"
                  name="score"
                />
                <Field
                  component={TextField}
                  type="text"
                  label="latitude"
                  name="site.latitude"
                />
                <Field
                  component={TextField}
                  type="text"
                  label="longitude"
                  name="site.longitude"
                />
                <Map
                  position={[values.site.latitude, values.site.longitude]}
                  setPosition={({ lat, lng }) => {
                    setFieldValue("site", { latitude: lat, longitude: lng })
                  }}
                />
                <button type="submit" className="bubble-btn">
                  SUBMIT
                </button>
                <Button onClick={() => navigate(-1)}>BACK</Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  )
}
