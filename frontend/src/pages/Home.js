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
      <div className="flex flex-col bg-base-100 text-center">
         {projects &&
            projects.map((project) => (
               <div key={project._id} className="p-4 m-2 border ">
                  <div className="flex flex-col">
                     <div>
                        <b>Id: </b> {project._id}
                     </div>
                     <div>
                        <b>Title: </b> {project.title}
                     </div>
                     <div>
                        <b>Details: </b> {project.details}
                     </div>
                     <div>
                        <b>Created: </b> {project.createdAt}
                     </div>
                  </div>
               </div>
            ))}
      </div>
   );
};

export default Home;
