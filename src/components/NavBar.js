import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navDisplay = links.map((link, index) => <a key={index} href={`#${link}`}>{link}</a>)

  return <nav>{navDisplay}</nav>;
}

export default NavBar;
