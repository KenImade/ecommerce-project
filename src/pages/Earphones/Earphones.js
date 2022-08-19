import {useOutletContext} from "react-router-dom";
import { useEffect } from "react";

import Advert from "../../components/Advert/Advert";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./assets/Earphones.css";

import yx1Img from "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

const Earphones = () => {

  const setDisplayCart = useOutletContext()[1]

  useEffect(() => {
    setDisplayCart(false)
  }, [setDisplayCart])
  
  return (
    <section>
        <CategoryBanner title={"earphones"} />
        <ProductCard 
          img={yx1Img}
          productName={"yx1 wireless earphones"}
          productDesc={"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."}
          isReverse={false}
          isNew={true}
        />
        <CategoryCardSection />
        <Advert />
    </section>
  )
}

export default Earphones;