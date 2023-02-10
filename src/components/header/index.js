import React from "react";
import hero from '../assets/eugenivy_now-LNcoblo8nj8-unsplash(1).jpg';
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