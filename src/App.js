import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Sidebar from './Sidebar/Sidebar';
import "./index.css";

const App = () => (
  <div>
    <Sidebar />
    <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
);

export default App;
