import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const AfterMidSection = () => {
  return (
    <div>
      <div className="top-container">
        <div className="content1 flex justify-between items-center p-4 mt-10">
          <h2 className="ml-52 font-bold text-headertext text-xl"></h2>
          <p className="text-primary mr-52 flex justify-center items-center gap-3  shadow-md p-2 border-red-50">
            See More <FaArrowRight />
          </p>
        </div>
        <div className="grid grid-cols-3 ml-56 mr-44 gap-4 ">
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-48 gap-2">
            <div className="flex justify-between items-center">
              <img
                src="./google.png"
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <button className="border border-primary w-40 h-8 bg-iconsbg rounded-xl">
                <p className="text-primary">50 jobs available</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">Google</h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Perth, Australia</h2>
              </div>

              <div className="mt-4 flex justify-between ">
                <h2 className="text-headertext text-sm border w-44 text-center p-1 rounded-xl">
                  Information Technology
                </h2>
                <h2 className="text-headertext text-sm border w-20 text-center p-1 rounded-xl">
                  Fintech
                </h2>
              </div>
            </div>
          </div>
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-48 gap-2">
            <div className="flex justify-between items-center">
              <img
                src="./google.png"
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <button className="border border-primary w-40 h-8 bg-iconsbg rounded-xl">
                <p className="text-primary">222 jobs available</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">
                Prabodh Digital Production
              </h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Perth, Australia</h2>
              </div>

              <div className="mt-4 flex justify-between ">
                <h2 className="text-headertext text-sm border w-44 text-center p-1 rounded-xl">
                  Information Technology
                </h2>
                <h2 className="text-headertext text-sm border w-20 text-center p-1 rounded-xl">
                  Fintech
                </h2>
              </div>
            </div>
          </div>
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-48 gap-2">
            <div className="flex justify-between items-center">
              <FaSkype className="h-10 w-10 rounded-full text-primary" />
              <button className="border border-primary w-40 h-8 bg-iconsbg rounded-xl">
                <p className="text-primary">115 jobs available</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">Skype</h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Perth, Australia</h2>
              </div>

              <div className="mt-4 flex justify-between ">
                <h2 className="text-headertext text-sm border w-44 text-center p-1 rounded-xl">
                  Information Technology
                </h2>
                <h2 className="text-headertext text-sm border w-20 text-center p-1 rounded-xl">
                  Fintech
                </h2>
              </div>
            </div>
          </div>
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-48 gap-2">
            <div className="flex justify-between items-center">
              <FaFacebook className="h-10 w-10 rounded-full text-primary" />
              <button className="border border-primary w-40 h-8 bg-iconsbg rounded-xl">
                <p className="text-primary">97 jobs available</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">
                Facebook
              </h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Perth, Australia</h2>
              </div>

              <div className="mt-4 flex justify-between ">
                <h2 className="text-headertext text-sm border w-44 text-center p-1 rounded-xl">
                  Information Technology
                </h2>
                <h2 className="text-headertext text-sm border w-20 text-center p-1 rounded-xl">
                  Fintech
                </h2>
              </div>
            </div>
          </div>
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-48 gap-2">
            <div className="flex justify-between items-center">
              <FaApple className="h-10 w-10 rounded-full" />

              <button className="border border-primary w-40 h-8 bg-iconsbg rounded-xl">
                <p className="text-primary">130 jobs available</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">Apple</h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Perth, Australia</h2>
              </div>

              <div className="mt-4 flex justify-between ">
                <h2 className="text-headertext text-sm border w-44 text-center p-1 rounded-xl">
                  Information Technology
                </h2>
                <h2 className="text-headertext text-sm border w-20 text-center p-1 rounded-xl">
                  Fintech
                </h2>
              </div>
            </div>
          </div>
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-48 gap-2">
            <div className="flex justify-between items-center">
              <FaTwitter className="h-10 w-10 rounded-full text-primary" />
              <button className="border border-primary w-40 h-8 bg-iconsbg rounded-xl">
                <p className="text-primary">80 jobs available</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">Twitter</h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Perth, Australia</h2>
              </div>

              <div className="mt-4 flex justify-between ">
                <h2 className="text-headertext text-sm border w-44 text-center p-1 rounded-xl">
                  Information Technology
                </h2>
                <h2 className="text-headertext text-sm border w-20 text-center p-1 rounded-xl">
                  Fintech
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterMidSection;
