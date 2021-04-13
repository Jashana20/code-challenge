import React from "react";
import "../Card.css";

const asiaCountryCard = (props) => {
  return (
    <div className="card">
      <h2>Name: {props.countryObj.name}</h2>
      <h3>Capital: {props.countryObj.capital}</h3>
      <h3>Population: {props.countryObj.population}</h3>
      <h3>Currencies: {props.countryObj.currencies[0].name}</h3>
      <h3>Flag:</h3>
      <img alt="flag" className="imageSize" src={props.countryObj.flag} />
    </div>
  );
};

export default asiaCountryCard;
