import logo from "../../../assets/logo.svg";
import barslogo from "../../../assets/bars-solid.svg";

const NavigationBar = () => {
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
        <img src={barslogo} className="w-5 lg:hidden"></img>
      </div>
    </div>
  );
};

export default NavigationBar;