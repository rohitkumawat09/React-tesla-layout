import { useState } from 'react'
import './App.css'
import images from "./images/logo.svg"



function Header() {
    const [showText, setCount] = useState(null);
  
    function toggle(section) {
      setCount((prevSection) => (prevSection === section ? null : section));
    }
return (

<>



<div className="good" style={{ display: showText === "HTML" ? "block" : "none" }}>
     <button className="close-btn" onClick={() => toggle("HTML")}>X</button>
     <ul>
       <li>Model S</li>
       <li>Model 3</li>
       <li>Model X</li>
       <li>Model Y</li>
       <li>Solar Roof</li>
       <li>Solar Panel</li>
       <li>Used Inventory</li>
       <li>Powerwall</li>
     </ul>
   </div>
<div className="navbar">
        <div className="logo">
          <img src={images} alt="" />
          </div>

          <div  className="nav-links">
          <ul>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
        </ul>
          </div>
      

<div className="nav-right">
<ul >
          <li id='shop'>Shop</li>
          <li id='Account'>Account</li>
          <li><strong  onClick={() => toggle("HTML")} >Menu</strong></li>
          
        </ul>
</div>
     
      

        </div>
        </>

)

}
export default Header;

