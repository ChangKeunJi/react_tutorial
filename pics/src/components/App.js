import { Component } from "react";

import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const res = await unsplash.get("search/photos", {
      params: { query: term },
      // Attach to url
    });

    //! console.log(this);
    // "this" becomes "this.props" of SearchBar component
    // Because it gets called like this.props.onSubmit

    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

//! Flow

// 1. Component renders itself without images
// 2. onSearchSubmit method called
// 3. Request made to unsplash
// .. wait
// 4. Request complete
// 5. Set image data on state of App component
// 6. App component rerenders and show images
