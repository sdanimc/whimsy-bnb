import React, { useState } from "react";
import Dropdown from "./dropdown";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
        //setDropOpen,
        //dropOpt,
        //setDropOpt
    } = props;
  
    return (
        <nav>
            <ul className="menus">
                {pages.map((Pagea) => (
                <li className={`mx-5 ${currentPage.name === Pagea.name && 'navActive'} ${Pagea.name}`} key={Pagea.name}>
                    <span onClick={() => setCurrentPage(Pagea)}>
                        {/*onMouseEnter={function(){setDropOpen(true); console.log(Pagea); setDropOpt(Pagea) }} 
                onMouseLeave={function(){setDropOpen(false)}}*/}
                        {Pagea.name}
                        <Dropdown />
                        {/*get rid of everything
                        <ul className="dropdowns"><Dropdowns /> </ul> in dropdowns switch case if dropopt = About etc. return {aboutpages.map(...)}
                        make multiple arrarys plus master array = arr1 + arr2 etc. master array for current page */}

                    </span>
                </li>
            ))}
            </ul>

        </nav>
    )
}
export default Nav;