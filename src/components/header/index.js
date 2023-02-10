import React from "react";
import hero from '../../assets/heroimg.jpg';
function Header(props){
    return(
<header>
      <img src={hero} alt="whimsy manor bnb"></img>
      {props.children}
</header>
    );
}
export default Header; 