import React from "react";
import "./Find.scss";
import MapContainer from "./map/MapContainer";
import SearchPlace from "./map/SearchPlace";

function Find() {
  return (
    <div className="findContainer">
      <SearchPlace />
    </div>
  );
}

export default Find;
