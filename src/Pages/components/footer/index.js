import React from "react";
import footerlogo from "../../../assets/footerlogo.svg";
import facebook from "../../../assets/facebook-brands.svg";
import twitter from "../../../assets/twitter-brands.svg";
import envelope from "../../../assets/envelope-solid.svg";
import instagram from "../../../assets/instagram-square-brands.svg";

const Footer = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center bg-gray-800  mt-32 hover:hidden">
        <div className="w-10/12 mt-24 ">
          <img src={footerlogo} ></img>
          <p className="text-white mt-10">
            Lorem ipsum dolor sitco nsetetu nonumy eirmod tempor invidunt ut
            labore et dolore magna uyam erat, sed diam.
          </p>
        </div>
        <div className="w-full flex justify-around mt-10">
          <div className="flex flex-col  ">
            <h1 className="text-xl text-white ">Quick Links</h1>
            <h3 className="text-base text-white mt-3">Company</h3>
            <h3 className="text-base text-white">Privacy Policy</h3>
            <h3 className="text-base text-white">About</h3>
          </div>
          <div className="flex flex-col  ">
            <h1 className="text-xl text-white">Resources</h1>
            <h3 className="text-base text-white mt-3">Support</h3>
            <h3 className="text-base text-white">Contact</h3>
            <h3 className="text-base text-white">Terms</h3>
          </div>
        </div>
        <div className="w-10/12 mt-10 flex flex-col">
          <h1 className="text-xl text-white mt-5 text-start">Newsletter</h1>
          <input
            type="text"
            placeholder="Enter email"
            className="w-full h-16 rounded-full mt-12 p-5 focus:outline-none"
          ></input>
          <button className="w-36 h-14 bg-red-500 rounded-full self-end mt-5 text-white">
            Submit
          </button>
        </div>
        <div className="flex flex-col w-10/12 mt-24">
          <hr></hr>
          <div className="w-52 bg-white rounded-full p-1  flex justify-between mt-5 ">
            <img src={facebook} className=" w-10"></img>
            <img src={instagram} className=" w-8"></img>
            <img src={envelope} className=" w-9"></img>
            <img src={twitter} className=" w-9"></img>
            
          </div>
        </div>
        <h1 className="text-white mt-24">(Re)Designed and Developed by... &#128516;</h1>
      </div>
      
    </div>
  );
};

export default Footer;
