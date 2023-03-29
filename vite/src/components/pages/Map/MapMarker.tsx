import { Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { Avatar, Chip, Stack, Tooltip } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"
import React from "react"

const safeMaker = new L.Icon({
  iconUrl: "/pin_blue.svg",
  iconSize: new L.Point(40, 60),
})

const dangerMaker = new L.Icon({
  iconUrl: "/pin_red.svg",
  iconSize: new L.Point(40, 60),
})

const neutralMaker = new L.Icon({
  iconUrl: "/pin_yellow.svg",
  iconSize: new L.Point(40, 60),
})

export default function MapMarker({ point }) {
  const p = point
  return (
    <Marker
      position={[p.site.latitude, p.site.longitude]}
      icon={p.score == 0 ? neutralMaker : p.score < 0 ? dangerMaker : safeMaker}
    >
      <Popup>
        <div
          style={{
            fontSize: "0.75rem",
            opacity: "75%",
            marginTop: "1rem",
          }}
        >
          {p.site.latitude.toFixed(2)}°N&nbsp;
          {p.site.longitude.toFixed(2)}°W
        </div>
        <Stack direction="column" sx={{ marginTop: "0.8rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ lineHeight: "27px" }}>Drinkability</span>
            <Tooltip
              title="Water is considered good if contaminant checks return negative and TDS falls within acceptable range. If any contaminant returns positive, drinkability is bad. "
              placement="top"
            >
              <InfoIcon className="info-icon" />
            </Tooltip>
            :&nbsp;&nbsp;
            <b
              style={{
                color:
                  p.score < 0
                    ? "indianred"
                    : p.score > 0
                    ? "steelblue"
                    : "yellow",
              }}
            >
              {p.score < 0 ? "bad" : p.score > 0 ? "good" : "neutral"}
            </b>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ lineHeight: "27px" }}>pH</span>
            <Tooltip
              title="A pH that strongly deviates from 7 indicates there may be problems with the water"
              placement="top"
            >
              <InfoIcon className="info-icon" />
            </Tooltip>
            :&nbsp;&nbsp;<b>{!("ph" in p) ? "-" : p.ph.toFixed(1)}</b>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", verticalAlign: "middle" }}>
              <span style={{ lineHeight: "27px" }}>TDS</span>
              <Tooltip
                title="Contaminants marked red were detected in the water, those marked green came back negative. Only contaminants tested for are included."
                placement="top"
              >
                <InfoIcon className="info-icon" />
              </Tooltip>
              :&nbsp;&nbsp;
              <b>{p.tds ?? "-"}</b>
            </div>
          </div>
          <div style={{ marginTop: 5 }}>
            <div style={{ display: "flex", verticalAlign: "middle" }}>
              <span style={{ lineHeight: "27px" }}>Contaminants</span>
              <Tooltip
                title="Contaminants marked red were detected in the water, those marked green came back negative. Only contaminants tested for are included."
                placement="top"
              >
                <InfoIcon className="info-icon" />
              </Tooltip>
              :&nbsp;&nbsp;
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {!p.contaminants || Object.values(p.contaminants).length === 0 ? (
                <em>not tested</em>
              ) : (
                Object.entries(p.contaminants).map(([key, value]) => (
                  <Chip
                    sx={{ marginRight: "3px" }}
                    size="small"
                    key={key}
                    color={value ? "error" : "success"}
                    label={key}
                    variant="outlined"
                  />
                ))
              )}
            </div>
          </div>
        </Stack>
        <Stack
          direction={"row"}
          spacing={1}
          alignItems="center"
          sx={{
            marginTop: "1rem",
            fontSize: 14,
          }}
        >
          <Avatar
            alt={p.user.name}
            src={p.user.photoUrl}
            style={{ marginRight: 10 }}
          />
          {p.user.name}
        </Stack>
        <div
          style={{
            fontSize: "0.8rem",
            opacity: "75%",
            textAlign: "right",
          }}
        >
          {p.datetime.toDate().toLocaleString()}
        </div>
      </Popup>
    </Marker>
  )
}
