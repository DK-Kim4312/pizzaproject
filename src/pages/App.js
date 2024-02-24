import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Marker, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import Sidebar from '../Sidebar/Sidebar';
import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Map from './Map';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Map/>}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;