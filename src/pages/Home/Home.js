import "./assets/Home.css";

import {useOutletContext} from "react-router-dom";
import { useEffect } from "react";

import Advert from "../../components/Advert/Advert";
import Hero from "./components/Hero";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import Banners from "./components/Banners";

const Home = () => {
  const setDisplayCart = useOutletContext()[1]

  useEffect(() => {
    setDisplayCart(false)
  }, [setDisplayCart])
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