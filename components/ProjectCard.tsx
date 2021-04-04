import React, { FunctionComponent } from 'react'
import { Iproject } from '../type'

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
    return (
        <div>
            <img src={image_path} alt={name} className="cursor-pointer"/>
            <p className="my-2 text-center">{name}</p>
        </div>
    )
}

export default ProjectCard
