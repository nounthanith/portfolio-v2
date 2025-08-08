const skillExperience = [
    {
        name: "HTML",
        experience: 90,
        category: "frontend"
    },
    {
        name: "CSS",
        experience: 75,
        category: "frontend"
    },
    {
        name: "JavaScript",
        experience: 80,
        category: "frontend"
    },
    {
        name: "React",
        experience: 80,
        category: "frontend"
    },
    {
        name: "Node.js",
        experience: 75,
        category: "backend"
    },
    {
        name: "Express",
        experience: 70,
        category: "backend"
    },
    {
        name: "MongoDB",
        experience: 70,
        category: "database"
    },
    {
        name: "SQL",
        experience: 75,
        category: "database"
    },
    {
        name: "Git",
        experience: 80,
        category: "tools"
    },
    {
        name: "Docker",
        experience: 65,
        category: "devops"
    },
    {
        name: "Dart",
        experience: 60,
        category: "frontend"
    },
    {
        name: "Flutter",
        experience: 60,
        category: "frontend"
    },
    {
        name: "VSCode",
        experience: 80,
        category: "tools"
    },
    {
        name: "Android Studio",
        experience: 60,
        category: "tools"
    },
    {
        name: "Java",
        experience: 80,
        category: "backend"
    },
    {
        name: "C++",
        experience: 80,
        category: "backend"
    },
    {
        name: "Intellij",
        experience: 80,
        category: "tools"
    },
    {
        name: ".Net",
        experience: 80,
        category: "backend"
    },
    {
        name: "Laravel",
        experience: 80,
        category: "backend"
    },
    {
        name: "Ubuntu",
        experience: 80,
        category: "tools"
    },
    {
        name: "TypeScript",
        experience: 80,
        category: "frontend"
    },
    {
        name: "React Native",
        experience: 75,
        category: "frontend"
    },
];

// Get all unique categories
const categories = [...new Set(skillExperience.map(skill => skill.category))];

export { skillExperience, categories };

export default skillExperience
