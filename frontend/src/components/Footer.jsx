import React from "react";
import logo from "../assets/logo_small.svg";


// Imports MUI icons, based on : https://mui.com/material-ui/material-icons/
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="lg:grid grid-cols-6 gap-4 lg:p-4 bg-dark text-white font-poppins">
        <div className="p-6">
          <img
            src={logo}
            alt="Nelixair"
            aria-label="Nelixair"
            className="w-20 pt-10 "
          />
        </div>
        <div className="p-6">
          <h2 className="font-poppins font-bold text-white text-left">
            About Us
          </h2>
          <p className="text-left pt-6 font-light">
            Nelixair is the first next generation virtual airline with new
            features never implemented before.
          </p>
        </div>
        <div className="p-6">
          <h2 className="font-poppins font-bold text-white text-left">
            Developpers
          </h2>
          <ul className="text-left pt-6">
            <li className="pt-4 font-light hover:text-secondaryLight">Api</li>
            <li className="pt-4 font-light">
              <a
                href="https://github.com/nelixair"
                alt="Redirect to Github"
                aria-label="Redirect to Github"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondaryLight"
              >
                Github <GitHubIcon className="ml-4" />
              </a>
            </li>
          </ul>
        </div>
        <div className="p-6">
          <h2 className="font-poppins font-bold text-white text-left">
            Network
          </h2>
          <ul className="text-left pt-6">
            <li>
              {" "}
              <a
                href="https://www.instagram.com/nelixair_off/"
                alt="Redirect to Instagram"
                aria-label="Redirect to Instagram"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondaryLight"
              >
                <InstagramIcon /> Instagram
              </a>
            </li>
            <li className="pt-4 font-light">
              {" "}
              <a
                href="https://www.facebook.com/profile.php?id=10008901741546"
                alt="Redirect to Facebook"
                aria-label="Redirect to Facebook"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondaryLight"
              >
                {" "}
                <FacebookIcon /> Facebook{" "}
              </a>
            </li>
            <li className="pt-4 font-light">
              {" "}
              <a
                href="https://www.youtube.com/@nelixair_off"
                alt="Redirect to Youtube"
                aria-label="Redirect to Youtube"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondaryLight"
              >
                {" "}
                <YouTubeIcon /> Youtube{" "}
              </a>
            </li>
            <li className="pt-4 font-light">
              {" "}
              <a
                href="https://discord.com/invite/fuUgU34Brf"
                alt="Redirect to Discord"
                aria-label="Redirect to Discord"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondaryLight"
              >
                <QuestionAnswerIcon /> Discord{" "}
              </a>
            </li>
            <li className="pt-4 font-light">
              {" "}
              <a
                href="https://www.linkedin.com/company/nelixair-association/"
                alt="Redirect to LinkedIn"
                aria-label="Redirect to LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondaryLight"
              >
                <LinkedInIcon /> LinkedIn{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="p-6">
          <h2 className="font-poppins font-bold text-white text-left">
            Join us !{" "}
          </h2>
          <ul className="text-left pt-6">
            <li className="pt-4 font-light hover:text-secondaryLight">
              <a href="/Joinus" alt="Redirect to join us page" aria-label="Redirect to join us page" >Volunteer offers</a>
            </li>
            <li className="pt-4 font-light hover:text-secondaryLight">
              Others
            </li>
            <li className="pt-4 font-light hover:text-secondaryLight">
              Donate{" "}
            </li>
          </ul>
        </div>
        <div className="p-6">
          <h2 className="font-poppins font-bold text-white text-left">
            Legals
          </h2>
          <ul className="text-left pt-6">
            <li className="pt-4 font-light hover:text-secondaryLight">
              <a href="/RGPD" alt="Redirect to RGPD page" aria-label="Redirect to RGPD page">RGPD</a>
            </li>
            <li className="pt-4 font-light hover:text-secondaryLight">
              CGA
            </li>
            <li className="pt-4 font-light hover:text-secondaryLight">
              CGU
            </li>
            <li className="pt-4 font-light hover:text-secondaryLight">
              CGV
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-darkLight text-white font-poppins font-light p-4">
        Copyright 2023 | Nelixair Association, all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
