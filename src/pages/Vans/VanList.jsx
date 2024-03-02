import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const VanList = () => {
  const [vanlist, setVanList] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.vans);
        setVanList(data.vans);
      });
  }, []);
  return (
    <div className="van-list-container">
      <h1>Explore Our Van Option</h1>
      <div className="van-list">
        {vanlist.map((van) => {
          const { id, name, imageUrl, price, type, discription } = van;
          return (
            <div key={id} className="van-tile">
              <img src={imageUrl} />
              <div className="van-info">
                <h3>{name}</h3>
                <p>
                  {price} <span>/day</span>
                </p>
                <i className={`van-type ${type} selctect`}>
                  <Link to={`/vans/${id}`}>{type}</Link>
                  <Outlet />
                </i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VanList;
