import {RiComputerLine, RiReactjsFill} from"react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillGithub, AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Iproject, Iservice, ISkill } from "./type";
import{BsCircleFill} from "react-icons/bs";
import { GiMechanicGarage } from "react-icons/gi";
import {IoGameController, IoLogoJavascript, IoLogoNodejs, IoLogoPython} from "react-icons/io5";
import {DiNodejs} from "react-icons/di";
import {SiArduino, SiAutodesk, SiCplusplus, SiEthereum, SiFlask, SiGodotengine, SiUnrealengine} from "react-icons/si";


export const services:Iservice[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "Build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
      },
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "Build database, server, api using <b>Express </b>/<b>Flask</b> with <b>MongoDB</b>",
      },
      {
        Icon: AiOutlineAntDesign,
        title: "UI/UX designer",
        about:
          "Design a stunning user interface with animations using <b>Tailwind CSS</b>  & <b>Framer Motion</b> ",
      },
      {
        Icon: MdDeveloperMode,
        title: "Mobile App Development",
        about: "Develop an app with <b>React Native</b> for <b>Android</b>  and <b>IPhone</b> ",
      },
      {
        Icon: GiMechanicGarage,
        title: "Mechanical Design and Simulation",
        about:
          "Design, Modeling, and Simulation of functional parts/assemblies using <b>Fusion 360</b> ",
      },
      {
        Icon: IoGameController,
        title: "Game Development",
        about:
          "Make a game with <b>Unreal Engine</b> , <b>Godot Engine</b>, or <b>Pygame</b>",
      },
]

export const languages: ISkill[] = [
  {
    Icon: IoLogoPython,
    name: "Python",
    level: "100",
  },
  {
    Icon: IoLogoJavascript,
    name: "Java Script",
    level: "100",
  },
  {
    Icon: RiReactjsFill,
    name: "React",
    level: "100",
  },
  {
    Icon: RiReactjsFill,
    name: "React Native",
    level: "100",
  },  
  {
    Icon: IoLogoNodejs,
    name: "Express",
    level: "100",
  },
  {
    Icon: SiFlask,
    name: "Flask",
    level: "100",
  },
  {
    Icon: SiCplusplus,
    name: "C++",
    level: "100",
  },
  {
    Icon: SiEthereum,
    name: "Solidity",
    level: "100",
  },
];

export const tools: ISkill[] = [
  {
    Icon: SiAutodesk,
    name: "Autodesk Fusion 360",
    level: "100",
  },
  {
    Icon: AiFillGithub,
    name: "Git/Github",
    level: "100",
  },
  {
    Icon: SiUnrealengine,
    name: "Unreal Engine",
    level: "100",
  },
  {
    Icon: SiArduino,
    name: "Arduino/Raspberry Pi",
    level: "100",
  },
  {
    Icon: SiGodotengine,
    name: "Godot Engine",
    level: "100",
  },

  
];

export const projects: Iproject[] = [
  { 
    id: 1,
    name: "Voice Controlled Budget Tracker",
    description:
      "Add incomes and expenses manually or using voice commands, store them in local storage and display them on a chart.",
    image_path: "/images/Voice-Powered-Budget-Tracker.png",
    deployed_url: "https://voice-powered-budget-tracker-app.netlify.app",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Voice-Powered-Expense-Tracker-React-App.git",
    category: ["React",],
    key_techs: ["React","Material UI","Speechly Api"],
  },
  { 
    id: 2,
    name: "Blockchain App",
    image_path: "/images/BlockchainApp.png",
    deployed_url: "https://github.com/Yousef-Hany-Elhossainy/Python-Blockchain-App.git",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Python-Blockchain-App.git",
    category: ["Python", "Flask"],
    description:
      "A complete blockchain app with UI, wallets,block hashing, proof of work, consensus mechanism, and multiple nodes.",
    key_techs: ["Python","Flask" ],
  },
  { id: 3,
    name: "Ai Dino Game",
    description:
      "The browser dino game Played by A.I. or player control, Try to beat the A.I's high score!",
    image_path: "/images/AI-Dino-Game.png",
    deployed_url: "https://github.com/Yousef-Hany-Elhossainy/A.I.-Dino-Game.git",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/A.I.-Dino-Game.git",
    category: ["Python"],
    key_techs: ["Python", "N.E.A.T Python"],
  },
  { id: 4,
    name: "Javascript Snake Game",
    image_path: "/images/SnakeGame.png",
    deployed_url: "https://github.com/Yousef-Hany-Elhossainy/AI-Javascript-Snake-Game.git",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/AI-Javascript-Snake-Game.git",
    category: ["JavaScript"],
    description:
      "Snake game made in JavaScript, HTML, and css",
    key_techs: ["JavaScript","HTML","CSS"],
  },
  { 
    id: 5,
    name: "Python Minecraft Game",
    description:
      "A very simple minecraft style game using the Ursina Engine with Python.",
    image_path: "/images/MinecraftGame.png",
    deployed_url: "https://github.com/Yousef-Hany-Elhossainy/Minecraft-python-game.git",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Minecraft-python-game.git",
    category: ["Python",],
    key_techs: ["Python", "Ursina Engine",],
  },
  

];