import React from "react";
import { useOutletContext } from "react-router";
const HostVansPhotos = () => {
  const { currentVan } = useOutletContext();
  return (
    <img
      src={currentVan.imageUrl}
      className="host-van-detail-image"
      alt={currentVan.name}
    />
  );
};

export default HostVansPhotos;
