import "./output.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home";
import SideNav from "./components/Nav";
import TopBar from "./components/TopBar";

function App() {
   return (
      <main className="flex">
         <SideNav />
         <div className="w-[100%] flex flex-col bg-sitelightgray md:ml-[20%] xl:ml-[250px] dark:bg-sitedarkblue dark:text-sitelightgray mx-auto">
            <BrowserRouter>
               <TopBar />
               <div className=" flex text-center mx-auto p-5">
                  <Routes>
                     <Route path="/" element={<Home />} />
                  </Routes>
               </div>
            </BrowserRouter>
         </div>
      </main>
   );
}

export default App;
