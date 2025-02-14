import React from "react";
import { Link } from "react-router-dom";
import hero from "./hero.png";
import "./Hero.css";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            觀賞魚大全 -- 探索水族世界的魅力
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            歡迎來到觀賞魚愛好者的社區！我們不僅有專業的魚種介紹，還提供用戶評論、飼養心得與水族佈景靈感，讓您的水族生活更加精彩。
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              to="/search"
              className="py-5 px-10 text-2xl font-bold text-white bg-neonOrange rounded lg:py-4 hover:opacity-70"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
