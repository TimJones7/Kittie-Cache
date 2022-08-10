import React from "react";

const TopBar = ({ isDark, setDarkTheme }) => {
   const themeSwitch = () => {
      if (isDark) {
         setDarkTheme(false);
         localStorage.setItem("theme", "light");
      }
      if (!isDark) {
         setDarkTheme(true);
         localStorage.setItem("theme", "dark");
      }
   };

   return (
      <section className=" mx-auto mt-0 w-[100%] p-3 bg-sitedarkgray dark:bg-slate-800 h-[60px]  ">
         <div className="flex flex-row justify-between">
            <div>
               {isDark ? (
                  <button onClick={() => themeSwitch()} className=" p-1">
                     <img src="https://img.icons8.com/external-others-inmotus-design/30/000000/external-Sun-sun-others-inmotus-design-6.png"></img>
                  </button>
               ) : (
                  <button onClick={() => themeSwitch()} className=" p-1">
                     <img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/30/000000/external-moon-aerospace-phatplus-lineal-color-phatplus.png"></img>
                  </button>
               )}
            </div>
            <div className="hidden md:block">
               <form className="flex items-center ">
                  <label className="sr-only">Search</label>
                  <div className="relative w-full">
                     <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                           className="w-5 h-5 text-gray-500 dark:text-gray-400"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                     </div>
                     <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                     />
                  </div>
                  <button
                     type="submit"
                     className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     ></svg>
                  </button>
               </form>
            </div>
            <div className=" ">User Notifications & Logout</div>
         </div>
      </section>
   );
};

export default TopBar;
