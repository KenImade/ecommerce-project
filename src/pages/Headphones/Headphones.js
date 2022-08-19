import {useOutletContext} from "react-router-dom";
import { useEffect } from "react";

import Advert from "../../components/Advert/Advert";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./assets/Headphones.css";

import xx99TwoImg from  "./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99OneImg  from "./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59Img from "./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

const Headphones = () => {
  const setDisplayCart = useOutletContext()[1]

  useEffect(() => {
    setDisplayCart(false)
  }, [setDisplayCart])

  return (
    <section className="headphones">
        <CategoryBanner title={"headphones"} />
        <ProductCard 
          img={xx99TwoImg}
          productName={"xx99 mark ii headphones"}
          productDesc={"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."}
          isReverse={false}
          isNew={true}
        />
        <ProductCard 
          img={xx99OneImg}
          productName={"xx99 mark i headphones"}
          productDesc={"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."}
          isReverse={true}
          isNew={false}
        />
        <ProductCard 
          img={xx59Img}
          productName={"xx59 headphones"}
          productDesc={"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."}
          isReverse={false}
          isNew={false}
        />
        <CategoryCardSection />
        <Advert />
    </section>
  )
}

export default Headphones;