import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { cities } from "../data/cities";
import L from "leaflet";

// Custom marker icon for "+" symbol
const plusIcon = L.divIcon({
  html: '<div style="font-size: 20px; color: red; font-weight: bold;">+</div>',
  iconSize: [25, 25],
  className: "custom-marker",
});

const Map = () => {
  return (
    <div className="map-wrapper">
      <MapContainer
        center={[20, 0]} // Adjust the initial center of the map
        zoom={2} // Zoom level
        style={{ height: "100%", width: "100%" }} // Ensure the map fills the container
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
      <style jsx>{`
        .map-wrapper {
          width: 80%;
          height: 70vh;
          margin: 20px auto;
          border: 2px solid #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
          background: #e6e6e6;
        }
      `}</style>
    </div>
  );
};

export default Map;
