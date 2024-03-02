import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import HostVansLayout from "../../components/HostVansLayout";
import VanList from "../Vans/VanList";

const HostVansDetails = () => {
  const [vanlist, setVanList] = useState({});
  const params = useParams();
  const { name, id, imageUrl, title, description, price, type } = vanlist;

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVanList(data.vans);
      });
  }, [params.id]);

  if (!setVanList) {
    return <h1>Loading</h1>;
  }

  return (
    <section>
      <NavLink to={".."} relative="path" className="back-button">
        &larr; <span>Back to all vans</span>{" "}
      </NavLink>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={imageUrl} alt="" width={150} />
          <div className="host-van-detail-info-text">
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{type}</p>
          </div>
        </div>
      </div>
      <div>
        <HostVansLayout currentVan={vanlist} />
      </div>
    </section>
  );
};

export default HostVansDetails;
