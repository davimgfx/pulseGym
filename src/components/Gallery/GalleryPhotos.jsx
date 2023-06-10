import React from "react";
import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.png";
import img3 from "../../assets/gallery/img3.png";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.png";
import img7 from "../../assets/gallery/img7.png";
import img8 from "../../assets/gallery/img8.jpg";
import "./GalleryPhotos-style.css"

const GalleryPhotos = () => {
  return (
    <div className="gallery-grid-div md1000:flex md1000:flex-col md1000:mx-auto z-[50] max-w-[125rem]">
      <div className="gallery-grid  md1000:w-[100%] md1000:mx-auto ">
        <div className="grid-img-gallery">
          <img src={img1} alt="man-basketball" />
        </div>
      </div>
      <div className="gallery-grid">
        <div className="grid-img-gallery">
          <img src={img2} alt="man-cycling" />
        </div>
      </div>
      <div className="gallery-grid">
        <div className="grid-img-gallery">
          <img src={img3} alt="man-box" />
        </div>
      </div>
      <div className="gallery-grid">
        <div className="grid-img-gallery">
          <img src={img4} alt="man-work-out" />
        </div>
      </div>
      <div className="gallery-grid">
        <div className="grid-img-gallery">
          <img src={img5} alt="man-work-out" />
        </div>
      </div>
      <div className="gallery-grid">
        <div className="grid-img-gallery">
          <img src={img6} alt="man-work-out" />
        </div>
      </div>
      <div className="gallery-grid">
        <div className="grid-img-gallery">
          <img src={img7} alt="girl-talk" />
        </div>
      </div>

      <div className="gallery-grid">
        <div className="grid-img-gallery">
          <img src={img8} alt="man-work-out" />
        </div>
      </div>
    </div>
  );
};

export default GalleryPhotos;
