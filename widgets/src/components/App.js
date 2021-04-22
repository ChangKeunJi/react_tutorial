import Accordian from "./Accordian";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library",
  },
  {
    title: "How do you use React?",
    content: "By creating component",
  },
];

const App = () => {
  return (
    <div>
      <Accordian items={items} />
    </div>
  );
};

export default App;
