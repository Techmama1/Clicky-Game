import React from "react";
import "./NavBar.css";


// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
    navbarStyle: {
      background: '#e062c9',
      fontStyle: "Helvetica",
      alignItems: "center",
      justifyContent: "center",
      display:"flex",
      width: "100%"
    },
    listStyle : {
        listStyleType: "none",
        display: "flex",
        margin: "15px",
        alignSelf: "center",
        fontStyle: "Arial-bold"
        
    },
    // title : {
    //     display:"flex",
    //     alignSelf: "center"

        // backgroundImage : `url("http://i68.tinypic.com/25k4mye.jpg")`,
        // backgroundPosition: "center center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // height: "50px",
        // widht: "50px"
        
    // }
  };
  
  // We use JSX curly braces to evaluate the style object on the JSX tag
  
  const NavBar = (props) => (
    <nav style={styles.navbarStyle} className="NavBar">
     
      <ul style={styles.listStyle}>
          <li id="score"> Score: {props.currentScore}</li> 
          <li id="topScore"> Top Score: {props.topScore}</li>
      </ul>    
    </nav>
  );
  
  export default NavBar;
