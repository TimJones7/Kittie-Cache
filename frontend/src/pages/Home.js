import { useEffect, useState } from "react";

const Home = () => {
   const [projects, setProjects] = useState(null);

   useEffect(() => {
      const fetchProjects = async () => {
         const response = await fetch("http://localhost:4000/api/projects/");
         const json = await response.json();

         if (response.ok) {
            setProjects(json);
         }
      };
      fetchProjects();
   }, []);

   return (
      <div className=" border  p-4 ">
         <table className=" table-auto ">
            <thead>
               <tr className=" p-4 ">
                  <th className=" ">Title</th>
                  <th className=" ">Details</th>
                  <th className=" ">Due Date</th>
                  <th className=" ">isPublic</th>
               </tr>
            </thead>

            <tbody>
               {projects &&
                  projects.map((project) => (
                     <tr key={project._id}>
                        <td>{project.title}</td>
                        <td>{project.details}</td>
                        <td>{project.goalCompletionDate}</td>
                        <td>{project.isPublic.toString()}</td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
};

export default Home;
