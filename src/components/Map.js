import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { cities } from "../data/cities";
import L from "leaflet";

// Custom icon for "+" marker
const plusIcon = L.divIcon({
  html: '<div style="font-size: 20px; color: red; font-weight: bold;">+</div>',
  iconSize: [25, 25], // Adjust size of the icon
  className: "custom-marker", // Optional CSS class
});

const Map = () => {
  return (
    <MapContainer
      center={[20, 0]} // Center the map
      zoom={2} // Adjust zoom level
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {cities.map((city) => (
        <Marker key={city.id} position={city.position} icon={plusIcon}>
          <Popup>
            <h3>{city.name}</h3>
            <p><b>Possible Disasters:</b> {city.disasters.join(", ")}</p>
            <p><b>Preparation Tips:</b> {city.preparation}</p>
            <p><b>Emergency Contacts:</b> {city.contact}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
