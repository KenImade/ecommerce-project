import Advert from "../../components/Advert/Advert";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import "./assets/Earphones.css";

const Earphones = () => {
  return (
    <section>
        <CategoryBanner title={"earphones"} />
        <CategoryCardSection />
        <Advert />
    </section>
  )
}

export default Earphones;