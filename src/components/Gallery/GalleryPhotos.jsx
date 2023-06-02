import React from "react";
import img1 from "../../assets/gallery/img1.png";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.png";
import img7 from "../../assets/gallery/img7.jpg";
import img8 from "../../assets/gallery/img8.jpg";

const GalleryPhotos = () => {
  return (
    <div className="gallery-grid-div md1000:flex md1000:flex-col md1000:mx-auto ">
      <div className="gallery-grid  md1000:w-[100%] md1000:mx-auto">
        <div className="grid-img-gallery">
          <img src={img2} alt="man-basketball" />
        </div>
      </div>
      <div className="gallery-grid">
        <div className="grid-img-gallery">
          <img src={img1} alt="man-runner" />
        </div>
      </div>
      <div className="gallery-grid">
        <div className="grid-img-gallery">
          <img src={img7} alt="man-box" />
        </div>
      </div>
      <div className="gallery-grid">
        <div className="grid-img-gallery">
          <img src={img3} alt="man-work-out" />
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
          <img src={img6} alt="girl-talk" />
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
