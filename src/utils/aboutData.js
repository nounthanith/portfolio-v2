import androidStudio from "./../../public/logoTool/android-studio-icon.webp";
import vscode from "./../../public/logoTool/vscode.webp";
import docker from "./../../public/logoTool/docker.webp";
import git from "./../../public/logoTool/git.png";
import github from "./../../public/logoTool/github.png";
import postman from "./../../public/logoTool/postman-icon.webp";
import intellij from "./../../public/logoTool/intellij.png";


import laravel from "./../../public/logoSkill/Laravel.png";
import html from  "./../../public/logoSkill/html.png"
import nodejs from "./../../public/logoSkill/nodejs.png"
import react from "./../assets/react.svg"
import tailwind from "./../../public/logoSkill/tailwindcss.png"
import javascript from "./../../public/logoSkill/javascript.png"
import flutter from "./../../public/logoSkill/flutter.png"
import dart from "./../../public/logoSkill/dart.png"
import java from "./../../public/logoSkill/java.webp"
import cPlusPlus from "./../../public/logoSkill/c++.png"


const aboutData = {
  skills: [
    {name:"Laravel", image:laravel},
    {name:"HTML", image:html},
    {name:"Node JS", image:nodejs},
    {name:"React JS", image:react},
    {name:"Tailwind CSS", image:tailwind},
    {name:"JavaScript", image:javascript},
    {name:"Flutter", image:flutter},
    {name:"Dart", image:dart},
    {name:"Java", image:java},
    {name:"C++", image:cPlusPlus},
  ],
  tool:[
    {name:"Android Studio",image:androidStudio},
    {name:"VS Code",image:vscode},
    {name:"Git",image:git},
    {name:"GitHub",image:github},
    {name:"Docker",image:docker},
    {name:"IntelliJ",image:intellij},
    {name:"Postman",image:postman},
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2020-Present",
      description: "Developed modern web applications using React...",
    },
  ],
  bio: "I am a Junior Front-End Web Developer specializing in creating dynamic and user-friendly websites. My primary focus is on delivering engaging experiences that users enjoy. Currently, I am enhancing my skills in API integration and state management with Redux. I am eager to contribute to innovative projects and open to new job opportunities.",
};

export default aboutData;
