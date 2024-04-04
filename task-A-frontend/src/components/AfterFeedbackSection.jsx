import React from "react";

const AfterFeedbackSection = () => {
  return (
    <div>
      <div className="container bg-feedbackbg w-[1080px] p-14 rounded-md mt-36 ml-56 flex items-center justify-between relative">
        <div className="content1 w-3/4 flex flex-col gap-4 p-8">
          <h1 className="text-white font-semibold text-2xl ">
            Join <span className="text-primary">Pacific Hunt</span> today.
            Connect, Grow, Succeed.
          </h1>
          <p className="text-white text-sm w-2/4">
            Whether you're seeking your next career move or searching for top
            talent, our platform offers the perfect avenue to connect and
            thrive.
          </p>
          <div className="btn flex items-center gap-5">
            <button className="bg-primary text-white p-2 rounded-md w-40">
              Join as jobseeker
            </button>
            <button className="border border-primary text-primary p-2 rounded-md w-40">
              Join as employer
            </button>
          </div>
        </div>
        <img
          src="./kale.png"
          alt=""
          className="w-4/6  absolute right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default AfterFeedbackSection;
