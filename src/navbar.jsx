import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  font-family: "Montserrat", sans-serif;
  position: sticky;
  top: 0;
  z-index: 100;

  .logo {
    font-size: 28px;
    font-weight: bold;
    color: #8a5231;
    letter-spacing: 2px;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 20px;
    cursor: pointer;
    font-size: 16px;
    color: #727272;
    transition: color 0.3s ease;
    font-weight: 500;
    line-height: 19.5px;
    padding-bottom: 5px;
  }

  li:hover {
    color: #8a5231;
  }

  .menu-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  .download-btn {
    background-color: #8a5231;
    color: white;
    padding: 10px 30px;
    width: 163px;
    height: 58px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    font-family: "Montserrat", sans-serif;
  }

  .download-btn:hover {
    background-color: #b16843;
  }
  .active {
    border-bottom: 2px solid #8f5843;
    color: #8a5231;
    font-weight: 700;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">DRINKABLE</div>
      <div className="menu-items">
        <ul>
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Menu</li>
          <li>Contact Us</li>
        </ul>
        <button className="download-btn">Download</button>
      </div>
    </Nav>
  );
};

export default Navbar;
