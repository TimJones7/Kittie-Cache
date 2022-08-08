import React from "react";

const SideNav = () => {
   return (
      <div className=" flex-col fixed justify-between w-[20%] xl:w-[250px] h-screen bg-sitedarkblue hidden md:flex ">
         <div className="bg-siteteal p-2 flex justify-between">
            <div className="flex justify-self-start p-2 text-xl">
               My Kromanage
            </div>
            <button id="sun" className="sun p-1" title="Light Mode">
               <img
                  src="https://img.icons8.com/material-outlined/24/000000/sun--v1.png"
                  alt=""
               ></img>
            </button>
            <button id="moon" className="moon p-1" title="Dark Mode">
               <img
                  src="https://img.icons8.com/ios-glyphs/24/000000/moon-symbol.png"
                  alt=""
               ></img>
            </button>
         </div>
         <ul className=" text-siteteal">
            <br />
            <li className="text-center hover:text-sitelightgray">
               <a className="flex-row" href="#About_Me">
                  About
               </a>
            </li>
            <li className="text-center hover:text-sitelightgray">
               <a href="#Skills">Skills</a>
            </li>
            <li className="text-center hover:text-sitelightgray">
               <a href="#Projects">Projects</a>
            </li>
            <li className="text-center hover:text-sitelightgray">
               <a href="#Blogs">Blogs</a>
            </li>
            <br />
            <hr />
         </ul>

         <footer className=" mt-auto bg-sitedarkblue text-sitelightgray p-4">
            <div className="flex flex-wrap justify-center space-x-3">
               <a href="https://twitter.com/TimJones_Dev">
                  <img
                     src="https://img.icons8.com/office/20/000000/twitter.png"
                     alt=""
                     className="h-8 hover:rotate-12"
                  ></img>
               </a>
               <a href="https://www.linkedin.com/in/timothy-jones-994b83237/">
                  <img
                     src="https://img.icons8.com/office/20/000000/linkedin.png"
                     alt=""
                     className="h-8 hover:rotate-12"
                  ></img>
               </a>

               <a href="https://github.com/TimJones7">
                  <img
                     src="https://img.icons8.com/stickers/20/000000/github.png"
                     alt=""
                     className="h-8 hover:rotate-12"
                  ></img>
               </a>
            </div>
         </footer>
      </div>
   );
};

export default SideNav;
