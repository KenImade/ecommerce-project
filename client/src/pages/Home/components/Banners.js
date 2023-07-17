import React from "react";
import speakerOne from "../assets/desktop/image-speaker-zx9.png";
import speakerTwo from "../assets/desktop/image-speaker-zx7.jpg";
import earphones from "../assets/desktop/image-earphones-yx1.jpg";
import Button from "../../../components/Button";


const Banners = () => {

    return (
        <div className="banners">
        <div className="banner-one">
          <div className="img">
            <img src={speakerOne} alt="speaker" />
          </div>
          <div className="content">
            <h1>zx9 speaker</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built 
              to deliver truly remarkable sound.
            </p>
            <Button link={"/zx9-speaker"} className={"btn-one"} name={"see product"}/>
          </div>
        </div>

        <div className="banner-two" style={{backgroundImage: `url(${speakerTwo})`}}>
            <div className="content">
                <h4>zx7 speaker</h4>
                <Button link={"/zx7-speaker"} className={"btn-two"} name={"see product"} />
            </div>
        </div>

        <div className="banner-three">
            <div className="left">
                <img src={earphones} alt="earphones"/>
            </div>

            <div className="right">
                <h4>yx1 earphones</h4>
                <Button link={"/yx1-wireless-earphones"} className={"btn-two"} name={"see product"} />
            </div>
        </div>
      </div>
    )
}

export default Banners;