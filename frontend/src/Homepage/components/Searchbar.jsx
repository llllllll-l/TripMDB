import { useState } from "react";
import { PropTypes } from "prop-types";

function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };
  return (
    <div className="search-bar">
      <label>Search in our wast movie collection: </label>
      <input
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func,
};

export default Searchbar;
