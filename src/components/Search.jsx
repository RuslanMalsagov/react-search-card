import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ search, handleSearch }) => {
  return (
    <div className="search">
      <input
        placeholder="Search ..."
        className="input"
        value={search}
        onChange={handleSearch}
      ></input>
      <button className="btnSearch">
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default Search;
