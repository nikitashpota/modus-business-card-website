import Map, { Marker } from "react-map-gl";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoibnNocG90YSIsImEiOiJjbGl1ZTV4b28waHRyM2dteW5vZmljdmZ6In0.icHkmGpPpYWNP-ivSaE3Xw";
const MAP_STYLE = "mapbox://styles/nshpota/cliuohu0t008u01qygthg3qct";
//mapboxAccessToken={MAPBOX_TOKEN}
const MyMap = () => {
  return (
    <Map
      initialViewState={{
        latitude: 55.7558,
        longitude: 37.6173,
        zoom: 15.4,
      }}
      styleDiffing
      style={{ minHeight: "240px" }}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle={MAP_STYLE}
      attributionControl={false}
    />
  );
};

export default MyMap;
