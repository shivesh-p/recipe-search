/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
function Header({ handleSearch }) {
  const [searchTerm, setsearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearchHeader(searchTerm) {
    if (searchTerm) {
      handleSearch(searchTerm);
      setSearchParams({
        search: searchTerm,
      });
    }
  }
  return (
    <header className="main_header">
      <div className="text_container">
        <h1 className="header-title">
          Look for <span>Recipes</span> of Food
        </h1>
        <p className="header_description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, iste
          ipsum porro natus minus eveniet commodi dolore sapiente est quae!
        </p>
        <div className="header-input-container">
          <input
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value.trim())}
            type="text"
            placeholder="Find..."
          />
          <button onClick={(e) => handleSearchHeader(searchTerm)}>
            Search
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D"
          className="main_img"
          alt=""
        />
      </div>
    </header>
  );
}
export default Header;
