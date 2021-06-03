import React from 'react'
// import AcUnitIcon from '@material-ui/icons/AcUnit';
import "./Header.css";

function Header() {
    return (
        //Bem
    <div className = "header">
        <h2>Hey</h2>
        {/* <AcUnitIcon className="header_icon" fontSize="large"/> */}
        <img
         className="header_logo" 
         src ="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2019/09/iStock-1090668790-632x422.jpg"
         alt=""/>
        <h3>Ho</h3>
    </div>
    );
  }

  export default Header