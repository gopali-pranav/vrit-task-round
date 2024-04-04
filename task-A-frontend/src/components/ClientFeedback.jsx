import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ClientFeedback = () => {
  return (
    <div>
      <div className="hero-container bg-herobgcolor p-4 mt-10">
        <div className="flex justify-between items-center p-4 ml-48 mr-48">
          <h1 className="text-2xl text-headertext font-semibold">
            What our client say about{" "}
            <span className="text-primary">Pacific Hunt</span>
          </h1>
          <div className="pagination flex items-center gap-4 text-2xl">
            <FaRegArrowAltCircleLeft />
            <p>2/14</p>
            <FaRegArrowAltCircleRight />
          </div>
        </div>
        <div className="flex gap-7 ml-52 mr-52">
          <div className="feedback bg-white shadow-md rounded-lg w-3/6 p-6 flex flex-col gap-4">
            <div className="icon">icon</div>
            <p className="text-headertext italic">
              This job portal has been instrumental in advancing my career. The
              interface is intuitive, making it easy to navigate through job
              listings and application processes. I've received numerous
              interview requests and job offers through this portal. I highly
              recommend it to anyone seeking new career opportunities.
            </p>
            <div className="profile flex gap-3 items-center">
              <img
                src="./user1.jpg"
                alt=""
                className="h-14 w-14 rounded-full"
              />
              <div>
                <p className="text-headertext font-semibold text-xl">
                  Amanda Bell
                </p>
                <p className="text-xs text-clientprofile">Product Designer</p>
              </div>
            </div>
          </div>
          <div className="feedback bg-white rounded-lg shadow-md w-3/6 p-6 flex flex-col gap-4">
            <div className="icon">icon</div>
            <p className="text-headertext italic">
              This job portal has been instrumental in advancing my career. The
              interface is intuitive, making it easy to navigate through job
              listings and application processes. I've received numerous
              interview requests and job offers through this portal. I highly
              recommend it to anyone seeking new career opportunities.
            </p>
            <div className="profile flex gap-3 items-center">
              <img
                src="./user2.jpg"
                alt=""
                className="h-14 w-14 rounded-full"
              />
              <div>
                <p className="text-headertext font-semibold text-xl">
                  Robert Smith
                </p>
                <p className="text-xs text-clientprofile">HR Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
