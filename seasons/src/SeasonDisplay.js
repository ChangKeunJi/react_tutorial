import "./SeasonDisplay.css";
// In production, Webpack makes a single minified CSS
// and puts into HTML

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, It's cold!",
    iconName: "snowflake",
  },
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());

  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon icon-left massive`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon icon-right massive`} />
    </div>
  );
};

export default SeasonDisplay;
