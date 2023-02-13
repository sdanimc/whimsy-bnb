import React, { useState } from "react";
//import Dropdown from "./dropdown";

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
                        {/*<Dropdown />*/}
                        <div className="dropdowns">
                            <ul className="dropdown aboutdown">
                                <li className={`dropOpt`}> <span onClick={function () { setCurrentPage({ name: "Staff" }) }}>Staff</span></li>
                            </ul>
                            <ul className="dropdown activdown">
                                <li>drop2</li>
                            </ul>
                            <ul className="dropdown bookdown">
                                <li>drop 3</li>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>

        </nav>
    )
}
export default Nav;