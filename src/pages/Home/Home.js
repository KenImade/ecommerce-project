import "./assets/Home.css";
import Advert from "../../components/Advert/Advert";
import Hero from "./components/Hero";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <CategoryCardSection />
      <Advert />
    </section>
  )
}

export default Home