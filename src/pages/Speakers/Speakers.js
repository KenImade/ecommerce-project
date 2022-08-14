import Advert from "../../components/Advert/Advert";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import "./assets/Speakers.css";

import zx7Img from "./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx9Img from "./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ProductCard from "../../components/ProductCard/ProductCard";

const Speakers = () => {
  return (
    <section>
        <CategoryBanner title={"speakers"}/>
        <ProductCard 
          img={zx9Img}
          productName={"zx9 speaker"}
          productDesc={"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."}
          isReverse={false}
          isNew={true}
        />
        <ProductCard 
          img={zx7Img}
          productName={"zx7 speaker"}
          productDesc={"Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."}
          isReverse={true}
          isNew={false}
        />
        <CategoryCardSection />
        <Advert />
    </section>
  )
}

export default Speakers