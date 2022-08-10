import "./assets/Home.css";
import Advert from "../../components/Advert/Advert";
import Hero from "./components/Hero";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import Banners from "./components/Banners";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <CategoryCardSection />
      <Banners />
      <Advert />
    </section>
  )
}

export default Home