// import { useState } from 'react'
// import './App.css'
// import images from "./images/logo.svg"
// import down from "./images/down-arrow.svg"


// function App() {
//   const [showText, setCount] = useState(null);

//   function toggle(section) {
//     setCount((prevSection) => (prevSection === section ? null : section));
//   }

//   return (
//     <>


// {
//      <div className="good" style={{ display: showText === "HTML" ? "block" : "none" }}>
//      <button className="close-btn" onClick={() => toggle("HTML")}>X</button>
//      <ul>
//        <li>Model S</li>
//        <li>Model 3</li>
//        <li>Model X</li>
//        <li>Model Y</li>
//        <li>Solar Roof</li>
//        <li>Solar Panel</li>
//        <li>Used Inventory</li>
//        <li>Powerwall</li>
//      </ul>
//    </div>




// }
    
// <div className='main'>
//     <div className="navbar">
//         <div className="logo">
//           <img src={images} alt="" />
//           </div>

//           <div  className="nav-links">
//           <ul>
//           <li>Model S</li>
//           <li>Model 3</li>
//           <li>Model X</li>
//           <li>Model Y</li>
//           <li>Solar Roof</li>
//           <li>Solar Panels</li>
//         </ul>
//           </div>
      

// <div className="nav-right">
// <ul >
//           <li>Shop</li>
//           <li>Account</li>
//           <li><strong  onClick={() => toggle("HTML")} >Menu</strong></li>
          
//         </ul>
// </div>
     
      

//         </div>
        
//         <div className='Model3'>
//           <h1>Model 3</h1>

//           <h5>Order Online for touchless delivery</h5>
//         </div>


//         <div className='order'>
//   <button className='custom-button'>CUSTOM ORDER</button>
//   <button className='existing-button'>EXISTING INVENTORY</button>
// </div>

// <div className='one'>

//   <img src={down} alt="" />
// </div>

//         </div>
   


//    <div className='game'>




//    <div className='ModelY'>
//           <h1>Model Y </h1>

//           <h5>Order Online for touchless delivery</h5>
//         </div>
//    <div className='order2'>
//   <button className='custom-button2'>CUSTOM ORDER</button>
//   <button className='existing-button2'>EXISTING INVENTORY</button>
// </div>
//    </div>

   
//    <div className='game2'>



//    <div className='ModelY'>
//           <h1>Model S</h1>

//           <h5>Order Online for touchless delivery</h5>
//         </div>
//    <div className='ordertwo'>
//   <button className='custom-buttontwo'>CUSTOM ORDER</button>
//   <button className='existing-buttontwo'>EXISTING INVENTORY</button>
// </div>
//    </div>





//    <div className='next'>



// <div className='ModelY'>
//        <h1>Model X</h1>

//        <h5>Order Online for touchless delivery</h5>
//      </div>
// <div className='ordertwo'>
// <button className='custom-buttontwo'>CUSTOM ORDER</button>
// <button className='existing-buttontwo'>EXISTING INVENTORY</button>
// </div>
// </div>



// <div className='Solar'>



// <div className='ModelY'>
//        <h1>Solar Panels</h1>

//        <h5>
//        Lower Cost Solar Panels in India</h5>
//      </div>
// <div className='ordertwo'>
// <button className='custom-buttontwo'> ORDER Now</button>
// <button className='existing-buttontwo'>Learn more</button>
// </div>
// </div>


// <div className='SolarRoof'>



// <div className='ModelY'>
//        <h1>Solar Panels</h1>

//        <h5>
//        Lower Cost Solar Panels in India</h5>
//      </div>
// <div className='ordertwo'>
// <button className='custom-buttontwo'> ORDER Now</button>
// <button className='existing-buttontwo'>Learn more</button>
// </div>
// </div>
   

// <div className='Accessories'>



// <div className='ModelY'>
//        <h1>Accessories</h1>

      
//      </div>
// <div className='ordertwo'>
// <button className='custom-buttontwo'> ORDER Now</button>
// </div>
// </div>

//     </>
//   )
// }

// export default App









import './App.css'


import { useState } from "react";
import "./App.css";
import dropDown from "./images/down-arrow.svg";
import Model3 from "./images/model-3.jpg";

import Modely from "./images/model-y.jpg";
import Models from "./images/model-s.jpg";
import Modelx from "./images/model-x.jpg";
import ModelSolarPanles from "./images/solar-panel.jpg";
import ModelSolarRoof from "./images/solar-roof.jpg";
import Accessories from "./images/accessories.jpg";


import Section from "./section";

import Header from "./Header";  

function App() {
  const [showText, setCount] = useState(null);
  function toggle(section) {
    setCount((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <>
      <div className="container">
        <Header />

        <Section
          heading="Model 3"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          image={dropDown}
          bg={Model3}
        />
        <Section
          heading="Model Y"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bg={Modely}
        />
        <Section
          heading="Model S"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bg={Models}
        />
        <Section
          heading="Model X"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bg={Modelx}
        />
        <Section
          heading="Solar Panels"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bg={ModelSolarPanles}
        />
        <Section
          heading="Solar Panels"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bg={ModelSolarRoof}
        />
        <Section
          heading="Accessories"
          leftBtn="Custom Order"
          bg={Accessories}
        />

      </div>
    </>
  );
}

export default App;
