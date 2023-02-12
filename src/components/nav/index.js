import React from "react";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
        setDropOpen
    } = props;
    return (
        <nav>
            <ul className="menus">
                {pages.map((Page) => (
                <li className={`mx-5 ${currentPage.name === Page.name && 'navActive'} ${Page.name}`} key={Page.name}>
                    <span onClick={() => setCurrentPage(Page)} onMouseEnter={()=> setDropOpen(true)} onMouseLeave={()=> setDropOpen(false)}>
                        {Page.name}
                    </span>
                </li>
            ))}
            </ul>

        </nav>
    )
}
export default Nav;