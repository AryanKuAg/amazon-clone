import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home__image"
        />
        <div className="home__row">
          <Product
            name="My first product"
            price="50"
            rating="3"
            image="https://m.media-amazon.com/images/I/31uPoOqIutL.jpg"
          />
          <Product />
          {/* 
          <div className="home__product"></div>
          <div className="home__product"></div> */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />

          {/* <div className="home__product"></div>
          <div className="home__product"></div>
          <div className="home__product"></div> */}

          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">
          <Product />

          {/* <div className="home__product"></div> */}
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
