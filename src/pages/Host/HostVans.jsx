import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vanlist, setVanList] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVanList(data.vans);
      });
  }, []);
  return (
    <div>
      <section>
        <h1 className="host-vans-title"> Your Listed Vans </h1>
        <div className="host-vans-list">
          {vanlist.length > 0 ? (
            <section>
              {vanlist.map((van) => {
                const { description, hostId, id, name, imageUrl, price, type } =
                  van;
                return (
                  <div key={id}>
                    <Link
                      to={`/host/vans/${id}`}
                      className="host-van-link-wrapper"
                    >
                      <div className="host-vans-single" key={id}>
                        <img
                          src={imageUrl}
                          alt={`photo of ${name}`}
                          width={400}
                          height={300}
                        />
                        <div className="host-van-info">
                          <h3>{name}</h3>
                          <p>{price}/day</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </section>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </section>
    </div>
  );
};
export default HostVans;
