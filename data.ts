import {RiComputerLine} from"react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Iproject, Iservice, ISkill } from "./type";
import{BsCircleFill} from "react-icons/bs";



export const services:Iservice[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
      },
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "handle database, server, api using <b>Express </b> & other popular frameworks",
      },
      {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
      },
      {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
      },
      {
        Icon: AiOutlineAntDesign,
        title: "UI/UX designer",
        about:
          "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
      },
      {
        Icon: RiComputerLine,
        title: "Whatever",
        about:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
      },
]

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: Iproject[] = [
  { 
    name: "Voice Controlled Budget Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/Voice-Powered-Budget-Tracker.png",
    deployed_url: "https://voice-powered-budget-tracker-app.netlify.app",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Python-Blockchain-App.git",
    category: ["React",],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Blockchain App",
    image_path: "/images/BlockchainApp.png",
    deployed_url: "https://voice-powered-budget-tracker-app.netlify.app",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Python-Blockchain-App.git",
    category: ["React"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },
  { 
    name: "Voice Controlled Budget Tracker2",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/Voice-Powered-Budget-Tracker.png",
    deployed_url: "https://voice-powered-budget-tracker-app.netlify.app",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Python-Blockchain-App.git",
    category: ["React","Node"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Blockchain App2",
    image_path: "/images/BlockchainApp.png",
    deployed_url: "https://voice-powered-budget-tracker-app.netlify.app",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Python-Blockchain-App.git",
    category: ["React","Django"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },
  { 
    name: "Voice Controlled Budget Tracker3",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/Voice-Powered-Budget-Tracker.png",
    deployed_url: "https://voice-powered-budget-tracker-app.netlify.app",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Python-Blockchain-App.git",
    category: ["Node",],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Blockchain App3",
    image_path: "/images/BlockchainApp.png",
    deployed_url: "https://voice-powered-budget-tracker-app.netlify.app",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Python-Blockchain-App.git",
    category: ["Django","Mongo"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },
  { 
    name: "Voice Controlled Budget Tracker4",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/Voice-Powered-Budget-Tracker.png",
    deployed_url: "https://voice-powered-budget-tracker-app.netlify.app",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Python-Blockchain-App.git",
    category: ["React","Mongo"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Blockchain App4",
    image_path: "/images/BlockchainApp.png",
    deployed_url: "https://voice-powered-budget-tracker-app.netlify.app",
    github_url: "https://github.com/Yousef-Hany-Elhossainy/Python-Blockchain-App.git",
    category: ["Python"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

];