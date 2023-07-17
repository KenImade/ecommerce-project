import React from "react";
import "./CategoryBanner.css";

const CategoryBanner = ({title}) => {
  return (
    <section className="category-banner">
        <h2>{title}</h2>
    </section>
  )
}

export default CategoryBanner