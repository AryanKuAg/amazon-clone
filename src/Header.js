import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">User</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">User</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">User</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
