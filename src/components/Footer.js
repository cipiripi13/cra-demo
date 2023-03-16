import React from "react"

// export const Footer = () => { // NAMED EXPORT
const Footer = () => { //
   return (
    <footer>
    <p>Footer</p>
    </footer>
   ) 
}

export default Footer; // DEFAULT EXPORT



export const nestoDrugo = 123; // NAMED EXPORT



// PRIMER JEDNOG FAJLA SA VISE EXPORTA ali koji su povezani necim
const PI = 3.14;

export function povrsinKruga(r) { // NAMED EXPORT
   return r * r * PI;
}

export function obimKruga(r) { // NAMED EXPORT
   return 2 * r * PI;
}