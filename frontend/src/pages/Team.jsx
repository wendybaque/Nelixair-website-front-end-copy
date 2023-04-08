import React from "react";
import { Helmet } from "react-helmet";
import CardTeam from "../components/CardTeam";

const Team = () => {
  return (
    <div className="bg-light">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nelixair | Team</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="pt-10 underline underline-offset-8 font-poppins font-semibold text-4xl text-center text-secondaryLight">
        Our Team
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
      <CardTeam />
    </div>
  );
};

export default Team;
