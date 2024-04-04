import { FaArrowRight } from "react-icons/fa";
import { CiPen } from "react-icons/ci";

const PopularCategories = () => {
  return (
    <div>
      <div className="popular-container">
        <div className="content1 flex justify-between items-center p-4 mt-10">
          <h2 className="ml-52 font-bold text-headertext text-xl">
            Popular Categories
          </h2>
          <p className="text-primary mr-52 flex justify-center items-center gap-3  shadow-md p-2 border-red-50">
            See More <FaArrowRight />
          </p>
        </div>
        <div className="grid grid-cols-3 ml-56 mr-32 gap-4 ">
          <div className="content2 rounded-md flex items-center justify-center p-4 border border-bordercolor w-72 h-20 gap-2">
            <div className=" w-20 h-14 rounded-lg bg-iconsbg flex justify-center items-center">
              <CiPen className="text-icons text-xl font-bold" />
            </div>
            <div className="w-5/6">
              <h2 className="text-headertext font-semibold text-lg">
                Graphics & Design
              </h2>
              <p className="text-sm text-herotextcolor">418 Open position</p>
            </div>
          </div>
          <div className="content2 rounded-md flex items-center justify-center border border-bordercolor w-72 h-20 gap-2 p-4 ">
            <div className=" w-20 h-14 rounded-lg bg-iconsbg flex justify-center items-center">
              <CiPen className="text-icons text-xl font-bold" />
            </div>
            <div className="w-5/6">
              <h2 className="text-headertext font-semibold text-lg">
                Coding & Programing
              </h2>
              <p className="text-sm text-herotextcolor">240 Open position</p>
            </div>
          </div>
          <div className="content2 rounded-md flex items-center justify-center border border-bordercolor w-72 h-20 gap-2 p-4 ">
            <div className=" w-20 h-14 rounded-lg bg-iconsbg flex justify-center items-center">
              <CiPen className="text-icons text-xl font-bold" />
            </div>
            <div className="w-5/6">
              <h2 className="text-primary font-semibold text-lg">
                Data Science
              </h2>
              <p className="text-sm text-herotextcolor">120 Open position</p>
            </div>
          </div>
          <div className="content2 rounded-md flex items-center justify-center border border-bordercolor w-72 h-20 gap-2 p-4 ">
            <div className=" w-20 h-14 rounded-lg bg-iconsbg flex justify-center items-center">
              <CiPen className="text-icons text-xl font-bold" />
            </div>
            <div className="w-5/6">
              <h2 className="text-headertext font-semibold text-lg">
                Health Care
              </h2>
              <p className="text-sm text-herotextcolor">96 Open position</p>
            </div>
          </div>
          <div className="content2 rounded-md flex items-center justify-center border border-bordercolor w-72 h-20 gap-2 p-4 ">
            <div className=" w-20 h-14 rounded-lg bg-iconsbg flex justify-center items-center">
              <CiPen className="text-icons text-xl font-bold" />
            </div>
            <div className="w-5/6">
              <h2 className="text-headertext font-semibold text-lg">
                Digital Marketing
              </h2>
              <p className="text-sm text-herotextcolor">60 Open position</p>
            </div>
          </div>
          <div className="content2 rounded-md flex items-center justify-center border border-bordercolor w-72 h-20 gap-2 p-4 ">
            <div className=" w-20 h-14 rounded-lg bg-iconsbg flex justify-center items-center">
              <CiPen className="text-icons text-xl font-bold" />
            </div>
            <div className="w-5/6">
              <h2 className="text-headertext font-semibold text-lg">
                Account & Finance
              </h2>
              <p className="text-sm text-herotextcolor">185 Open position</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
