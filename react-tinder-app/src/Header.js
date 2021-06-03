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

  /*  
import React from 'react';
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";


function Header(){
    return ( 
        <div className="header">
            <IconButton>
                <svg class="MuiSvgIcon-root jss173" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
            </IconButton>
            <img classrc="https://www.infometrics.co.nz/wp-content/uploads/2020/11/Dog_Breeds-825x510.jpg" ></img>
            <IconButton>
                <svg class="MuiSvgIcon-root jss173" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path></svg>
            </IconButton>
        </div>
    )
}

export default Header;
  */