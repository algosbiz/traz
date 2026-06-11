"use client";

import React from "react";

const mapSrc =
  "https://www.google.com/maps?q=1111%2046%20Ave%20SE%2C%20Calgary%2C%20AB%20T2G%202A6%2C%20Canada&output=embed";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="map-area">
        <div className="container">
          <iframe
            src={mapSrc}
            title="DMG Masonry location on Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
