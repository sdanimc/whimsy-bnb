import React from "react";
function Dropdown(props) {
    const {
        setCurrentPage
    } = props
    return(
        <div className="dropdowns">
        <ul className="dropdown aboutdown">
            <li className={`dropOpt`}> <span onClick={function(){setCurrentPage({name: "Staff"})}}>Staff</span></li>
        </ul>
        <ul className="dropdown activdown">
            <li>drop2</li>
        </ul>
        <ul className="dropdown bookdown">
            <li>drop 3</li>
        </ul>
        </div>
    )    }
    


export default Dropdown;