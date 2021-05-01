import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    onTermSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends Component {
//   state = { term: "" };

//   onInputChange = (e) => {
//     this.setState({ term: e.target.value });
//   };

//   onFormSubmit = (e) => {
//     e.preventDefault();

//     this.props.onTermSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="ui segment search-bar">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video Search</label>
//             <input
//               value={this.state.term}
//               onChange={this.onInputChange}
//               type="text"
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
