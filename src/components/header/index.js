import React from "react";
import hero from '../../assets/heroimg2.jpg';
import Nav from "../nav";
function Header(props){
    return(
<header>
      <img src={hero} alt="whimsy manor bnb"></img>
      <Nav />
</header>
    );
}
export default Header; 
