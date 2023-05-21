import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "400px",
    width: "400px",
    padding: "10px",
  };

  const defaultCenter = {
    lat: 33.749,
    lng: -84.388,
  };

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyB4ZoDemL-vFUroYWu_VUg-M-zbSK7tj64">
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={defaultCenter}
          zoom={13}
        >
          <Marker position={{ lat: 33.753746, lng: -84.38633 }} />
          <Marker position={{ lat: 33.757669, lng: -84.384682 }} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapContainer;
