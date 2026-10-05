// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  JAVA = "java",
  PYTHON = "python",
  C = "c",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  POSTGRES = "postgres",
  DOCKER = "docker",
  LINUX = "linux",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Primary language for dynamic web development and interactivity.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 2,
    name: "java",
    label: "Java",
    shortDescription: "Data Structures & Algorithms practice and OOP programming fundamentals.",
    color: "#e76f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.REACT]: {
    id: 3,
    name: "react",
    label: "React",
    shortDescription: "Building modular, state-driven, modern single-page applications.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 4,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Asynchronous, event-driven runtime for backend services & APIs.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 5,
    name: "express",
    label: "Express.js",
    shortDescription: "Fast, unopinionated minimalist web framework for RESTful APIs.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 6,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL document database for flexible and scalable data persistence.",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.HTML]: {
    id: 7,
    name: "html",
    label: "HTML5",
    shortDescription: "Semantic, accessible, and structured markup for the modern web.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 8,
    name: "css",
    label: "CSS3",
    shortDescription: "Responsive styling, modern layouts with Flexbox & CSS Grid.",
    color: "#264de4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 9,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first CSS framework for rapid and clean UI development.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.PYTHON]: {
    id: 10,
    name: "python",
    label: "Python",
    shortDescription: "General-purpose scripting and AI/Data thinking foundations.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.C]: {
    id: 11,
    name: "c",
    label: "C",
    shortDescription: "Low-level programming concepts, memory management, and fundamentals.",
    color: "#a8b9cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git",
    shortDescription: "Version control system for tracking changes and managing codebases.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription: "Collaborative workflows, code hosting, and open-source contributions.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 14,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Production React framework with SSR, routing, and optimization.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TS]: {
    id: 15,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Type-safe JavaScript for robust and scalable web applications.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 16,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational database management and SQL fundamentals.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 17,
    name: "linux",
    label: "Linux & Shell",
    shortDescription: "Command-line navigation, scripting, and development environment.",
    color: "#fcc624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 18,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization fundamentals for consistent app environments.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "Present",
    title: "B.Tech in Computer Science & Engineering (AI)",
    company: "GIFT Autonomous College, Bhubaneswar",
    description: [
      "Currently in 2nd Year (3rd Semester) specializing in Artificial Intelligence.",
      "Gaining solid foundations in programming, computer science mathematics, algorithms, and data structures.",
      "Applying coursework and self-study to practical software engineering and modern web technologies.",
      "Combining AI specialization insights with full-stack development to build smart, scalable applications.",
    ],
    skills: [
      SkillNames.JAVA,
      SkillNames.JS,
      SkillNames.PYTHON,
      SkillNames.C,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "Present",
    title: "Full-Stack Web Development Journey",
    company: "Self-Directed & Project-Based Learning",
    description: [
      "Practicing a hands-on learning philosophy: Learn → Practice → Build → Debug → Improve.",
      "Building responsive frontend interfaces using HTML5, CSS3, JavaScript (ES6+), and React.",
      "Developing backend architectures, RESTful APIs, and middleware with Node.js and Express.js.",
      "Implementing database schemas, CRUD operations, and data models using MongoDB and Mongoose.",
    ],
    skills: [
      SkillNames.JS,
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.TAILWIND,
      SkillNames.HTML,
      SkillNames.CSS,
    ],
  },
  {
    id: 3,
    startDate: "2024",
    endDate: "Present",
    title: "Data Structures & Algorithms in Java",
    company: "Problem Solving & Core Foundations",
    description: [
      "Consistently solving algorithmic challenges in Java focusing on patterns and clean code.",
      "Covering core structures: Arrays, Strings, Recursion, Linked Lists, Stacks, Queues, Hashing, and Trees.",
      "Analyzing Time and Space complexity to write optimized and bug-free code.",
      "Preparing systematically for competitive technical interviews and software engineering internships.",
    ],
    skills: [
      SkillNames.JAVA,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

