import React, {useState} from "react";
import logo from "../../../assets/logo.svg";
import barslogo from "../../../assets/bars-solid.svg";
import xmark from "../../../assets/xmark-solid.svg";

const NavigationBar = () => {

  const [showMenu, setShowMenu] = useState(false);

let menu 

if (showMenu){
  menu = <div className="w-full h-80 -mt-40 bg-red-500 flex flex-col justify-center fixed">
    <div className="w-full flex h-10 justify-end "><img src={xmark} className="w-10 bg-white mr-4 rounded-full " onClick={()=>{setShowMenu(false)}}></img></div>
    <ul className="text-white text-lg justify-center w-full flex flex-col">
            <li className="text-center hover:text-gray-800 " >Home</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">About </li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Privacy</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Service</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Price</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Contact</li>
            <button className=" bg-gray-500 rounded-full h-12 text-black font-semibold">Register</button>
            <button className="underline">login</button>
    </ul>
  </div>
}
else {
  menu = <div className="hidden">Menu is this</div>
}

  return (
    <div>
        
      <div className=" w-full flex   h-24 justify-between p-4 shadow-2xl fixed   bg-white -mt-44">
        <img src={logo} className="w-32 " ></img>
        <ul className=" justify-around w-4/12  text-gray-500  font-bold hidden mt-5 lg:flex ">
          <li className="text-red-500 cursor-pointer ">Home </li>
          <li className="hover:text-red-500 cursor-pointer ">About</li>
          <li className="hover:text-red-500 cursor-pointer ">Services</li>
          <li className="hover:text-red-500 cursor-pointer ">Pricing</li>
          <li className="hover:text-red-500 cursor-pointer ">Contact</li>
          </ul>
          <div className="hidden w-72 justify-between lg:flex">
          <button className="bg-red-500 w-32 h-14 text-white">Register</button>
          <button className="bg-red-500 w-32 h-14 text-white">login</button>
          </div>
        <img src={barslogo} className="w-5 lg:hidden" onClick={()=>setShowMenu(!showMenu)}></img>
      </div>
        {menu}
    </div>
  );
};

export default NavigationBar;