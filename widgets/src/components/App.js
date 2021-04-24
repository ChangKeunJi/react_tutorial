// import Accordian from "./Accordian";
// import Search from "./Search";
import { useState } from "react";
import Dropdown from "./Dropdown";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a frontend framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library",
//   },
//   {
//     title: "How do you use React?",
//     content: "By creating component",
//   },
// ];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "The Color Blue",
    value: "Blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
