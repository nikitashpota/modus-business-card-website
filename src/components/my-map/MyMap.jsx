import React, { useState, useMemo } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./Pin";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoibnNocG90YSIsImEiOiJjbGl1ZTV4b28waHRyM2dteW5vZmljdmZ6In0.icHkmGpPpYWNP-ivSaE3Xw";
const MAP_STYLE = "mapbox://styles/nshpota/cliuohu0t008u01qygthg3qct";

const markers = [
  { id: 1, latitude: 55.77, longitude: 37.591 }, //55.770,37.591
  { id: 2, latitude: 55.769, longitude: 37.596 }, //55.769,37.596
];

const MyMap = () => {
  // const pins = useMemo(() => (
  //   <Marker
  //     key={1}
  //     latitude={55.77}
  //     longitude={37.591}
  //     anchor="bottom"
  //     onClick={(e) => {
  //       e.originalEvent.stopPropagation();
  //     }}
  //   >
  //     <Pin />
  //   </Marker>
  // ));
  return (
    <>
      <Map
        initialViewState={{
          latitude: 55.7702,
          longitude: 37.5912,
          zoom: 15.42,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={MAPBOX_TOKEN}
        attributionControl={false}
        style={{ minHeight: "240px", maxHeight: "240px" }}
      >
        <Marker longitude={37.5912} latitude={55.7702} anchor="bottom">
          <Pin/>
        </Marker>
      </Map>
    </>
  );
};

export default MyMap;
