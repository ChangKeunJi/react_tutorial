import React from "react";

const Accordian = ({ items }) => {
  const onTitleClick = (i) => {
    console.log("Clicked!", i);
  };

  const renderedItems = items.map((item, i) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(i)}>
          {/* If want to put a parameter, use callback method */}
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordian;
