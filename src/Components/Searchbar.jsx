import React from "react";

const Searchbar = () => {
  return (
    <div className="search">
      <div className="search_list">
          <input type="text" value="Search Food Item"/>
          <input type="text" value="Search category"/>
      </div>
      <div className="search_btn">
              <a href="" className="btn btn-smart">SEARCH</a>
            </div>
    </div>
  );
};

export default Searchbar;
