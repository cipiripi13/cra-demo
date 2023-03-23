import React, { useState } from "react"

// export const Footer = () => { // NAMED EXPORT
const Footer = (props) => { //
  
  let [footer, setFooter] = useState('footer');
  const handleClick = () => {
    setFooter('Ovo je promena na klik u footeru iz useState')
  }
  
  return (
    <footer>
      <p >{footer}</p>
      <button onClick={handleClick}>change footer on click</button>
      <div>{props.message}</div>
      <button onClick={props.onClick} >Click</button>
    </footer>
  )
}

export default Footer; // DEFAULT EXPORT



 export const nestoDrugo = 123; // NAMED EXPORT



// // PRIMER JEDNOG FAJLA SA VISE EXPORTA ali koji su povezani necim
// const PI = 3.14;

// export function povrsinKruga(r) { // NAMED EXPORT
//   return r * r * PI;
// }

// export function obimKruga(r) { // NAMED EXPORT
//   return 2 * r * PI;
// }