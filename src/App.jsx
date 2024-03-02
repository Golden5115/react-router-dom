import { ReactDOM } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Host/Dashboard";
import "./index.css";
import Home from "./pages/Vans/Home";
import About from "./pages/Vans/About";
import server from "./server";
import VanList from "./pages/Vans/VanList";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVansDetails from "./pages/Host/HostVansDetails";
import HostVansLayout from "./components/HostVansLayout";
import HostVansInfo from "./pages/Host/HostVansInfo";
import HostVansPricing from "./pages/Host/HostVansPricing";
import HostVansPhotos from "./pages/Host/HostVansPhotos";

function App() {
  return (
    <div className=" mx-[20vw]">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/vans" element={<VanList />} />
            <Route path="/vans/:id" element={<VanDetails />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetails />}>
                <Route index element={<HostVansInfo />} />
                <Route path="pricing" element={<HostVansPricing />} />
                <Route path="photos" element={<HostVansPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
