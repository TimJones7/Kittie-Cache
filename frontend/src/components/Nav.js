import React from "react";

const SideNav = () => {
   return (
      <div className=" flex-col fixed justify-between w-[20%] xl:w-[250px] h-screen bg-slate-300 dark:bg-slate-800 hidden md:flex border-r-2 ">
         <div className=" dark:bg-emerald-600 bg-cyan-600 p-4 text-center text-xl h-[60px] font-extrabold ">
            My Kromanage
         </div>
         <ul className=" dark:text-sitelightgray text-slate-800 text-2xl justify-start">
            <hr />
            <br />
            <li className="text-start mx-10 hover:text-indigo-500 my-2 p-2 border-l-4 dark:hover:text-siteredorange  hover:border-indigo-500 dark:hover:border-siteredorange border-slate-800 dark:border-sitelightgray">
               <a href="/">Home</a>
            </li>
            <li className="text-start mx-10 hover:text-indigo-500 my-2 p-2 border-l-4  dark:hover:text-siteredorange   hover:border-indigo-500 dark:hover:border-siteredorange border-slate-800 dark:border-sitelightgray">
               <a href="/">My Projects</a>
            </li>
            <li className="text-start mx-10 hover:text-indigo-500 my-2 p-2 border-l-4  dark:hover:text-siteredorange   hover:border-indigo-500 dark:hover:border-siteredorange border-slate-800 dark:border-sitelightgray">
               <a href="/">My Tickets</a>
            </li>
            <li className="text-start mx-10 hover:text-indigo-500 my-2 p-2 border-l-4  dark:hover:text-siteredorange   hover:border-indigo-500 dark:hover:border-siteredorange border-slate-800 dark:border-sitelightgray">
               <a href="/">My Profile</a>
            </li>
            <li className="text-start mx-10 hover:text-indigo-500 my-2 p-2 border-l-4  dark:hover:text-siteredorange   hover:border-indigo-500 dark:hover:border-siteredorange border-slate-800 dark:border-sitelightgray">
               <a href="/">Find Projects</a>
            </li>
            <li className="text-start mx-10 hover:text-indigo-500 my-2 p-2 border-l-4  dark:hover:text-siteredorange   hover:border-indigo-500 dark:hover:border-siteredorange border-slate-800 dark:border-sitelightgray">
               <a href="/CreateProject">Create Project</a>
            </li>
            <br />
            <hr />
         </ul>

         <footer className=" mt-auto bg-sitedarkblue text-sitelightgray p-4">
            <div className="flex flex-row justify-center space-x-3">
               <a
                  href="/"
                  className="flex flex-row justify-center align-center space-x-3"
               >
                  <span></span>Logout
                  <img
                     src="https://img.icons8.com/ios/30/000000/exit.png"
                     alt=""
                  />
               </a>
            </div>
         </footer>
      </div>
   );
};

export default SideNav;
