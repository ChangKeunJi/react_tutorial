import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();

    this.state = { spans: 0 };
  }

  componentDidMount() {
    // console.log(this.imageRef);
    // : Information we sees in console, just created
    // When we clicks the arrow.
    // console.log(this.imageRef.current.clientHeight);
    //? Why it returns "0"??
    //: Images haven't been loaded yet..

    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

// 1. Let the imagecard render itself and images
// 2. Reach into DOM and figure out the height of image
// 3. Set the image height on state to rerender
// 4. When rerendering, assign a 'grid-row-end'
