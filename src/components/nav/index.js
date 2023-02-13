import React, { useState } from "react";
import Dropdown from "./dropdown";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;
  
    return (
        <nav>
            <ul className="menus">
                {pages.map((Pagea) => (
                <li className={`mx-5 ${currentPage.name === Pagea.name && 'navActive'} ${Pagea.name}`} key={Pagea.name}>
                    <span onClick={() => setCurrentPage(Pagea)}>
                   {/* <span onClick={function(){setCurrentPage({name: Pagea.name})}}>*/}
                        {Pagea.name}
                        </span>
                        <Dropdown />
                </li>
            ))}
            </ul>

        </nav>
    )
}
export default Nav;