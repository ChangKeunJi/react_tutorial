import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (i) => {
    setActiveIndex(i);
  };

  const renderedItems = items.map((item, i) => {
    const active = i === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(i)}>
          {/* If want to put a parameter, use callback method */}
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordian;
