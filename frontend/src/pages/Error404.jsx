import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    });

  return (
    <div className="bg-light dark:bg-dark overflow-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oups ! Error 404</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-dark font-bold text-2xl font-poppins">
                  Looks like you've found the doorway to the great nothing
                </h1>
                <p className="my-2 text-dark font-poppins">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <button className="mt-32 font-poppins sm:w-full lg:w-auto my-2 border rounded-md shadow-md py-4 px-8 text-center font-bold bg-primaryLight text-white hover:bg-contrast focus:outline-none focus:ring-3 focus:ring-secondaryLight focus:ring-opacity-50">
                  Take me there!
                </button>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt=""/>
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt=""/>
        </div>
      </div>
      /
    </div>
  );
};

export default Page404;
