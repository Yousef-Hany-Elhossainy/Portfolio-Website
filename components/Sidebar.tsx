import React from 'react'
import {AiFillGithub,AiFillLinkedin} from"react-icons/ai";
import {GoLocation} from"react-icons/go";
import {GiTie} from"react-icons/gi";

const Sidebar = () => {
    return (
        <div>
            <img src="https://badoystudio.com/wp-content/uploads/2018/11/apa-itu-programmer.jpeg" alt="My Avatar" 
            className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="my-4 font-medium tracking-wider text-3x1 font-kaushan ">
            <span className="text-green-400 ">Yousef </span>
                Elhossainy
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href ="" download="">
                <GiTie className="w-6 h-6"/>Download Resume</a>
            <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-700 md:w-full">
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
            <div className="py-4 my-5 bg-gray-200 " style = {{marginLeft:"-1rem", marginRight:"-1rem"}}>
               <div className="flex items-center justify-center space-x-2">
                <GoLocation />
                <span>Cairo,Egypt</span>
               </div>                
                <p className="my-2">yousefhany@pm.me</p>
            </div>
            
            <button className="w-8/12 px-5 py-2 my-2 rounded-full text-green bg-gradient-to-r from-purple-800 to-blue-700 focus:outline-none"
            onClick={() =>window.open('mailto:yousefhany@pm.me')} >Email Me</button>
            <button className="w-8/12 px-5 py-2 my-2 rounded-full text-green bg-gradient-to-r from-purple-800 to-blue-700 focus:outline-none">Toggle Theme</button>
        </div>
    )
}

export default Sidebar
