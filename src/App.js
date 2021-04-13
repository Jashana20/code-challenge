import React from "react";
import "./App.css";
import RegionContainer from "./container/RegionContainer";

const regionEuropeUrl = "https://restcountries.eu/rest/v2/region/europe";
const regionAsiaUrl = "https://restcountries.eu/rest/v2/region/asia";

class App extends React.Component {
  state = {
    allInfoAsia: [],
    allInfoEurope: [],
  };

  componentDidMount() {
    fetch(regionAsiaUrl)
      .then((res) => res.json())
      .then((data) => this.setState({ allInfoAsia: data }));
    fetch(regionEuropeUrl)
      .then((res) => res.json())
      .then((data) => this.setState({ allInfoEurope: data }));
  }

  render() {
    return (
      <div>
        <RegionContainer
          asianInfo={this.state.allInfoAsia}
          europeInfo={this.state.allInfoEurope}
        />
      </div>
    );
  }
}

export default App;

