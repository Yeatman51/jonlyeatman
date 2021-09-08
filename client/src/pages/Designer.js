import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Designer() {

  const GraphicDesignImages = [
    {
      key: 1,
      imgSrc:"/images/designs-img/Yeatman_GD_2.png",
      alt:"Aggressive Metals",
    },
    {
      key: 2,
      imgSrc:"/images/designs-img/MiPonderosaV2_Final.png",
      alt:"Mipronderosa",
    },
    {
      key: 3,
      imgSrc:"/images/designs-img/Yeatman_GD_3.png",
      alt:"y'all come back now"
    },
    {
      key: 4,
      imgSrc:"/images/designs-img/Yeatman_GD_4.png",
      alt:"iron river ranch"
    },
    {
      key: 5,
      imgSrc:"/images/designs-img/Yeatman_GD_11.png",
      alt:"Incendiary Brewing Company"
    },
    {
      key: 6,
      imgSrc:"/images/designs-img/Yeatman_GD_5.png",
      alt:"Village Grill"
    },
    {
      key: 7,
      imgSrc:"/images/designs-img/Yeatman_GD_7.png",
      alt:"Lakeland Invitational"
    },
    {
      key: 8,
      imgSrc:"/images/designs-img/Yeatman_GD_10.png",
      alt:"Half Off Pizza"
    },
    {
      key: 9,
      imgSrc:"/images/designs-img/Yeatman_GD_9.png",
      alt:"Nick Polydoras 48"
    },
    {
      key: 10,
      imgSrc:"/images/designs-img/Yeatman_GD_6.png",
      alt:"Robinson family"
    },
     {
      key: 11,
      imgSrc:"/images/designs-img/Yeatman_GD_20.png",
      alt:"Rick portal"
    },
     {
      key: 12,
      imgSrc:"/images/designs-img/phoenix-printing.png",
      alt:"Phoenix UI"
    },
     {
      key: 13,
      imgSrc:"/images/designs-img/Yeatman_GD_17.png",
      alt:"Mama Bear"
    },
     {
      key: 14,
      imgSrc:"/images/designs-img/Yeatman_GD_21.png",
      alt:"The blue spirit"
    },
     {
      key: 15,
      imgSrc:"/images/designs-img/Yeatman_GD_19.png",
      alt:"Successful printing logo"
    },
    {
      key: 16,
      imgSrc:"/images/designs-img/Yeatman_GD_16.png",
      alt:"Mosaic image"
    },
    {
      key: 17,
      imgSrc:"/images/designs-img/Yeatman_GD_24.png",
      alt:"Wander"
    },
    {
      key: 18,
      imgSrc:"/images/designs-img/Yeatman_GD_22.png",
      alt:"Orca Whale logo"
    },
    {
      key: 19,
      imgSrc:"/images/designs-img/Yeatman_GD_25.jpg",
      alt:"Biscuit butter"
    },
    {
      key: 20,
      imgSrc:"/images/designs-img/Yeatman_GD_23.png",
      alt:"Eagle logo"
    },
    {
      key: 21,
      imgSrc:"/images/ui-ux-img/kayaking_adventure.png",
      alt:"kayaking adventure"
    },
    {
      key: 22,
      imgSrc:"/images/ui-ux-img/walnut_creek.png",
      alt:"account login"
    },
    {
      key: 23,
      imgSrc:"/images/ui-ux-img/account_login.png",
      alt:"account login"
    }
  ]
  return (
    <div>
      <div className="designer-text-container">
        <h2 className="designer-text-header">Designer</h2>

        <p className="designer-text-paragraph">
          
        </p>
      </div>

      <div className="dividers-line"></div>

        <div className="gd-gallery">
        {GraphicDesignImages.map(gdGallery => (
        <LazyLoadImage
          className="gd-gallery-img"
          key={gdGallery.key}
          src={process.env.PUBLIC_URL + gdGallery.imgSrc}
          alt={gdGallery.alt}
          effect="blur"
        /> 
        ))}
        </div>

    </div>
  
  );
}

export default Designer;