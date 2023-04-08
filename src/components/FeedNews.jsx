import React from "react";
import { Fade } from "react-awesome-reveal";

const FeedNews = () => {
  return (
    <div>
      <Fade cascade damping={0.4}>
        <h2 className="underline underline-offset-8 font-poppins font-semibold text-4xl text-center text-primaryLight">
          Feed News
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
      </Fade>
    </div>
  );
};

export default FeedNews;
