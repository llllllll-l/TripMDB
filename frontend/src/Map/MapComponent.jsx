import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent({latitude, longitude}){

  return(
    <div style={{ height: "400px", width: "100%" }}>
    <MapContainer
      center={[latitude, longitude]}
      zoom={3}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Hej
        </Popup>
      </Marker>
    </MapContainer>
  </div>
  )
}

export default MapComponent