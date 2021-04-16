const Spinner = ({ message }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{message}</div>
    </div>
  );
};

// if there is no props, then default prop kicks in
// Good for reusability
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
