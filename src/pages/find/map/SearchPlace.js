import React, { useState } from "react";
import MapContainer from "./MapContainer";
import "./SearchPlace.scss";

const SearchPlace = () => {
  const [inputText, setInputText] = useState("KB 국민은행 ");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <div className="mapContainer">
        <div className="mapInputContainer">
          <form className="mapInputForm" onSubmit={handleSubmit}>
            <input
              placeholder="KB 국민은행 "
              onChange={onChange}
              value={inputText}
            />
            <button type="submit">검색</button>
          </form>

          <div className="mapInputListContainer"></div>
        </div>

        <MapContainer searchPlace={place} />
      </div>
    </>
  );
};

export default SearchPlace;
