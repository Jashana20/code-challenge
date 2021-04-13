import React from "react";
import AsiaCountriesContainer from "./AsiaCountriesContainer";
import EuropeCountriesContainer from "./EuropeCountriesContainer";

class RegionContainer extends React.Component {
  state = {
    selectedRegion: "",
    allRegions: ["Europe", "Asia"],
    showEuropeContainer: false,
    showAsiaContainer: false,
  };

  handleSelectedRegion = (e) => {
    e.preventDefault();
    const findSelectedRegion = e.target.value;
    this.setState({ selectedRegion: findSelectedRegion });
    this.handleShowContainer(e);
  };

  handleShowContainer = (e) => {
    if (e.target.value === "Europe") {
      this.setState({
        showEuropeContainer: true,
        showAsiaContainer: false,
      });
    } else if (e.target.value === "Asia") {
      this.setState({
        showAsiaContainer: true,
        showEuropeContainer: false,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Regions:</h1>
        <select onChange={this.handleSelectedRegion}>
          {this.state.allRegions.map((region, index) => (
            <option key={index}>{region}</option>
          ))}
        </select>
        {this.state.selectedRegion !== "" && (
          <div>
            {this.state.selectedRegion && (
              <h2>Countries within {this.state.selectedRegion}:</h2>
            )}
            {this.state.showEuropeContainer ? (
              <EuropeCountriesContainer europeInfo={this.props.europeInfo} />
            ) : (
              <AsiaCountriesContainer asiaInfo={this.props.asianInfo} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default RegionContainer;
