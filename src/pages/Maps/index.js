import React from "react";
import denverMap from "./images/Denver_Maps.png";
import idahoMtn from "./images/Idaho_Mtns.png";
import "./Maps.css";

const mapCollection = [
  {
    image: denverMap,
    title: "Denver Neighborhood Map",
    link: "https://julia-richards.github.io/denver-maps/"
  },
  {
    image: idahoMtn,
    title: "Idaho Mountains",
    link:
      "https://juliarichards.carto.com/builder/eae64ec7-73c2-4eb6-af44-90cf5d7c50a3/embed"
  }
];

function Maps() {
  return (
    <React.Fragment>
      <div className="title-wrapper">
        <h2>Maps</h2>
      </div>
      <div className="map-card-container">
        {mapCollection.map((map, i) => (
          <div className="map-card">
            <a href={map.link}>
              <img className="map-card-image" src={map.image} alt={map.title} />
              <h3 className="map-card-title">{map.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Maps;
