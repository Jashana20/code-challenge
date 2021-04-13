import React from "react";
import AsiaCountryCard from "../presentational/AsiaCountryCard";

class AsiaCountriesContainer extends React.Component {
  state = {
    selectedCountry: "",
    asianCountryObject: {},
  };

  handleselectedCountry = (e) => {
    this.setState({ selectedCountry: e.target.value });
    this.findCountryObject(e);
  };

  findCountryObject = (e) => {
    const countryObj = this.props.asiaInfo.find(
      (obj) => obj.name === e.target.value
    );
    this.setState({
      asianCountryObject: countryObj,
    });
    console.log(this.state.currency);
  };

  render() {
    return (
      <div>
        <select onChange={this.handleselectedCountry}>
          {this.props.asiaInfo.map((country, index) => (
            <option key={index}>{country.name}</option>
          ))}
        </select>
        {this.state.selectedCountry !== "" && (
          <AsiaCountryCard
            countryObj={this.state.asianCountryObject}
            currency={this.state.currency}
          />
        )}
      </div>
    );
  }
}

export default AsiaCountriesContainer;
