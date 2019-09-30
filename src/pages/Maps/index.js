import React from "react";

function Maps() {
  return (
    <React.Fragment>
      <div className="title-wrapper">
        <h2>Maps</h2>
      </div>
      <iframe
        width="100%"
        height="520"
        frameBorder="0"
        title="Idaho Mountains"
        src="https://juliarichards.carto.com/builder/eae64ec7-73c2-4eb6-af44-90cf5d7c50a3/embed"
      />
    </React.Fragment>
  );
}

export default Maps;
