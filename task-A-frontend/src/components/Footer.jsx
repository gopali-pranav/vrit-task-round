import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footercontainer bg-footerbg p-12 mt-28">
        <div className="content flex justify-between items-center">
          <div className="logo flex flex-col gap-3 justify-center ml-44 ">
            <img src="/pacafichunt.png" alt="" className="h-10 w-40" />
            <p className="w-96 text-lorem">
              Lorem ipsum dolor sit amet consectetur. Nibh leo amet sed orci
              ipsum lectus pretium diam. Placerat ipsum volutpat commodo
              sodales.
            </p>
          </div>
          <div className="flex text-white gap-14 mr-44">
            <div className=" flex flex-col gap-2">
              <p>Job Seekers</p>
              <ul className="text-lorem">
                <li>
                  <a href="">Search Jobs</a>
                </li>
                <li>
                  <a href="">Explore Jobs</a>
                </li>
                <li>
                  <a href="">Saved Jobs</a>
                </li>
                <li>
                  <a href="">Applied Jobs</a>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-2">
              <p>Employers</p>
              <ul className="text-lorem">
                <li>
                  <a href="">Register</a>
                </li>
                <li>
                  <a href="">Post Jobs</a>
                </li>
                <li>
                  <a href="">Applications</a>
                </li>
                <li>
                  <a href="">My Job Postings</a>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-2">
              <p>Legal</p>
              <ul className="text-lorem">
                <li>
                  <a href="">Cookies Policy</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright flex justify-between ml-44 mt-20">
          <h1 className="text-md text-lorem">
            Copyright © 2024 Pacific Hunt. All rights reserved.
          </h1>
          <div className="social-icons flex gap-4 mr-44 text-xl text-lorem">
            <FaFacebook />
            <IoLogoTwitter />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
