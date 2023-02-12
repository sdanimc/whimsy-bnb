import React from "react";
import PageContent from "../pagecontent";
//import about pages
//import AboutGhosts from "../../pages/about/ghosts";
import AboutHistory from "../../pages/about/history";
/*import AboutMaps from "../../pages/about/maps";
import AboutStaff from "../../pages/about/staff";*/

//import activities pages
import Tours from "../../pages/activities/ghosttours";
/*import Hiking from "../../pages/activities/hiking";
import LocalAdventures from "../../pages/activities/localadventures";
import MoreInfo from "../../pages/activities/moreinfo";*/

//import booking info pages
import Rooms from "../../pages/bookcontact/roomopts";
/*import Calendar from "../../pages/bookcontact/calendar";
import Contact from "../../pages/bookcontact/contact";
import Events from "../../pages/bookcontact/eventopts";*/

//import home page
import Home from "../../pages/home";

function Page({ currentPage }) {
const render = () => {
    switch(currentPage.name){
        case "Home" :
            return <Home />;
        case "About" :
            return <AboutHistory />;
        case "Activities" :
            return <Tours />;
        case "Booking" :
            return <Rooms />;
        default:
            return <Home />;
    }
}
return (
    <section>
        <PageContent>{render()}</PageContent>
    </section>
)
}

export default Page;