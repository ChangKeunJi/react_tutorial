import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.log("effect!!");
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, {
      capture: true,
    });

    // React performs the cleanup when the component unmounts.
    return () => {
      console.log("unmounted!!");
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option === selected) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select A Color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

//! Why it's hard to detect a click outside dropdown ???
//! ; Event Bubbling

// click event raises up to parent elements in DOM
// That's why clicking a list closes dropdown

// addEventListener gets called first then goes from child to parent

// body - first
// dropdown - third
// list - second

// That means when the click happens
// state 'open' always will be false at first
// then clicking menu or list makes 'open' true.
// that's why dropdown is not closed
