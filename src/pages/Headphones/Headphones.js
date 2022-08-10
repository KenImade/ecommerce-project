import Advert from "../../components/Advert/Advert";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import "./assets/Headphones.css";

const Headphones = () => {
  return (
    <section className="headphones">
        <CategoryBanner title={"headphones"} />
        <CategoryCardSection />
        <Advert />
    </section>
  )
}

export default Headphones;