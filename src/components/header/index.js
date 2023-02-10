import React from "react";
import hero from '../../assets/heroimg.jpg';
function Header(props){
    return(
<header className="flex-row space-between px-1">
      <h1>Whimsy Bed and Breakfast</h1>
      <img src={hero} alt="whimsy manor bnb"></img>
      {props.children}

</header>
    );
}
export default Header; 