import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import image from "../assets/Fichier_2.png";

const Signin = () => {
  const navigate = useNavigate();

  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [licence, setLicence] = useState("");
  // const [email, setEmail] = useState("");
  // const [country, setCountry] = useState("");
  // const [city, setCity] = useState("");
  // const [img, setImg] = useState("");

  // Yup params
  const schema = yup.object({
    firstname: yup.string().max(50).required("Please enter your firstname"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .max(255)
      .required("Please enter a mail"),
  });

  // Hook form params
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    alert("Let's go to fly !");
    navigate("/Dashboard");
  };

  return (
    <div className="bg-light p-12">
      <div className="grid grid-cols-2">
        <img src={image} alt="" className="pt-24 rounded-md" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-12 font-poppins bg-white m-12 rounded-md shadow-md"
        >
          <h2 className="pt-10 underline underline-offset-8 font-poppins font-semibold text-4xl text-center text-secondaryLight">
            Sign in
          </h2>
          {errors.firstname && errors.firstname.message}
          <label className="text-dark flex flex-col mb-4" htmlFor="Firstname">
            Firstname
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Your firstname"
              className="border-b-2 p-4 border-b-primaryLight"
              aria-required="true"
              autoComplete="off"
              // onChange={(e) => setFirstname(e.target.value)}
              // value={firstname}
              {...register("firstname")}
            ></input>
          </label>

          {errors.email && errors.email.message}
          <label className="text-dark flex flex-col mb-4" htmlFor="Email">
            E-mail
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your e-mail"
              className="border-b-2 p-4 border-b-primaryLight"
              aria-required="true"
              autoComplete="off"
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
              {...register("email")}
            ></input>
          </label>
          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-dark rounded focus:ring-primaryLight focus:ring-2 dark:bg-secondaryLight"
              aria-required="true"
              autoComplete="off"
            />
            <label
              for="default-checkbox"
              className="ml-2 text-sm font-medium text-dark dark:text-contrast"
            >
              I agree with...
            </label>
          </div>

          <button
            type="submit"
            className="w-40 h-12 text-white font-poppins bg-gradient-to-br from-primaryLight to-secondaryLight hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-primaryLight dark:focus:ring-secondaryLight font-medium rounded-md shadow-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleSubmit}
          >
            Sign in
          </button>
          <Link to="/Signup" className="pb-4 pt-4 hover:text-secondaryLight">
            Don't have an account? Register yourself. here.
          </Link>
          <Link to="/" className="hover:text-secondaryLight">
            Back to home.
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Signin;
