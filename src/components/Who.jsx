import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Who = () => {
  return (
    <div>
      <Fade cascade damping={0.4}>
        <div className="lg:grid grid-rows-3 justify-items-center">
          <h2 className="underline underline-offset-8 font-poppins font-semibold text-4xl text-center text-primaryLight">
            Who we are
          </h2>
          <p className="font-poppins text-lg text-center pb-6 pr-10 pl-10 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptas beatae quasi excepturi vero accusantium harum magnam non
            tempore similique ad rerum provident, eveniet iusto placeat minima
            esse, explicabo iure? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam iste ducimus eaque. Sed veniam soluta
            consequuntur? Nesciunt reiciendis tempora ipsam ut dolore
            repellendus cumque quas hic vero. Id, dicta sit?
          </p>
          <button className="w-40 h-12 text-white font-poppins bg-gradient-to-br from-primaryLight to-secondaryLight hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-primaryLight dark:focus:ring-secondaryLight font-medium rounded-md shadow-md text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <Link to="/About"> About us...</Link>
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Who;
