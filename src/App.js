import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./index.css";

const App = () => (
  <div>
    <ComposableMap
      projection="geoMercator"
      // width={window.innerWidth * .8}
      // height={window.innerHeight * .8}
    >
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <a key={geo.rsmKey} href={`/${geo.properties.name}`}>
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#97bbcc"
              />
            </a>
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
);

export default App;