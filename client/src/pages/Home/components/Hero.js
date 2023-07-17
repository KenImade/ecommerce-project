import React from "react";
import Button from "../../../components/Button"

const Hero = () => {
  return (
    <section className="hero">
        <div>
            <p className="overline">new product</p>
            <h1>xx99 mark ii headphones</h1>
            <p className="body">
                Experience natural, lifelike audio and exceptional build quality 
                made for the passionate music enthusiast.
            </p>
            <Button className={"btn-one"} link={"/xx99-mark-ii-headphones"} name={"see product"} />
        </div>
    </section>
  )
}

export default Hero