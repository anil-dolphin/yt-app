import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <div className="ui form">
        <form onSubmit={onFormSubmit}>
          <div className="ui field">
            <label>Search Videos</label>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
