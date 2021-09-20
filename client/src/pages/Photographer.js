import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Photographer() {

  const photographyImages = [
    {
      key: 1,
      imgSrc:"/images/photos-lowq-img/Yeatman_1.jpg",
      alt:"pic"
    },
    {
      key: 2,
      imgSrc:"/images/photos-lowq-img/Yeatman_2.jpg",
      alt:"pic"
    },
    {
      key: 3,
      imgSrc:"/images/photos-lowq-img/Yeatman_3.jpg",
      alt:"pic"
    },
    {
      key: 4,
      imgSrc:"/images/photos-lowq-img/Yeatman_4.jpg",
      alt:"pic"
    },
    {
      key: 5,
      imgSrc:"/images/photos-lowq-img/Yeatman_5.jpg",
      alt:"pic"
    },
    {
      key: 6,
      imgSrc:"/images/photos-lowq-img/Yeatman_6.jpg",
      alt:"pic"
    },
    {
      key: 7,
      imgSrc:"/images/photos-lowq-img/Yeatman_7.jpg",
      alt:"pic"
    },
    {
      key: 8,
      imgSrc:"/images/photos-lowq-img/Yeatman_8.jpg",
      alt:"pic"
    },
    {
      key: 9,
      imgSrc:"/images/photos-img/Yeatman_9.jpg",
      alt:"pic"
    },
    {
      key: 10,
      imgSrc:"/images/photos-img/Yeatman_10.jpg",
      alt:"pic"
    },
    {
      key: 11,
      imgSrc:"/images/photos-img/Yeatman_11.jpg",
      alt:"pic"
    },
    {
      key: 12,
      imgSrc:"/images/photos-img/Yeatman_12.jpg",
      alt:"pic"
    },
    {
      key: 13,
      imgSrc:"/images/photos-img/Yeatman_13.jpg",
      alt:"pic"
    },
    {
      key: 14,
      imgSrc:"/images/photos-img/Yeatman_14.jpg",
      alt:"pic"
    },
    {
      key: 15,
      imgSrc:"/images/photos-img/Yeatman_15.jpg",
      alt:"pic"
    }
  ]
  return (
    <div>
        <div className="photographer-text-container">
          <h2 className="photographer-text-header">Photographer</h2>

          <p className="photographer-text-paragraph">

          </p>
        </div>

      <div className="dividers-line"></div>

       <div className="photography-gallery">
        {photographyImages.map(phGallery => (
        <LazyLoadImage
          className="photography-gallery-img"
          key={phGallery.key}
          src={process.env.PUBLIC_URL + phGallery.imgSrc}
          alt={phGallery.alt}
          effect="blur"
        /> 
        ))}
        </div>
    </div>
  
  );
}

export default Photographer;