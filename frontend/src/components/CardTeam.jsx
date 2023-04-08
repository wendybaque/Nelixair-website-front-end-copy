import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CardTeam = () => {
  const datas = [
    {
      id: 1,
      name: "Houssine Casanova",
      role: "Chief Executive Officer",
      img: "https://media.licdn.com/dms/image/D4E03AQHll4CGtJL7UQ/profile-displayphoto-shrink_800_800/0/1672245908525?e=1681344000&v=beta&t=lTfzzgD2M37pBSUCpXr19aKQQD5O4b-S13OKrUlknMo",
      linkedin: "https://www.linkedin.com/in/houssine-casanova/",
      mail: "houssine.casanova@nelixair.com",
      desc: "",
    },
    {
      id: 2,
      name: "Rayane Zekik",
      role: "Co-Chief Executive Officer",
      img: "https://media.licdn.com/dms/image/D4E03AQGRUD-phUAMVA/profile-displayphoto-shrink_800_800/0/1667235801780?e=1681344000&v=beta&t=h7BRTE7RdniNsZVGeCJ47-yiUYWh9THRMethoAhKw9Y",
      linkedin: "https://www.linkedin.com/in/z-rayane/",
      mail: "rayane.zekik@nelixair.com",
      desc: "",
    },
    {
      id: 3,
      name: "Wendy Baqué",
      role: "Front-end web developper",
      img: "https://wendybaqueportfoliodev.wendev.fr/static/media/wendycarr%C3%A9.b71e49bd3f16fa559d84.png",
      linkedin: "https://www.linkedin.com/in/wendy-baqu%C3%A9/",
      mail: "wendy.baque@nelixair.com",
      desc: "",
    },
    {
      id: 4,
      name: "Saturnin Wanonkou",
      role: "Back-end web developper",
      img: "https://media.licdn.com/dms/image/D4E03AQEemddcGzUO8w/profile-displayphoto-shrink_800_800/0/1673914428373?e=1681344000&v=beta&t=u10Q5OXJHDvUaPMlAfyAhL96Y5l0OlsEVHEJ_nWz3Kw",
      linkedin: "https://www.linkedin.com/in/saturnin-wanonkou/",
      mail: "saturnin.wanonkou@nelixair.com",
      desc: "",
    },
    {
      id: 5,
      name: "Mathieu Noel",
      role: "Back-end & Front-end web developper",
      img: "https://media.licdn.com/dms/image/D4E35AQFsBcZnLbpwKA/profile-framedphoto-shrink_800_800/0/1666271891337?e=1676649600&v=beta&t=ITh6hgB3oX3YSelTMacIEq6N9EnqI00WA29grSI1Eh8",
      linkedin: "https://www.linkedin.com/in/mathieu-noel-dev/",
      mail: "mathieu.noel@nelixair.com",
      desc: "",
    },
    {
      id: 6,
      name: "Mariam Nassar",
      role: "Assistante de gestion",
      img: "https://static.vecteezy.com/ti/vecteur-libre/p1/2534006-social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-debout-icon-grey-background-gratuit-vectoriel.jpg",
      linkedin: "https://www.linkedin.com/in/saturnin-wanonkou/",
      mail: "mariam.nassar@nelixair.com",
      desc: "",
    },
    {
      id: 7,
      name: "Yanis Hamdiken",
      role: "Assistant de gestion",
      img: "https://media.licdn.com/dms/image/D4D03AQEXV0ETbv7tUA/profile-displayphoto-shrink_800_800/0/1672851649626?e=1681344000&v=beta&t=CEQdq293YeMUTGUCmhlG52__1nLp8GBFH7pP0TA_Jh4",
      linkedin: "https://www.linkedin.com/in/yanis-hamdiken-4a0ba8150//",
      mail: "yanis.hamdiken@nelixair.com",
      desc: "",
    },
  ];
  return (
    <div className="lg:grid grid-cols-4 gap-6 bg-light lg:p-10 font-poppins">
      {datas.map((member) => (
        <div className="bg-white m-6 rounded-md shadow-md dark:bg-dark">
          <div key={member.id} className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 mt-3 rounded-full shadow-md"
              src={member.img}
              alt="Team member profile"
            />
            <h5 className="mb-3 text-xl font-medium text-secondaryDark dark:text-white">
              {member.name}
            </h5>
            <span className="text-sm mb-3 text-dark dark:text-contrast">
              {member.role}
            </span>
            <p>{member.mail}</p>
            <a
              href={member.linkedin}
              className="mt-3 items-center text-sm font-medium text-center text-white rounded-md focus:ring-4 focus:outline-none dark:bg-white dark:hover:bg-contrast"
            >
              <LinkedInIcon className="text-primaryDark hover:text-secondaryLight" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTeam;
