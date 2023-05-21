import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "600px",
    width: "500px",
  };

  const defaultCenter = {
    lat: 34.052235,
    lng: -118.243683,
  };

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyB4ZoDemL-vFUroYWu_VUg-M-zbSK7tj64">
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={defaultCenter}
          zoom={13}
          keyword="sushi"
        ></GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapContainer;
