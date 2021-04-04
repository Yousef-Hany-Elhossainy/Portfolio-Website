import { IconType } from "react-icons";

export interface Iservice {
    Icon: IconType;
    title: string;
    about: string;
    
}

export interface ISkill{
    Icon: IconType;
    name: string;
    level: string;
       
}

export interface Iproject{
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    category: Category[];
    key_techs: string[];
}

export type Category = "React"|"Node"|"Express"|"Mongo"|"Python"|"Solidity"|"Flask"|"C++"|"Unreal"|"TypeScript"