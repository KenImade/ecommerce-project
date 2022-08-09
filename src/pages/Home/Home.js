import "./assets/Home.css";
import Advert from "../../components/Advert/Advert";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Advert />
    </section>
  )
}

export default Home