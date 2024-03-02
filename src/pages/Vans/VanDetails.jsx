import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import HostVansLayout from "../../components/HostVansLayout";

const VanDetails = () => {
  const [vanlist, setVanList] = useState([]);
  const params = useParams();
  const { name, id, imageUrl, title, description, price, type } = vanlist;

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVanList(data.vans);
      });
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {vanlist ? (
        <div key={id} className="van-detail">
          <img src={imageUrl} />
          <i className={`van-type ${type} selected`}>{type}</i>
          <h2>{name}</h2>
          <p className="van-price">
            <span>${price}</span>/day
          </p>
          <p>{description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading.....</h2>
      )}
    </div>
  );
};

export default VanDetails;
