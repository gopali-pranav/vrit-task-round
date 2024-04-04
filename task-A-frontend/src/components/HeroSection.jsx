import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-container bg-herobgcolor flex items-center gap-4 p-4 ">
        <div className="herocontent text-headertext flex flex-col justify-center items-start ml-52 gap-4">
          <h4 className="text-headertext">Your Trusted Career Partner</h4>
          <h1 className="text-3xl font-bold">
            Unlock Your Dream <span className="text-primary">Career</span>
          </h1>
          <p className="text-hero-paragraph w-96">
            Our platform is dedicated to empowering individuals, connecting
            talent with the right opportunities, and fostering professional
            growth.
          </p>
          <div className="bg-white shadow-lg w-[600px] flex justify-center">
            <input
              type="text"
              className="border-r  p-3 w-60"
              placeholder="Job tittle, Keyword..."
            />
            <input
              type="text"
              className=" p-3 w-60 border-l "
              placeholder="Enter location"
            />
            <button className="bg-primary p-3 rounded-md">Search Job</button>
          </div>
          <p className="font-bold">
            Popular Searches:{" "}
            <span className="text-herotextcolor font-medium">
              Designer, Developer, Programmer, Architect.
            </span>
          </p>
        </div>
        <div>
          <img src="/heroimg.png" alt="" className="h-[500px]   " />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
