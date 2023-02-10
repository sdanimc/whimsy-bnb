import React, { useState } from "react";
//import components used on all pages
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
//import Page from "./components/page";

function App() {
const [pages] = useState({
    //{name: Ghosts}, etc.
  });
  return (
    <div>
      <Header />
      <Nav />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
