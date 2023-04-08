import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Fade cascade damping={0.4}>
      <h2 className="pt-10 underline underline-offset-8 font-poppins font-semibold text-4xl text-center text-secondaryLight">
        Our services
      </h2>
      <p className="font-poppins text-lg text-center p-10 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        voluptas beatae quasi excepturi vero accusantium harum magnam non
        tempore similique ad rerum provident, eveniet iusto placeat minima esse,
        explicabo iure? Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Ullam iste ducimus eaque. Sed veniam soluta consequuntur? Nesciunt
        reiciendis tempora ipsam ut dolore repellendus cumque quas hic vero. Id,
        dicta sit?
      </p>
      <div className="lg:grid grid-cols-2 gap-10 p-6">
        <section className="lg:grid grid-rows-3 justify-items-center">
          <h3 className="font-poppins font-semibold text-xl underline underline-offset-8 text-center text-primaryLight">
            Dispatcher : Create your virtual airline online
          </h3>
          <p className="font-poppins text-xl text-left pb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            doloribus magnam saepe facilis in doloremque atque sint eos
            architecto quam laudantium ad laboriosam repudiandae, vitae eligendi
            illo aspernatur voluptate totam?
          </p>
          <button className="w-40 h-12 text-white font-poppins bg-gradient-to-br from-primaryLight to-secondaryLight hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-primaryLight dark:focus:ring-secondaryLight font-medium rounded-md shadow-md text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <Link to=""> Create !</Link>
          </button>
        </section>
        <section className="lg:grid grid-rows-3 justify-items-center">
          <h3 className="font-poppins font-semibold text-xl underline underline-offset-8 text-center text-primaryLight">
            Virtual Airline : discover our virtual airline
          </h3>
          <p className="font-poppins text-xl text-left pb-6 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            qui illum, possimus distinctio cumque nobis ut nihil numquam
            cupiditate ea dolorum odit tempore dolores quam minus repellendus.
            Dicta, accusantium voluptate.
          </p>
          <button className="w-40 h-12 text-white font-poppins bg-gradient-to-br from-primaryLight to-secondaryLight hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-primaryLight dark:focus:ring-secondaryLight font-medium rounded-md shadow-md text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <Link to=""> Discover !</Link>
          </button>
        </section>
      </div>
    </Fade>
  );
};

export default Services;
