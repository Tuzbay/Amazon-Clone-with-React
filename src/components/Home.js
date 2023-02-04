import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://m.media-amazon.com/images/I/71N3Vmy5V4L._SX3000_.jpg"
        alt=""
        className="home__image"
      />
      <div className="home__row">
        <Product
          id="0000197"
          title="HP 24mh FHD Monitor - 23.8-Inch IPS Display"
          price={69.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg"
        />
        <Product
          id="0000198"
          title="Bose QuietComfort 45 Bluetooth Wireless Headphones"
          price={279.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/51JbsHSktkL._AC_SX466_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0000197"
          title="HP 24mh FHD Monitor - 23.8-Inch IPS Display"
          price={69.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg"
        />
        <Product
          id="0000198"
          title="Bose QuietComfort 45 Bluetooth Wireless Headphones"
          price={279.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/51JbsHSktkL._AC_SX466_.jpg"
        />
        <Product
          id="0000198"
          title="Bose QuietComfort 45 Bluetooth Wireless Headphones"
          price={279.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/51JbsHSktkL._AC_SX466_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0000197"
          title="HP 24mh FHD Monitor - 23.8-Inch IPS Display"
          price={69.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg"
        />
        <Product
          id="0000198"
          title="Bose QuietComfort 45 Bluetooth Wireless Headphones"
          price={279.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/51JbsHSktkL._AC_SX466_.jpg"
        />
        <Product
          id="0000198"
          title="Bose QuietComfort 45 Bluetooth Wireless Headphones"
          price={279.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/51JbsHSktkL._AC_SX466_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
