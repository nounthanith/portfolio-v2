import androidStudio from "./../../public/logo/android-studio-icon.webp";
import vscode from "./../../public/logo/vscode.webp";
import docker from "./../../public/logo/docker.webp";
import git from "./../../public/logo/git.png";
import github from "./../../public/logo/github.png";
// import postman from "./../../public/logo/postman.png";
import intellij from "./../../public/logo/intellij.png";


const aboutData = {
  skills: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Tailwind CSS", "Mongo", "C++", "Java", "Laravel", "MySQL", "Dart", "Flutter", "Laravel", "Sanctum", "Sqlite", "Getx",],
  tool:[
    {name:"Android Studio",image:androidStudio},
    {name:"VS Code",image:vscode},
    {name:"Git",image:git},
    {name:"GitHub",image:github},
    {name:"Docker",image:docker},
    {name:"IntelliJ",image:intellij},
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
