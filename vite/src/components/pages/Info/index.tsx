import { Grid, Paper, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Header from "../../Header"

const PreviewBox = ({ title, children }) => (
  <Grid item xs={12} sm={6}>
    <Paper
      sx={{
        padding: "1rem",
        color: "#1c446c",
      }}
      elevation={0}
    >
      <Typography component="h2" variant="h6">
        {title}
      </Typography>
      {children}
    </Paper>
  </Grid>
)

export default function Info() {
  return (
    <>
      <Header />
      <Container>
        <Grid container direction="row" spacing={2} alignItems="stretch">
          <PreviewBox title="Purification">
            <Typography component="p" variant="body2">
              One of the simplest ways to purify water is by boiling it for 5
              minutes. However, this only kills off bacteria, not their
              byproducts, heavy metals, sediment or other pollutants. Filters
              like{" "}
              <a href="https://black-blum.com/pages/charcoal-water-filter">
                charcoal
              </a>{" "}
              can be an inexpensive and reusable way to reduce pollutants. Other
              alternatives include purifying chemicals and UV treatment.
            </Typography>
            <Typography component="p" variant="body2">
              <a href="https://www.mountaineering.scot/safety-and-skills/health-and-hygiene/drinking-water">
                Read more - Mountaineering Scotland
              </a>
            </Typography>
          </PreviewBox>
          <PreviewBox title="Title">
            <Typography component="p" variant="body2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              illum odit corrupti quae in excepturi, quisquam possimus deleniti
              vitae, perferendis repellendus officiis aperiam, exercitationem
              harum veritatis accusamus quidem pariatur velit!
            </Typography>
            <Typography component="p" variant="body2">
              <a href="www.example.com">Read more - External Site</a>
            </Typography>
          </PreviewBox>
          <PreviewBox title="Title">
            <Typography component="p" variant="body2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              illum odit corrupti quae in excepturi, quisquam possimus deleniti
              vitae, perferendis repellendus officiis aperiam, exercitationem
              harum veritatis accusamus quidem pariatur velit!
            </Typography>
            <Typography component="p" variant="body2">
              <a href="www.example.com">Read more - External Site</a>
            </Typography>
          </PreviewBox>
          <PreviewBox title="Title">
            <Typography component="p" variant="body2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              illum odit corrupti quae in excepturi, quisquam possimus deleniti
              vitae, perferendis repellendus officiis aperiam, exercitationem
              harum veritatis accusamus quidem pariatur velit!
            </Typography>
            <Typography component="p" variant="body2">
              <a href="www.example.com">Read more - External Site</a>
            </Typography>
          </PreviewBox>
        </Grid>
      </Container>
    </>
  )
}
