import Advert from "../../components/Advert/Advert";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import "./assets/Speakers.css";

const Speakers = () => {
  return (
    <section>
        <CategoryBanner title={"speakers"}/>
        <CategoryCardSection />
        <Advert />
    </section>
  )
}

export default Speakers