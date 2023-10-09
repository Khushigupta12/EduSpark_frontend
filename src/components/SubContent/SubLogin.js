import { AlertDescription } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function SubLogin() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const handleSubmit = async (e) =>  {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    try {
       const { data } = await axios.post(
         `https://eduspark-backend.onrender.com/api/v1/login`,
         {
           email: email,
           password: password,
         }
       );
       console.log(data);
       alert("Done!");
    } catch (error) {
      console.log(error);
    }
  }
  const handleEmail = (e) => {
    setemail(e.target.value);
  }
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign In
            </h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
               type="email"
               id="email"
               name="email"
               value={email}
               onChange={handleEmail}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
               Password
              </label>
              <input
               type="password"
               id="password"
               name="password"
               value={password}
               onChange={handlepassword}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sign In
            </button>
            <p className="text-xs text-gray-500 mt-3">
             Register Not Yet? <a style={{color:"blue"}} href="/signup">Register Now</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubLogin;
