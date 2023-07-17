import React from 'react';
import headphoneThumbnail from "./assets/image-category-thumbnail-headphones.png";
import earphoneThumbnail from "./assets/image-category-thumbnail-earphones.png";
import speakerThumbnail from "./assets/image-category-thumbnail-speakers.png";
import Button from "../Button";
import "./assets/CategoryCardSection.css";

const CategoryCardSection = () => {
  return (
    <section className="category-cards">
      <div className="category-card">
        <div className="card-img">
          <img src={headphoneThumbnail} alt="headphone" />
        </div>
        <div className="bottom-card">
          <h6>headphones</h6>
          <Button className={"btn-three"} name={"shop"} link={"/headphones"} />
        </div>
      </div>
      
      <div className="category-card">
        <div className="card-img">
          <img src={speakerThumbnail} alt="speaker" />
        </div>
        <div className="bottom-card">
          <h6>speakers</h6>
          <Button className={"btn-three"} name={"shop"} link={"/speakers"} />
        </div>
      </div>

      <div className="category-card">
        <div className="card-img">
          <img src={earphoneThumbnail} alt="earphone" />
        </div>
        <div className="bottom-card">
          <h6>earphones</h6>
          <Button className={"btn-three"} name={"shop"} link={"/earphones"} />
        </div>
      </div>
    </section>
  )
}

export default CategoryCardSection