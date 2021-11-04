import React from "react";
import NavigationBar from "../components/navbar/index";
import header from "../../assets/header.svg";
import recycle from "../../assets/recycle-solid.svg";
import About from "../../assets/about.svg";
import tick from "../../assets/tick.png";
import Contact from "../../assets/contact.svg";
import brands from "../../assets/uncharted-brands.svg";
import business from "../../assets/business-time-solid.svg";
import hand from "../../assets/hand-sparkles-solid.svg";
import desk from "../../assets/desktop-solid.svg";
import dollar from "../../assets/comments-dollar-solid.svg";
import mobile from "../../assets/mobile-alt-solid.svg";
import globe from "../../assets/globe-solid.svg";
import Footer from "../../Pages/components/footer/index";


const HomePage = () => {
  return (
    <div style={{ fontFamily: "nunito,sans-sarif" }}>
      <NavigationBar />
      {/* banner */}
      <div className="flex flex-col mt-44 w-full items-center lg:flex lg:flex-row lg:justify-around">
        <div className="w-11/12 flex flex-col lg:p-10">
          <h1 className="text-2xl  font-extrabold text-gray-700 sm:text-5xl lg:text-4xl">
            Creative Multipurpose Tailwind CSS
            <span className="text-red-500">Template</span>
          </h1>
          <p className="text-gray-500 mt-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          <button className="w-40 h-14 bg-gray-700 text-white rounded-full rounded-tr-none mt-10 ">
            Get Started
          </button>
        </div>
        <div className="w-11/12 mt-12">
          <img src={header}></img>
        </div>
      </div>

      {/* About Section */}

      <div className="w-full flex flex-col items-center mt-44">
        <h3 className="text-red-500 sm:text-xl sm:font-semibold">About</h3>
        <h1 className="text-2xl font-bold text-gray-700 mt-5 sm:text-4xl">Work Process</h1>
      </div>
      <div className="w-full items-center flex flex-col mt-10 lg:flex-row ">
        {/* 1st div */}
        <div className="w-full flex flex-col items-center sm:flex-row sm:justify-around ">
         {/* card1 */}
          <div className="border-dashed w-10/12 p-2 flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:h-96 sm:w-5/12">
          <div className=" border-8 border-red-300 rounded-full mt-10 hover:border-red-500"><img src={recycle} className="w-12 h-12"></img></div>
            <h1 className="uppercase text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center">
              invest your cash
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl">
            Please come and visit our company. we collect money from investers and invest in our Business
            </p>
          </div>

          {/* card2 */}
          <div className="border-dashed w-10/12 mt-10  flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:mt-0 sm:h-96 sm:w-5/12">
            <div className=" border-8 border-red-300 rounded-full mt-10 hover:border-red-500"><img src={business} className="w-12 h-12"></img></div>
            <h1 className="uppercase text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center">
              invest in business
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl">
              We Invest your money in Trending businesses. and don't worry about
              any loss we will take care of it
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="border-dashed w-10/12 mt-10  flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:w-5/12 sm:h-96 lg:mt-0 lg:mr-3">
        <div className=" border-8 border-red-300 rounded-full mt-10 hover:border-red-500"><img src={hand} className="w-12 h-12"></img></div>
            <h1 className="uppercase text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center">
              return profit
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl">
            Our ploicy is return profit on monthly base. you will get more then 8% profit of your investment
            </p>
          </div>
      </div>
      {/* Sect */}
      <div className="flex flex-col items-center lg:flex-row">            
          <img src={About} className="mt-44 w-11/12  sm:w-11/12 lg:-ml-96"></img>
          <div className="w-10/12 flex flex-col justify-start mt-10 p-2 lg:p-4">
          <h3 className="text-base text-red-500 text-start font-semibold sm:text-xl ">Why Choose Us</h3>
          <h1 className="text-2xl text-gray-700 font-bold mt-5 sm:text-4xl lg:p-5">Your Goal is Our Achievement</h1>
          <p className=" text-gray-500 mt-10 lg:p-4">
          Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergren, no sea takimata sanctus.
            </p>
            <div className="flex mt-10">
            <img src={tick} className="w-8 h-8"></img>
            <p className=" text-gray-500 ml-3">
            Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv
            </p>
            </div>
            <div className="flex mt-5">
            <img src={tick} className="w-8 h-8"></img>
            <p className=" text-gray-500 ml-3">
            At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv            </p>
            </div>
            <div className="flex mt-5">
            <img src={tick} className="w-8 h-8"></img>
            <p className=" text-gray-500 ml-3">
            Dvero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv            </p>
            </div>
            </div>

            

      </div>
            {/* Services section */}



            <div className="w-full flex flex-col items-center mt-44">
        <h3 className="text-red-500 sm:text-xl sm:font-semibold">What We Do</h3>
        <h1 className="text-2xl font-bold text-gray-700 mt-5 sm:text-4xl">Our Services</h1>
      </div>
      <div className="w-full items-center flex flex-col mt-10 lg:flex-row ">
        {/* 1st div */}
        <div className="w-full flex flex-col items-center sm:flex-row sm:justify-around ">
         {/* card1 */}
          <div className="border-dashed w-10/12 p-2 flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:h-96 sm:w-5/12">
          <div className=" border-8 border-red-300 rounded-full mt-10 hover:border-red-500"><img src={desk} className="w-12 h-12"></img></div>
            <h1 className=" text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              Web Design
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl">
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores            </p>
          </div>

          {/* card2 */}
          <div className="border-dashed w-10/12 mt-10  flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:mt-0 sm:h-96 sm:w-5/12">
            <div className=" border-8 border-red-300 rounded-full mt-10 hover:border-red-500"><img src={business} className="w-12 h-12"></img></div>
            <h1 className=" text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              Digital Marketing
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl">
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores
                         </p>
          </div>
        </div>
        {/* card3 */}
        <div className="border-dashed w-10/12 mt-10  flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:w-5/12 sm:h-96 lg:mt-0 lg:mr-3">
        <div className=" border-8 border-red-300 rounded-full mt-10 hover:border-red-500"><img src={mobile} className="w-12 h-12"></img></div>
            <h1 className=" text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center ">
            Mobile Apps            
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl">
            Our ploicy is return profit on monthly base. you will get more then 8% profit of your investment
            </p>
          </div>
      </div>
      <div className="w-full items-center flex flex-col mt-10 lg:flex-row">
        {/* 1st div */}
        <div className="w-full flex flex-col items-center sm:flex-row sm:justify-around ">
         {/* card1 */}
          <div className="border-dashed w-10/12 p-2 flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:h-96 sm:w-5/12">
          <div className=" border-8 border-red-300 rounded-full mt-10 hover:border-red-500"><img src={globe} className="w-12 h-12"></img></div>
            <h1 className=" text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              SEO Consultancy
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl">
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores
            </p>
          </div>

          {/* card2 */}
          <div className="border-dashed w-10/12 mt-10  flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:mt-0 sm:h-96 sm:w-5/12">
            <div className=" border-8 border-red-300 rounded-full mt-10 hover:border-red-500"><img src={brands} className="w-12 h-12"></img></div>
            <h1 className=" text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              Graphic Design
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl">
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores

            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="border-dashed w-10/12 mt-10  flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:w-5/12 sm:h-96 lg:mt-0 lg:mr-3">
        <div className=" border-8 border-red-300 rounded-full mt-10 hover:border-red-500 "><img src={dollar} className="w-12 h-12 "></img></div>
            <h1 className=" text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              Business Consultancy
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl">
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores
            </p>
          </div>
      </div>


      {/* Pricing section */}


          <div className="w-full flex flex-col items-center mt-44">
            <div className="w-11/12 flex flex-col items-center">
            <h3 className="text-red-500 sm:text-lg sm:font-semibold lg:text-2xl">Pricing Plans</h3>
        <h1 className="text-2xl font-bold text-gray-700 mt-5 sm:text-4xl lg:text-5xl">Choose Your Plan</h1>
        <div className="flex mt-16 ">
          <span className="bg-red-500 text-white py-3 px-8 rounded-l-full lg:px-12 lg:py-4">
            Monthly
          </span>
          <span className="py-3 px-7 font-semibold text-gray-500 lg:px-10 lg:py-4">Yearly</span>
        </div>


            </div>

            {/* cards */}
            {/* main div */}
              <div className="w-full flex flex-col items-center lg:flex-row lg:justify-around">
            {/* card1 */}
            <div className="border-dashed w-10/12 mt-12  flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:w-6/12  lg:mt-10 lg:w-1/4 ">
          <div className=" border-8 bg-red-300 border-red-300 rounded-full mt-10 hover:border-red-500 hover:bg-red-500 items-center font-bold "><h1 className="text-2xl text-white">Basic</h1></div>
            <h1 className=" text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center ">
             $19.00
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl leading-9">
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores
            </p>
            <button className="w-32 h-12 bg-red-100 text-gray-500 rounded-md mb-7 hover:text-white hover:bg-red-500">Choose Plan</button>
          </div>

          {/* Card2 */}
            <div className="border-dashed w-10/12 mt-12  flex flex-col items-center rounded-xl border-2  border-red-500 sm:w-6/12  lg:mt-10 lg:w-1/4 ">
          <div className=" border-8  rounded-full mt-10 border-red-500 bg-red-500 items-center font-bold "><h1 className="text-2xl text-white">Standard</h1></div>
            <h1 className=" text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              $39.00
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl leading-9">
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores
            </p>
            <button className="w-32 h-12  rounded-md mb-7 text-white bg-red-500">Choose Plan</button>
          </div>

          {/* Card3 */}
            <div className="border-dashed w-10/12 mt-12  flex flex-col items-center rounded-xl border-2 border-gray-300 hover:border-red-500 sm:w-6/12  lg:mt-10 lg:w-1/4 ">
          <div className=" border-8 bg-red-300 border-red-300 rounded-full mt-10 hover:border-red-500 hover:bg-red-500 items-center font-bold "><h1 className="text-2xl text-white">Premium</h1></div>
            <h1 className=" text-xl font-semibold text-gray-700 mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              $99.00
            </h1>
            <p className="p-5 text-center text-gray-500 mb-7 lg:text-xl leading-9">
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores
            </p>
            <button className="w-32 h-12 bg-red-100 text-gray-500 rounded-md mb-7 hover:text-white hover:bg-red-500">Choose Plan</button>
          </div>
          </div>
                </div>



                {/* Contact Section */}
                  

              <div className="flex flex-col w-full mt-44 items-center sm:flex-row sm:justify-around">
                  {/* IMG */}
                  <div>
                    <img src={Contact} className="-ml-40"></img>
                    </div>    
                             {/* form */}
                             <div className="w-10/12 items-center flex flex-col justify-between h-96 mt-16 sm:mr-7">
                <div className="flex flex-col items center w-full sm:flex-row sm:justify-around">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-gray-400 border h-12 rounded-lg w-full p-2 focus:outline-none sm:w-5/12"
                ></input>
                <input
                  type="Email"
                  placeholder="Email"
                  className="border-gray-400 border h-12 rounded-lg w-full p-2 focus:outline-none mt-5 sm:mt-0 sm:w-5/12"
                ></input>
                </div>
                <input
                  type="text"
                  placeholder="Message.."
                  className="border-gray-400 border  rounded-lg w-full h-44 p-2 focus:outline-none sm:w-11/12"
                ></input>
                <button
                  type="submit"
                  className="self-start bg-red-500 text-white w-32 h-14 rounded-lg "
                >
                  Submit
                </button>
          </div>



              </div>
              
                <Footer />
    </div>
  );
};

export default HomePage;
