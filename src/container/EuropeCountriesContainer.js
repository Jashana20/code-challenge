import React from "react";
import EuropeCountryCard from "../presentational/EuropeCountryCard";

class EuropeCountriesContainer extends React.Component {
  state = {
    selectedCountry: "",
    europeCountryObject: {},
  };

  handleselectedCountry = (e) => {
    this.setState({ selectedCountry: e.target.value });
    this.findCountryObject(e);
  };

  findCountryObject = (e) => {
    const countryObj = this.props.europeInfo.find(
      (obj) => obj.name === e.target.value
    );
    this.setState({ europeCountryObject: countryObj });
  };

  render() {
    return (
      <div>
        <select onChange={this.handleselectedCountry}>
          {this.props.europeInfo.map((country, index) => (
            <option key={index}>{country.name}</option>
          ))}
        </select>
        {this.state.selectedCountry !== "" && (
          <EuropeCountryCard countryObj={this.state.europeCountryObject} />
        )}
      </div>
    );
  }
}

export default EuropeCountriesContainer;
