import { useEffect, useState } from "react";

const Home = () => {
   const [projects, setProjects] = useState(null);

   useEffect(() => {
      const fetchProjects = async () => {
         const response = await fetch(
            //"http://172.104.25.184:1000/api-gateway/project"
            "http://localhost:1000/api-gateway/project"
         );
         const json = await response.json();

         if (response.ok) {
            setProjects(json);
         }
      };
      fetchProjects();
   }, []);

   return (
      <div className=" overflow-x-auto border dark:border-slate-700 p-2 ">
         <table className=" w-full ">
            <thead className="  dark:text-sitelightgray">
               <tr className=" p-2 dark:bg-slate-700 ">
                  <th scope="col" className="text-left p-4 font-medium ">
                     Title
                  </th>
                  <th scope="col" className="text-left p-4 font-medium ">
                     Details
                  </th>
                  <th scope="col" className="text-left p-4 font-medium ">
                     Due Date
                  </th>
                  <th scope="col" className="text-left p-4 font-medium ">
                     isPublic
                  </th>
                  <th scope="col" className="text-left p-4 font-medium "></th>
               </tr>
            </thead>

            <tbody>
               {projects &&
                  projects.map((project) => (
                     <tr key={project._id} className={tableRowStyles}>
                        <td className="p-4">{project.title}</td>

                        {project.details.length < 50 ? (
                           <td className="p-4">{project.details}</td>
                        ) : (
                           <td className="p-4">
                              {project.details.slice(0, 50)}...
                           </td>
                        )}

                        <td className="p-4">{project.goalCompletionDate}</td>
                        <td className="p-4">{project.isPublic.toString()}</td>
                        <td className="p-4">
                           <div>
                              <a
                                 type="button"
                                 href="/"
                                 class="p-1 "
                                 title="Edit"
                              >
                                 <img
                                    src="https://img.icons8.com/external-becris-lineal-becris/20/000000/external-edit-mintab-for-ios-becris-lineal-becris.png"
                                    alt="Edit"
                                 />
                              </a>

                              <a
                                 type="button"
                                 class="p-1 "
                                 href="/"
                                 title="DELETE!"
                              >
                                 <img
                                    src="https://img.icons8.com/external-others-inmotus-design/20/000000/external-Delete-check-others-inmotus-design.png"
                                    alt="Delete"
                                 />
                              </a>
                           </div>
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
};

export default Home;

const almostDone = "does it work???";

const tableRowStyles =
   "border-b dark:border-slate-700 dark:hover:bg-slate-500 hover:bg-slate-400 dark:text-sitelightgray";
