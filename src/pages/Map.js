import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Marker, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import Sidebar from '../Sidebar/Sidebar';
import "./index.css";

const getRandom = () => Math.random() * 0.8;

const markers = [
    {
        markerOffset: 1,
        name: "Buenos Aires",
        coordinates: [-58.3816, -34.6037]
    },
    { markerOffset: 5, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 5, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 5, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 5, name: "Bogota", coordinates: [-74.0721, 4.711] },
    { markerOffset: 5, name: "Quito", coordinates: [-78.4678, -0.1807] },
    { markerOffset: 5, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
    { markerOffset: 5, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
    { markerOffset: 5, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
    { markerOffset: 5, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
    { markerOffset: 5, name: "Caracas", coordinates: [-66.9036, 10.4806] },
    { markerOffset: 5, name: "Lima", coordinates: [-77.0428, -12.0464] }
];

const Map = () => (
    <div>
        <Sidebar />
        <ComposableMap
            projection="geoMercator"
            minZoom={.8}
            maxZoom={30}
        >
            <ZoomableGroup center={[0, 0]} zoom={.9}>
                <Geographies geography="/features.json">
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

export default Map;