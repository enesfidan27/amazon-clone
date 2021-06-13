import React from 'react';
import Product from "./Product.js";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />
            <div className="home__row">
            <Product id="12321341"
            title="Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote"
            price={24.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81%2B0dqbDGWL._AC_SL1500_.jpg"
            />
              <Product id="12321341"
            title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
            price={127.76}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91K9SyGiyzL._AC_SL1500_.jpg"
            />
            </div>
            <div className="home__row">
            <Product id="12321341"
            title="Blendtec Total Classic Original Blender - WildSide plus Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
            price={309.15}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpg"
            />
              <Product id="12321341"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/P/B07C7M8SX9.01._SCLZZZZZZZ_SX500_.jpg"
            />
            <Product id="12321341"
            title="Logitech G533 Wireless Gaming Headset – DTS 7.1 Surround Sound – Pro-G Audio Drivers"
            price={117.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61eFyV4WLLL._AC_SL1500_.jpg"
            />
            
            </div>
           <div className="home__row">
            <Product id="12321341"
            title="SAMSUNG 82-inch Class Crystal UHD TU-6950 Series - 4K UHD HDR Smart TV (UN82TU6950FXZA, 2020 Model)"
            price={899.87}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91CePgmlPPL._AC_SL1500_.jpg"
            />

            </div>
           
        </div>
    )
}

export default Home
