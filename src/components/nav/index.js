import React, { useState } from "react";

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
                            {Pagea.name}
                        </span>
                        <div className="dropdowns">
                            <ul className="dropdown aboutdown">
                            <li className={`dropOpt`}> <span onClick={function () { setCurrentPage({ name: "About" }) }}>History</span></li>
                                <li className={`dropOpt`}> <span onClick={function () { setCurrentPage({ name: "Staff" }) }}>Staff</span></li>
                                <li className={`dropOpt`}> <span onClick={function () { setCurrentPage({ name: "Ghosts" }) }}>Ghosts</span></li>
                                <li className={`dropOpt`}> <span onClick={function () { setCurrentPage({ name: "Maps" }) }}>Maps</span></li>
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