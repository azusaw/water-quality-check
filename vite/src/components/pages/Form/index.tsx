import { useEffect, useState } from "react"
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { auth, loginGoogle, savePoint } from "../../../libs/firebase"
import Map from "./Map"
import Swal from "sweetalert2/dist/sweetalert2.js"
import { User } from "../../../types/User"
import "sweetalert2/src/sweetalert2.scss"

export default function Form() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      datetime: null,
      ph: 7.0,
      score: 5.0,
      latitude: 56.9,
      longitude: -3.4,
    },
    onSubmit: (values) => {
      const toSubmit = {
        id: "",
        datetime: null,
        ph: values.ph,
        score: values.score,
        site: {
          latitude: values.latitude,
          longitude: values.longitude,
        },
        user: user,
      }
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
    },
  })
  const [selectedFields, setSelectedFields] = useState([])
  const setPosition = ({ lat, lng }) => {
    formik.setFieldValue("latitude", lat)
    formik.setFieldValue("longitude", lng)
  }
  const [user, setUser] = useState<User>()

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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude })
    })
  }, [])

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper style={{ padding: "1rem 0.5rem" }}>
        <Grid
          display="flex"
          flexDirection="column"
          gap="1rem"
          padding="1rem"
          style={{ width: "90vw", maxWidth: "500px", margin: "0 auto" }}
        >
          <FormControl>
            <InputLabel id="measured-values-label">Measured values</InputLabel>
            <Select
              labelId="measured-values-label"
              multiple
              input={<OutlinedInput label="Measured values" />}
              value={selectedFields}
              onChange={(e) => setSelectedFields(e.target.value as string[])}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {[
                { field: "pH", name: "pH" },
                { field: "TDS", name: "TDS (ppm)" },
              ].map(({ field, name }) => (
                <MenuItem key={name} value={field}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {selectedFields.map((field) => (
            <TextField
              type="number"
              label={field}
              name={field}
              value={formik.values[field]}
              onChange={formik.handleChange}
            />
          ))}
          <TextField
            type="number"
            label="Drinkability score"
            name="score"
            value={formik.values.score}
            onChange={formik.handleChange}
          />
          <TextField
            type="number"
            label="latitude"
            name="latitude"
            value={formik.values.latitude}
            onChange={formik.handleChange}
          />
          <TextField
            type="number"
            label="longitude"
            name="longitude"
            value={formik.values.longitude}
            onChange={formik.handleChange}
          />
          <Map
            position={[formik.values.latitude, formik.values.longitude]}
            setPosition={setPosition}
          />
          <button type="submit" className="bubble-btn">
            SUBMIT
          </button>
          <Button onClick={() => navigate(-1)}>BACK</Button>
        </Grid>
      </Paper>
    </form>
  )
}
