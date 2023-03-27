import { Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { Avatar, Chip, Stack, Tooltip } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"

const safeMaker = new L.Icon({
  iconUrl: "/pin_blue.svg",
  iconSize: new L.Point(40, 60),
})

const dangerMaker = new L.Icon({
  iconUrl: "/pin_red.svg",
  iconSize: new L.Point(40, 60),
})

export default function MapMarker({ point }) {
  const p = point
  return (
    <Marker
      position={[p.site.latitude, p.site.longitude]}
      icon={p.score < 5.0 ? dangerMaker : safeMaker}
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
            Drinkability score:&nbsp;&nbsp;
            <b
              style={{
                color: p.score < 5.0 ? "indianred" : "royalblue",
              }}
            >
              {p.score.toFixed(1)}
            </b>
            <Tooltip
              title="This score is calculated based on the available data and ranges from 0 to 10. A score below 5 is considered not suitable for drinking water, whereas a score above 5 is."
              placement="top"
            >
              <InfoIcon className="info-icon" />
            </Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            pH:&nbsp;&nbsp;<b>{p.ph ?? "-"}</b>
            <Tooltip
              title="A pH that strongly deviates from 7 indicates there may be problems with the water"
              placement="top"
            >
              <InfoIcon className="info-icon" />
            </Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            TDS:&nbsp;&nbsp;<b>{p.tds ?? "-"}</b>
            <Tooltip
              title="A pH that strongly deviates from 7 indicates there may be problems with the water"
              placement="top"
            >
              <InfoIcon className="info-icon" />
            </Tooltip>
          </div>
          {p.contaminants && (
            <div style={{ display: "flex", alignItems: "center" }}>
              Contaminants:&nbsp;&nbsp;
              {
                <b>
                  {Object.values(p.contaminants).length === 0
                    ? "not tested"
                    : Object.entries(p.contaminants).map(([key, value]) => (
                        <Chip
                          key={key}
                          color={value ? "error" : "success"}
                          label={key}
                          variant="filled"
                        />
                      ))}
                </b>
              }
              <Tooltip
                title="Contaminants marked red were detected in the water, those marked green came back negative. Only contaminants tested for are included."
                placement="top"
              >
                <InfoIcon className="info-icon" />
              </Tooltip>
            </div>
          )}
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
