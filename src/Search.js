import React, { Component } from "react";

class Search extends Component {
  state = {
    city: "Mexico",
  };

  handleChange = (e) => {
    let newCity = e.target.value;
    this.setState({ city: newCity });
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="search"
          name="search"
          id=""
          value={this.state.city}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
