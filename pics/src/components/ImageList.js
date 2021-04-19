const ImageList = ({ images }) => {
  const imageList = images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });

  return <div>{imageList}</div>;
};

export default ImageList;

//! Purpose of keys props
// For perfomance reason

// When React rerenders component, to compare and
// render more efficiently with previous DOM.
