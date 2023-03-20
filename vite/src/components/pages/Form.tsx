import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { savePoint } from "../../libs/firebase"
import PointEntryFormMap from "../PointEntryFormMap"

export default function Form() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      datetime: "",
      ph: 0,
      score: 0,
      latitude: 56.9,
      longitude: -3.4,
    },
    onSubmit: (values) => {
      console.dir(values)
      const toSubmit = {
        id: "",
        datetime: values.datetime,
        ph: values.ph,
        score: values.score,
        site: {
          latitude: values.latitude,
          longitude: values.longitude,
        },
        user: {
          id: "dummy",
          name: "Hoge"
        }
      }
      savePoint(toSubmit)
    },
  })
  const position = [formik.values.latitude, formik.values.longitude]
  const setPosition = ({ lat, lng }) => {
    formik.setFieldValue("latitude", lat)
    formik.setFieldValue("longitude", lng)
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper>
        <Grid
          display="flex"
          flexDirection="column"
          gap="1rem"
          padding="1rem"
          minWidth="500px"
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
          <Button onClick={() => navigate(-1)}>BACK</Button>
          <Button type="submit">SUBMIT</Button>
        </Grid>
      </Paper>
    </form>
  )
}

