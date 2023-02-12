import React, { useState } from "react";
//import components used on all pages
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Page from "./components/page";
import Dropdown from "./components/nav/dropdown";

function App() {
const [pages] = useState(
    [{ name: "Home" },
    { name: "About" },
    { name: "Activities" },
    { name: "Booking" }]
  );
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <div>
      <Header />
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage ={currentPage} setDropOpen={setDropOpen}>
      </Nav>
     <Dropdown dropOpen = {dropOpen}></Dropdown>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
