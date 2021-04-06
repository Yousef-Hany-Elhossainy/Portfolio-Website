import React, { FunctionComponent } from 'react'
import { Iservice } from '../type'

const ServiceCard:FunctionComponent<{service:Iservice}> = ({service:{Icon,title,about},}) => {
    const createMarkup = () => {
        return{
            __html: about,
        }
    }
    return (
        <div className="flex items-center p-2 space-x-4">
            <Icon className="w-12 h-12 text-purple-600" />
            <div>
                <h5 className="font-bold">{title}</h5>
                <p dangerouslySetInnerHTML={createMarkup()} /> 
            </div>            
            
        </div>
    )
}

export default ServiceCard
