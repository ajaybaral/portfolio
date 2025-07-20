import NextJS from "./icons/technical/NextJS.astro";
import NodeJS from "./icons/technical/NodeJS.astro";
import ExpressJS from "./icons/technical/ExpressJS.astro";
import Typescript from "./icons/technical/Typescript.astro";
import MongoDB from "./icons/technical/MongoDB.astro";
import Redis from "./icons/technical/Redis.astro";
import Solidity from "./icons/technical/Solidity.astro";
import Devops from "./icons/technical/Devops.astro";
import Blockchain from "./icons/technical/Blockchain.astro";
import Solana from "./icons/technical/Solana.astro";
import Kubernetes from "./icons/technical/Kubernetes.astro";
import AstroIcon from "./icons/technical/AstroIcon.astro";
import Tailwind from "./icons/technical/Tailwind.astro";
import ReactJS from "./icons/technical/ReactJS.astro";
import Firebase from "./icons/technical/Firebase.astro";
import Bootstrap from "./icons/technical/Bootstrap.astro";
import Sass from "./icons/technical/Sass.astro";
import Javascript from "./icons/technical/Javascript.astro";
import Java from "./icons/technical/Java.astro";
import Python from "./icons/technical/Python.astro";
import OCI from "./icons/technical/OCI.astro";
import Oracle from "./icons/technical/Oracle.astro";
import Shell from "./icons/technical/Shell.astro";
import SQL from "./icons/technical/SQL.astro";
import CPP from "./icons/technical/CPP.astro";
import WebRTC from "./icons/technical/WebRTC.astro";
import Git from "./icons/tools/Git.astro";
import Postman from "./icons/tools/Postman.astro";
import Docker from "./icons/tools/Docker.astro";
import GitHubColor from "./icons/tools/GitHubColor.astro";
import GitLab from "./icons/tools/GitLab.astro";
import Vercel from "./icons/tools/Vercel.astro";
import VSCode from "./icons/tools/VSCode.astro";
import MacOS from "./icons/tools/macOS.astro";
import Rollup from "./icons/tools/Rollup.astro";
import SpringBoot from "./icons/technical/SpringBoot.astro";
import MySQL from "./icons/technical/MySQL.astro";
import RestAPI from "./icons/technical/RestAPI.astro";
import JWT from "./icons/technical/JWT.astro";
import OpenRouter from "./icons/technical/OpenRouter.astro";
import MaterialUI from "./icons/technical/MaterialUI.astro";
import FramerMotion from "./icons/technical/FramerMotion.astro";

const PROJECTTAGS = {
  NODE: {
    name: "Node.js",
    class: "bg-[#222222] text-white",
    icon: NodeJS,
  },
  EXPRESS: {
    name: "Express.js",
    class: "bg-[#323232] text-white",
    icon: ExpressJS,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#3178c661] text-white",
    icon: Typescript,
  },
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  REACT: {
    name: "React",
    class: "bg-[#23272f] text-white",
    icon: ReactJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-[#3f2c42] text-white",
    icon: Bootstrap,
  },
  SASS: {
    name: "SASS",
    class: "bg-[#6b717f] text-white",
    icon: Sass,
  },
  MONGODB: {
    name: "MongoDB",
    class: "bg-[#001e2b] text-white",
    icon: MongoDB,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#5e5e5e] text-white",
    icon: Firebase,
  },
  REDIS: {
    name: "Redis",
    class: "bg-[#636466] text-white",
    icon: Redis,
  },
  ROLLUP: {
    name: "Rollup",
    class: "bg-[#a6432c6e] text-white",
    icon: Rollup,
  },
  JAVA: {
    name: "Java",
    class: "bg-[#007396] text-white",
    icon: Java, // Add Java logo
  },
  SPRINGBOOT: {
    name: "Spring Boot",
    class: "bg-[#6DB33F] text-white",
    icon: SpringBoot, // Add Spring Boot logo
  },
  MYSQL: {
    name: "MySQL",
    class: "bg-[#00758F] text-white",
    icon: MySQL, // Add MySQL logo
  },
  RESTAPI: {
    name: "REST API",
    class: "bg-[#2f855a] text-white",
    icon: RestAPI, // Add REST API logo or icon
  },
  JWT: {
    name: "JWT",
    class: "bg-[#000000] text-white",
    icon: JWT, // Add JWT logo
  },
  OPENROUTER: {
    name: "OpenRouter API",
    class: "bg-[#4a5568] text-white",
    icon: OpenRouter, // Add logo if available
  },
  MATERIALUI: {
    name: "Material UI",
    class: "bg-[#007FFF] text-white",
    icon: MaterialUI, // Add Material UI logo
  },
  FRAMERMOTION: {
    name: "Framer Motion",
    class: "bg-[#0055FF] text-white",
    icon: FramerMotion, // Add Framer Motion logo
  },

  SOLIDITY: {
    name: "Solidity",
  },
  ETHEREUM: {
    name: "Ethereum",
  },
  METAMASK: {
    name: "MetaMask",
  },
  WEB3JS: {
    name: "Web3.js",
  },
  THIRDWEB: {
    name: "Thirdweb",
  },
};

const SKILLS = {
  JAVA: {
    name: "Java",
    icon: Java,
  },
  PYTHON: {
    name: "Python",
    icon: Python,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: Javascript,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: Typescript,
  },
  CPP: {
    name: "C++",
    icon: CPP,
  },
  SQL: {
    name: "SQL",
    icon: SQL,
  },
  OCI: {
    name: "Oracle Cloud",
    icon: OCI,
  },

  
  REACT: {
    name: "React",
    icon: ReactJS,
  },
  NEXT: {
    name: "Next.js",
    icon: NextJS,
  },
  
  NODE: {
    name: "Node.js",
    icon: NodeJS,
  },
  EXPRESS: {
    name: "Express.js",
    icon: ExpressJS,
  },
  SHELL: {
    name: "Shell",
    icon: Shell,
  },
  MONGODB: {
    name: "MongoDB",
    icon: MongoDB,
  },
  SpringBOOT:{
    name:"SpringBoot",
    icon:SpringBoot,
  },
  RestAPI:{
    name:"RestFul Api",
    icon:RestAPI,
  },
  REDIS: {
    name: "Redis",
    icon: Redis,
  },
  FIREBASE: {
    name: "Firebase",
    icon: Firebase,
  },
  ASTRO: {
    name: "Astro",
    icon: AstroIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: Tailwind,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  SASS: {
    name: "SASS",
    icon: Sass,
  },

  GIT: {
    name: "Git",
    icon: Git,
  },
  POSTMAN: {
    name: "Postman",
    icon: Postman,
  },
  DOCKER: {
    name: "Docker",
    icon: Docker,
  },
  APEX: {
    name: "APEX",
    icon: Oracle,
  },
  GITHUB: {
    name: "GitHub",
    icon: GitHubColor,
  },
  GITLAB: {
    name: "GitLab",
    icon: GitLab,
  },
  
  VERCEL: {
    name: "Vercel",
    icon: Vercel,
  },

  VSCODE: {
    name: "VSCode",
    icon: VSCode,
  },

  SOLIDITY: {
    name: "Solidity",
    icon: Solidity,
  },
  SOLANA: {
    name: "Solana",
    icon: Solana,
  },
  BLOCKCHAIN: {
    name: "Blockchain",
    icon: Blockchain,
  },
  DEVOPS: {
    name: "DevOps",
    icon: Devops,
  },
  KUBERNETES: {
    name: "Kubernetes",
    icon: Kubernetes,
  },
  WEBRTC:{
    name:"WebRTC",
    icon:WebRTC
  },
  OpenRouter:{
    name:"OpenRouter",
    icon:OpenRouter
  }

};

const NAVITEMS = [
  {
    title: "Experience",
    label: "experience",
    url: "/#experience",
  },
  {
    title: "Projects",
    label: "projects",
    url: "/#projects",
  },
  {
    title: "Skills",
    label: "skills",
    url: "/#skills",
  },
  {
    title: "About Me",
    label: "about-me",
    url: "/#about-me",
  },
  // {
  //   title: "Contact",
  //   label: "contact",
  //   url: "mailto:patelyashodhar012@gmail.com",
  // },
];

const EXPERIENCE = [
  {
    date: "December 2024 - January 2025",
    title: "Full Stack Intern",
    company: "Foofin Innovation",
    type: "Internship",
    description: [
      "Developed and maintained an E-Commerce Full Stack Website.",
      "Worked with Cloudinary for media storage and explored modern backend development practices using RESTful APIs.",
      "Created a comprehensive Postman automation suite, reducing testing time by 30% and enhancing efficiency in API functionality validation during development cycles.",
    ],
  },
  {
    date: "November 2024 - March 2025",
    title: "Software Development Intern",
    company: "Purpose Buddy",
    type: "Internship",
    description: [
      "Maintained the API collection for automation platform AutoAppy.",
      "Collaborated on feature development and task automation using platform-specific scripting.",
      "Worked on automation scripts for AutoAppy development.",
    ],
  },
  
];


const PROJECTS = [

  {
    title: "Codingpeer",
    subtitle: "Connecting Coders, Inspiring Innovation",
    description:
      "Codingpeer is a web application designed to connect developers and tech enthusiasts globally. Built with React.js and Firebase, it facilitates project collaboration, partner searching, and networking opportunities. Future plans include real-time chat, video conversations, and group creation features.",
    detail:
      "https://docs.google.com/document/d/1zLnrslIAHrNhGUnz19i4geDIjRlwXXubk9R3CR4d7cU/edit?usp=sharing",
    github: "https://github.com/ajaybaral/Codingpeer-master",
    link: "https://drive.google.com/file/d/1BxbLVTyq1De3nDqRJfWUqYiG6qCMNjgo/view",
    image: "/projects/codingpeer.webp",
    tags: [
      PROJECTTAGS.REACT,
      PROJECTTAGS.FIREBASE,
      PROJECTTAGS.BOOTSTRAP,
      PROJECTTAGS.SASS,
    ],
  },
  {
    title: "Society Finance Management System",
    subtitle: "Efficient Financial Management for Societies",
    
    description:
      "Built a full-stack finance management app using Spring Boot (Java) and React.js + Tailwind CSS. Designed secure JWT-authenticated REST APIs for role-based access control. Integrated MySQL for storing expenses, contributions, and member data. Implemented core modules: expense tracking, payment flagging, and audit-ready reports.",
    detail: "", // Add your project document or demo link
    github: "https://github.com/ajaybaral/Society_finance-spring_boot-", // Replace with your repo
    link: "", // Add live link if deployed
    image: "/projects/Society.png", // Replace with correct image
    tags: [
      PROJECTTAGS.JAVA,
      PROJECTTAGS.SPRINGBOOT,
      PROJECTTAGS.REACT,
      PROJECTTAGS.MYSQL,
      PROJECTTAGS.RESTAPI,
      PROJECTTAGS.JWT,
    ],
  },
  {
    title: "Constitutional AI Chatbot",
    subtitle: "AI-Powered Chat for Constitutional Queries",
    description:
      "Built an AI-powered chatbot using React (Material-UI) and Node.js/Express with MongoDB backend. Integrated Mistral-7B via OpenRouter API for intelligent chat and MongoDB text search for article-based responses. Implemented secure auth with Firebase Google OAuth, JWT sessions, and real-time user state monitoring. Designed responsive UI with chat bubbles, markdown, Framer Motion, and mobile-first layout.",
    detail: "", // Add project doc link
    github: "https://github.com/ajaybaral/Constitutional_Chatbot", // Replace with your repo
    link: "", // Add deployment link
    image: "/projects/Constitutional_AI.png", // Replace with correct image
    tags: [
      PROJECTTAGS.REACT,
      PROJECTTAGS.NODE,
      PROJECTTAGS.EXPRESS,
      PROJECTTAGS.MONGODB,
      PROJECTTAGS.FIREBASE,
      PROJECTTAGS.OPENROUTER,
    ],
  },
  
];

const SKILLSET = [
  {
    name: "Programming Languages",
    skills: [
      SKILLS.JAVA,
      SKILLS.PYTHON,
      SKILLS.JAVASCRIPT,
      SKILLS.TYPESCRIPT,
      SKILLS.SpringBOOT,
      SKILLS.SQL,
    ],
  },
  {
    name: "Technical",
    skills: [
     
      SKILLS.REACT,
      
      SKILLS.NODE,
      SKILLS.EXPRESS,
      SKILLS.SHELL,
      SKILLS.MONGODB,
      SKILLS.REDIS,
      SKILLS.RestAPI,
      SKILLS.OpenRouter,
      SKILLS.FIREBASE,
      SKILLS.ASTRO,
      SKILLS.TAILWIND,
      SKILLS.SASS,
      SKILLS.BOOTSTRAP
    ],
  },
  {
    name: "Tools",
    skills: [
      SKILLS.POSTMAN,
     
      SKILLS.GIT,
      SKILLS.GITHUB,
      SKILLS.GITLAB,

      SKILLS.VERCEL,

       SKILLS.VSCODE,
    ],
  },
  {
    name: "Currently Learning",
    skills: [
      SKILLS.SOLIDITY,
      SKILLS.BLOCKCHAIN,
      SKILLS.SOLANA,
      SKILLS.DEVOPS,
  
       SKILLS.WEBRTC,
    ],
  },
];

export { NAVITEMS, EXPERIENCE, PROJECTS, SKILLSET };
