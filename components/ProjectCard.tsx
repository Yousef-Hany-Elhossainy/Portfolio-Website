import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { Iproject } from '../type'
import Image from"next/image";
import { motion } from 'framer-motion';
import { FadeInUp, Stagger } from '../animations';


const ProjectCard:FunctionComponent<{
    project: Iproject;
}> = ({
    project:{
        name,
        description,
        image_path,
        deployed_url,
        github_url,
        category,
        key_techs,
    }
}) => {
    const [showDetail, setshowDetail] = useState(false);
    return (
        <div>
            <Image src={image_path} alt={name} 
            className="rounded-lg cursor-pointer" 
            onClick={()=>setshowDetail(true)}
            width="300"
            height="150"
            layout ="responsive"
            />
            {/* <img src={image_path} alt={name} 
            className="rounded-lg cursor-pointer" 
            onClick={()=>setshowDetail(true)}
            /> */}
            <p className="my-2 text-center">{name}</p>
            {showDetail && (            
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                    <motion.div variants ={Stagger} initial = "initial" animate="animate">
                    <motion.div variants ={FadeInUp} >
                    <Image src={image_path} alt={name} className="rounded-lg" width="300" height="150" layout ="responsive"/>
                    </motion.div>
                    <motion.div variants ={FadeInUp} className="flex justify-center my-4 space-x-3">
                        <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-lg dark:bg-dark-200">
                            <AiFillGithub /> <span>Github</span>
                        </a>
                        <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-lg dark:bg-dark-200">
                            <AiFillProject /> <span>Project</span>
                        </a>
                    </motion.div>
                    </motion.div>
                    <motion.div variants ={Stagger} initial = "initial" animate="animate">                        
                        <motion.h2 variants ={FadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
                        <motion.h3 variants ={FadeInUp} className="mb-3 font-medium">{description}</motion.h3>                       
                        <motion.div  variants ={FadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {
                                key_techs.map(tech=>(
                                <span key={tech}
                                className="px-2 py-1 my-1 bg-gray-200 rounded-lg dark:bg-dark-200"
                                >{tech}</span>))
                            }
                        </motion.div>
                    </motion.div>
                <button onClick={()=>setshowDetail(false)} className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
                    <MdClose size={30} />
                </button>
                </div>
            )}
        </div>
    )
}

export default ProjectCard
