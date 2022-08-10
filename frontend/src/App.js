import "./output.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages & Components
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import MyProjects from "./pages/MyProjects";
import MyTickets from "./pages/MyTickets";
import MyProfile from "./pages/MyProfile";
import FindProjects from "./pages/FindProjects";
import SideNav from "./components/Nav";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import DataBar from "./components/DataBar";

function App() {
   const currentTheme = localStorage.getItem("theme") === "dark";
   const [isDark, setDarkTheme] = useState(currentTheme);

   return (
      <main
         className={
            isDark ? "flex bg-slate-600 dark" : "flex bg-sitelightgray "
         }
      >
         <BrowserRouter>
            <SideNav />
            <div className="flex flex-col w-[100%]  md:ml-[20%] xl:ml-[250px]   min-h-screen mx-auto justify-between">
               <div>
                  <TopBar isDark={isDark} setDarkTheme={setDarkTheme} />
                  <DataBar />
               </div>
               <div className=" flex ">
                  <div className=" mx-auto p-5">
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                           path="/CreateProject"
                           element={<CreateProject />}
                        />
                        <Route path="/MyProjects" element={<MyProjects />} />
                        <Route path="/MyTickets" element={<MyTickets />} />
                        <Route path="/MyProfile" element={<MyProfile />} />
                        <Route
                           path="/FindProjects"
                           element={<FindProjects />}
                        />
                     </Routes>
                  </div>
               </div>
               <Footer />
            </div>
         </BrowserRouter>
      </main>
   );
}

export default App;
