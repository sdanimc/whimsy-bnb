import React, { useState } from "react";
//import components used on all pages
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Page from "./components/page";
//import Dropdown from "./components/nav/dropdown";

function App() {
  const [pages] = useState(
    [{ name: "Home" },
    { name: "About" },
    { name: "Activities" },
    { name: "Booking" }]
  );
  const [pagesset] = useState([
    { name: "Home" },
    { name: "About" },
    { name: "Activities" },
    { name: "Booking" },
    { name: "Staff" },
    { name: "Ghosts" },
    { name: "Maps" },
    { name: "Local" },
    { name: "Hiking" },
    { name: "More" },
    { name: "Events" },
    { name: "Calendar" },
    { name: "Contact" }
  ])
  const [currentPage, setCurrentPage] = useState(pagesset[0]);
  return (
    <div>
      <Header />
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}>
      </Nav>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
