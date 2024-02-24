import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Marker, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import Sidebar from '../Sidebar/Sidebar';
import "./index.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const States = () => (
    <div>
      <Sidebar />
      <ComposableMap
        projection="geoAlbersUsa"
        minZoom={.8}
        maxZoom={30}
      >
        <ZoomableGroup center={[0, 0]} zoom={.9}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <a key={geo.rsmKey} href={`/${geo.properties.name}`}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    title={geo.properties.name}
                    fill={`rgb(42,53,77,${getRandom() + .2})`}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}>
                    <title>{geo.properties.name}</title>
                    </Geography>
                </a>
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={1} fill="#000000" strokeWidth={1} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#EDEDED", "font-size": ".2rem" }}
            >
              {name}
            </text>
          </Marker>
        ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );

  export default States;