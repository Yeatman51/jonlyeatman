import React from "react";

// import { TweenMax } from "gsap";



function Header() {

  // TweenMax.fromTo(".yeatman-logo", 2.0, 
  //   { 
  //     opacity: 0, 
  //     y: 100, 
  //     scale: 0 
  //   },
  //   { opacity: 1, 
  //     y: 0, 
  //     scale: 1,
  //   }
  // );
  
  // TweenMax.fromTo(".header-text", 2.0,
  //   { 
  //     opacity: 0, 
  //     y: -100, 
  //     scale: 0 
  //   },
  //   { 
  //     opacity: 1, 
  //     y: 0, scale: 1, 
  //     delay: 1,  
  //   }
  // );

  return (
    <header>
      <div className="yeatman-logo"></div>

      <h1 className="header-text">
      Full Stack Web Developer<br></br>
      Graphic Designer
      </h1>
    </header>
  
  );
}

export default Header;