import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
   const date = new Date();
   date.setDate(date.getDate() + 7);
   let navigate = useNavigate();
   const [title, setTitle] = useState("");
   const [details, setDetails] = useState("");
   const [isPublic, setPublic] = useState("false");
   const [goalCompletionDate, setGoalDate] = useState(date.toString());
   const [error, setError] = useState(null);

   const onChangeCB = (e) => {
      if (!e.target.checked) {
         setPublic("false");
      } else if (e.target.checked) {
         setPublic("true");
      }
      console.log(isPublic);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(isPublic.toString());
      const project = { title, details, isPublic, goalCompletionDate };

      const response = await fetch("http://localhost:4000/api/projects/", {
         method: "POST",
         body: JSON.stringify(project),
         headers: {
            "Content-Type": "application/json",
         },
      });
      const json = await response.json();

      if (!response.ok) {
         setError(json.error);
      }
      if (response.ok) {
         setTitle("");
         setDetails("");
         setPublic(false);
         setError(null);
         console.log("new project added", json);
         navigate("/");
      }
   };

   return (
      <div className="flex justify-center mt-10">
         <div className=" shadow-md border border-sitedarkgray rounded-lg  p-4 sm:p-6 lg:p-8 min-w-[300px]  ">
            {error && <div className="text-center text-red-700">{error}</div>}

            <form
               className="space-y-6 text-sitedarkgray"
               onSubmit={handleSubmit}
            >
               <h3 className="text-xl font-medium text-center ">
                  Create a Project
               </h3>
               <div>
                  <label className="text-sm font-medium ">Title</label>
                  <input
                     type="text"
                     onChange={(e) => setTitle(e.target.value)}
                     value={title}
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sitedarkgray dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     placeholder="Project Name"
                  />
               </div>
               <div>
                  <label className="text-sm font-medium block mb-2 ">
                     Project Details
                  </label>
                  <textarea
                     type="text"
                     onChange={(e) => setDetails(e.target.value)}
                     value={details}
                     placeholder="Details"
                     rows="5"
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sitedarkgray dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
               </div>
               <div className="flex items-start">
                  <div className="flex items-start">
                     <div className="flex items-center h-5">
                        <input
                           type="checkbox"
                           onChange={onChangeCB}
                           className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        />
                     </div>
                     <div className="text-sm ml-3">
                        <label className="font-medium">Public?</label>
                     </div>
                  </div>
               </div>
               <button
                  type="submit"
                  className="w-full text-white bg-siteblue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
               >
                  Publish Project
               </button>
               <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  <a
                     href="/"
                     className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                     Cancel
                  </a>
               </div>
            </form>
         </div>
      </div>
   );
};

export default CreateProject;
