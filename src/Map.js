import React, { useState } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const geolocateControlStyle = {
  right: 10,
  top: 10,
};

const Map = () => {
  const [viewport, setViewport] = useState({
     latitude: navigator.geolocation.getCurrentPosition.latitude,
    longitude: navigator.geolocation.getCurrentPosition.longitude,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });


  const [pumps, setPumps] = useState([]);

  const fetchPumps = async (nextViewport) => {
    const rawResponse = await fetch(
      `http://localhost:3100/geolocate/${nextViewport.latitude}/${nextViewport.longitude}/gasoline/any/`
    );
    const response = await rawResponse.json();
    setPumps(response.pumps);
  };


  return (
    <ReactMapGL
      {...viewport}
      minZoom={11}
      mapboxApiAccessToken={
        "pk.eyJ1IjoibG9yZW56b2FuZHJlb3R0aSIsImEiOiJja3Q0ZndxYmoweHVrMzByMWdrNHd5Zno1In0.JXPUPxIQ6yLbD3HBa_pHvQ"
      }
      mapStyle={"mapbox://styles/mapbox/light-v10"}
      onViewportChange={(nextViewport) => {
        setViewport(nextViewport);
        fetchPumps(nextViewport);
      }}
    >
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
        style={geolocateControlStyle}
      />

      {pumps.map((pump) => (
        <Marker latitude={+pump.lat} longitude={+pump.lon} key={pump.lat+pump.lon}>
          <button className={"poi"}>{pump.brand}: {pump.fuels.gasoline.self}</button>
        </Marker>
      ))}
    </ReactMapGL>

  );
};
export default Map;