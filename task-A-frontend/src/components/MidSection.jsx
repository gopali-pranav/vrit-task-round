import React from "react";

const MidSection = () => {
  return (
    <div>
      <div className="hero-container bg-herobgcolor flex items-center gap-4 p-4 mt-10 justify-center ">
        <div className=" w-5/6 flex flex-col gap-8 items-center justify-center p-8">
          <h1 className="text-2xl font-semibold">
            Join in globally <span className="text-primary">renowned </span>
            companies
          </h1>
          <div className="flex space-x-24 ml-14 mr-14 items-center">
            <img
              src="./googletext.png"
              alt=""
              className="w-36 h-14 mix-blend-multiply"
            />
            <img
              src="./zoho.png"
              alt=""
              className="w-36 h-14 mix-blend-multiply"
            />
            <img
              src="./airbnb.png"
              alt=""
              className="w-36 h-14 mix-blend-multiply"
            />
            <img
              src="./microsoft.png"
              alt=""
              className="w-36 h-14 mix-blend-multiply"
            />
            <img
              src="./clickup.png"
              alt=""
              className="w-36 h-14 mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
