import React from "react";
import { Navigation } from "./Navigation/Navigation";

// export const Header = (props) => { // NAMED EXPORT
const Header = (props) => {
  return (
    <header>
      <div>{props.poruka} {props.text}</div>
      <Navigation />
    </header>
  )
}


export default Header; // DEFAULT EXPORT