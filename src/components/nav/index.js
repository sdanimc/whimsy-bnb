import React from "react";
import { menuItems } from "./menuitems";
function Nav(props){
    return(
        <nav>
            <ul className="menus">{menuItems.map((menu, index) => {
          return (
            <li className="menu-items" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}</ul>
        </nav>
    )
}
export default Nav;