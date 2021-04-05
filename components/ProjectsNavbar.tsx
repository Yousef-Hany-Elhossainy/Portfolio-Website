import React, { FunctionComponent } from 'react'
import { Category } from '../type'

export const NavItem:FunctionComponent<{
    value:Category | "all";
    handleProjectsFilter:Function;
    active:string
}> = ({
    value,handleProjectsFilter,active
}) => {
    let className = "capitalize cursor-pointer hover:text-green-400";
    if (active === value) className += " text-green-400";
    return (
        <li className={className} onClick={() => handleProjectsFilter(value)} key={value}>{value}</li>
    )
}


const ProjectsNavbar:FunctionComponent<{handleProjectsFilter:Function ; active:string;}> = (props) => {
    return (
        <div className="flex py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="all" {...props}/>
            <NavItem value="React" {...props}/>
            <NavItem value="Mongo" {...props}/>
            <NavItem value="Django" {...props}/>
            <NavItem value="Node" {...props}/>
        </div>
    )
}

export default ProjectsNavbar
