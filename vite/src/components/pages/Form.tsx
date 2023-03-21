import { useEffect, useState } from "react"
import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { auth, savePoint } from "../../libs/firebase"
import PointEntryFormMap from "../PointEntryFormMap"
import Swal from "sweetalert2/dist/sweetalert2.js"
import { User } from "../../types/User"
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
  const position = [formik.values.latitude, formik.values.longitude]
  const setPosition = ({ lat, lng }) => {
    formik.setFieldValue("latitude", lat)
    formik.setFieldValue("longitude", lng)
  }
  const [user, setUser] = useState<User>()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user
        ? setUser({
            id: user.uid,
            name: user.displayName,
            photoUrl: user.photoURL,
          })
        : navigate("/auth")
    })
  }, [])

  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper>
        <Grid
          display="flex"
          flexDirection="column"
          gap="1rem"
          padding="1rem"
          style={{ width: "90vw", maxWidth: "500px" }}
        >
          <Typography variant="subtitle1" component="h1" textAlign="start">
            Point entry
          </Typography>
          <TextField
            type="number"
            label="PH"
            name="ph"
            value={formik.values.ph}
            onChange={formik.handleChange}
          />
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
          <PointEntryFormMap position={position} setPosition={setPosition} />
          <Button type="submit" variant="contained">
            SUBMIT
          </Button>
          <Button onClick={() => navigate(-1)}>BACK</Button>
        </Grid>
      </Paper>
    </form>
  )
}
