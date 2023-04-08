import React from "react";

import { Helmet } from "react-helmet";
import Carousel from "../components/Carousel";
import Who from "../components/Who";
import Services from "../components/Services";
import FeedNews from "../components/FeedNews";

const Home = () => {
  return (
    <div className="font-poppins">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nelixair | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="bg-light"><Carousel /></section>
      <section className="bg-white"><Who /></section>
      <section className="bg-light"><Services /></section>
      <section className="bg-white"><FeedNews /></section>
    </div>
  );
};

export default Home;
