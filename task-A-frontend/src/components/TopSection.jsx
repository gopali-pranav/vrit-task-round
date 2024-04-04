import { FaArrowRight } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const TopSection = () => {
  return (
    <div>
      <div className="top-container">
        <div className="content1 flex justify-between items-center p-4 mt-10">
          <h2 className="ml-52 font-bold text-headertext text-xl">
            Top Job Openings
          </h2>
          <p className="text-primary mr-52 flex justify-center items-center gap-3  shadow-md p-2 border-red-50">
            See More <FaArrowRight />
          </p>
        </div>
        <div className="grid grid-cols-3 ml-56 mr-44 gap-4 ">
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-64 gap-2">
            <div className="flex justify-between items-center">
              <img
                src="./tesla.png"
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <button className="border border-primary p-2 rounded-md">
                <p className="text-primary">Apply Now</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">
                Deep Learning Engineer
              </h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Sydney, Australia</h2>{" "}
                <h2 className="text-sm text-headertext">Expires in 25 Days</h2>
              </div>

              <ul className="flex mt-4 gap-4 ">
                <li className="text-sm text-headertext">Remote</li>
                <li className="text-sm text-headertext">Entry Level</li>
                <li className="text-sm text-headertext">Full Time</li>
              </ul>
              <div>
                <h2 className="text-headertext text-sm">
                  Salary: 50K - 80K AUD (Yearly)
                </h2>
              </div>
              <div className="border-b-2  mt-5"></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-lg text-headertext font-semibold">
                Tesla Inc.
              </h2>
              <CiBookmark className="text-2xl text-headertext font-semibold" />
            </div>
          </div>
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-64 gap-2">
            <div className="flex justify-between items-center">
              <img src="./bat.png" alt="" className="h-10 w-10 rounded-full" />
              <button className="border border-primary p-2 rounded-md">
                <p className="text-primary">Apply Now</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">
                Game Developer
              </h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">
                  Melbourne, Australia
                </h2>{" "}
                <h2 className="text-sm text-headertext">Expires in 25 Days</h2>
              </div>

              <ul className="flex mt-4 gap-4 ">
                <li className="text-sm text-headertext">Onsite</li>
                <li className="text-sm text-headertext">Intermediate</li>
                <li className="text-sm text-headertext">Internship</li>
              </ul>
              <div>
                <h2 className="text-headertext text-sm">
                  Salary: 50K - 80K AUD (Yearly)
                </h2>
              </div>
              <div className="border-b-2  mt-5"></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-lg text-headertext font-semibold">
                The Batman Corporation
              </h2>
              <CiBookmark className="text-2xl text-headertext font-semibold" />
            </div>
          </div>
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-64 gap-2">
            <div className="flex justify-between items-center">
              <img
                src="./google.png"
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <button className="border border-primary p-2 rounded-md">
                <p className="text-primary">Apply Now</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">
                AI Engineer
              </h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Perth, Australia</h2>{" "}
                <h2 className="text-sm text-headertext">Expires in 25 Days</h2>
              </div>

              <ul className="flex mt-4 gap-4 ">
                <li className="text-sm text-headertext">Hybrid</li>
                <li className="text-sm text-headertext">Experienced</li>
                <li className="text-sm text-headertext">Full Time</li>
              </ul>
              <div>
                <h2 className="text-headertext text-sm">
                  Salary: 50K - 80K AUD (Yearly)
                </h2>
              </div>
              <div className="border-b-2  mt-5"></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-lg text-headertext font-semibold">Google</h2>
              <CiBookmark className="text-2xl text-headertext font-semibold" />
            </div>
          </div>
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-64 gap-2">
            <div className="flex justify-between items-center">
              <img src="./bat.png" alt="" className="h-10 w-10 rounded-full" />
              <button className="border border-primary p-2 rounded-md">
                <p className="text-primary">Apply Now</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">
                Software Engineer
              </h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Sydney, Australia</h2>{" "}
                <h2 className="text-sm text-headertext">Expires in 25 Days</h2>
              </div>

              <ul className="flex mt-4 gap-4 ">
                <li className="text-sm text-headertext">Remote</li>
                <li className="text-sm text-headertext">Entry Level</li>
                <li className="text-sm text-headertext">Full Time</li>
              </ul>
              <div>
                <h2 className="text-headertext text-sm">
                  Salary: 50K - 80K AUD (Yearly)
                </h2>
              </div>
              <div className="border-b-2  mt-5"></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-lg text-headertext font-semibold">
                The Batman Corporation
              </h2>
              <CiBookmark className="text-2xl text-headertext font-semibold" />
            </div>
          </div>
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-64 gap-2">
            <div className="flex justify-between items-center">
              <img
                src="./google.png"
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <button className="border border-primary p-2 rounded-md">
                <p className="text-primary">Apply Now</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">
                Data Scientist
              </h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Perth, Australia</h2>{" "}
                <h2 className="text-sm text-headertext">Expires in 25 Days</h2>
              </div>

              <ul className="flex mt-4 gap-4 ">
                <li className="text-sm text-headertext">Hybrid</li>
                <li className="text-sm text-headertext">Experienced</li>
                <li className="text-sm text-headertext">Full Time</li>
              </ul>
              <div>
                <h2 className="text-headertext text-sm">
                  Salary: 50K - 80K AUD (Yearly)
                </h2>
              </div>
              <div className="border-b-2  mt-5"></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-lg text-headertext font-semibold">Google</h2>
              <CiBookmark className="text-2xl text-headertext font-semibold" />
            </div>
          </div>
          <div className="content2 rounded-md  p-4 border border-bordercolor w-80 h-64 gap-2">
            <div className="flex justify-between items-center">
              <img
                src="./tesla.png"
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <button className="border border-primary p-2 rounded-md">
                <p className="text-primary">Apply Now</p>
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-lg text-headertext font-semibold">
                Product Designer
              </h1>
              <div className="flex gap-4">
                <h2 className="text-sm text-headertext">Sydney, Australia</h2>{" "}
                <h2 className="text-sm text-headertext">Expires in 25 Days</h2>
              </div>

              <ul className="flex mt-4 gap-4 ">
                <li className="text-sm text-headertext">Remote</li>
                <li className="text-sm text-headertext">Entry Level</li>
                <li className="text-sm text-headertext">Full Time</li>
              </ul>
              <div>
                <h2 className="text-headertext text-sm">
                  Salary: 50K - 80K AUD (Yearly)
                </h2>
              </div>
              <div className="border-b-2  mt-5"></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-lg text-headertext font-semibold">
                Tesla Inc.
              </h2>
              <CiBookmark className="text-2xl text-headertext font-semibold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
