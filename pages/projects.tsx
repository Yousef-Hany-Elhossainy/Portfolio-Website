import { motion } from "framer-motion";
import { useState } from "react";
import { FadeInUp, RouteFade, Stagger } from "../animations";
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { projects as projectsData } from "../data"
import { Category } from "../type";

const Projects = () => {
    const [projects, setprojects] = useState(projectsData);
    const [active, setactive] = useState("all");

    const handleProjectsFilter = (category:Category | "all") => {
        if(category === "all"){
            setprojects(projectsData);
            setactive(category);
            return;
        }
        const currentData = projectsData.filter(project => project.category.includes(category));
        setprojects(currentData);
        setactive(category);
    };
    return (
        <motion.div className="px-5 py-2 overflow-y-scroll" style={{height: '65vh'}}
        variants={RouteFade} initial = "initial" animate="animate"  exit="exit">
            <ProjectsNavbar handleProjectsFilter ={handleProjectsFilter} active ={active}/>
            <motion.div className="relative grid grid-cols-12 gap-4 my-3"
                variants={Stagger} initial = "initial" animate="animate">
            {
                projects.map(project =>(
                    <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                        variants = {FadeInUp}
                        key={project.name} >
                        <ProjectCard project={project} />


                            
                    </motion.div>                          
                ))
            }
            </motion.div>
        </motion.div>
    )
}

export default Projects
