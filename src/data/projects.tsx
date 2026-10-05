import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SiThreedotjs } from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Live Demo
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Source Code
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "portfolio",
    category: "3D Web Experience",
    title: "3D Developer Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.motion,
        PROJECT_SKILLS.spline,
      ],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://biswajitbiswal.dev",
    github: "https://github.com/biswajitbiswal",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A state-of-the-art interactive 3D personal portfolio website.
          </TypographyP>
          <TypographyP className="font-mono">
            Designed to stand out with immersive 3D elements, smooth physics-based
            scrolling with Lenis, fluid GSAP scroll interactions, and responsive
            glassmorphism. Highlights my technical skills, learning roadmap, and full-stack projects.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Interactive 3D Elements</TypographyH3>
          <p className="font-mono mb-2">
            Integrated Spline 3D canvas and dynamic GSAP scroll triggers that bring
            the UI to life with smooth key press animations, particle backgrounds, and dark/light modes.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Modern Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with Next.js App Router, Tailwind CSS, TypeScript, and Motion.
            Engineered with strict performance profiling, preloading, and accessibility fallbacks.
          </p>
        </div>
      );
    },
  },
  {
    id: "kanbi",
    category: "Full-Stack MERN",
    title: "Task & Project Manager",
    src: "/assets/projects-screenshots/kanbi/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    github: "https://github.com/biswajitbiswal",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Collaborative task and board management platform built on MERN.
          </TypographyP>
          <TypographyP className="font-mono">
            A full-featured productivity app featuring JWT authentication, role-based
            access control, dynamic Kanban boards, custom status tags, and MongoDB schema relationships.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Capabilities</TypographyH3>
          <ul className="list-disc list-inside font-mono text-sm space-y-1 mb-4">
            <li>Secure User Authentication &amp; Session Handling</li>
            <li>Interactive Drag-and-Drop Task Status Columns</li>
            <li>RESTful API Endpoints with Express.js and Mongoose validation</li>
            <li>Detailed Task Filtering, Search, and Priority Tags</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/kanbi/landing.png`,
              `${BASE_PATH}/kanbi/theme.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "storekit",
    category: "Full-Stack MERN",
    title: "E-Commerce Application",
    src: "/assets/projects-screenshots/storekit/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    github: "https://github.com/biswajitbiswal",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-stack online shopping and order management platform.
          </TypographyP>
          <TypographyP className="font-mono">
            Engineered with a clean MERN architecture covering product catalogs, multi-item carts,
            checkout workflows, user order history, and administrative inventory controls.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Architecture &amp; Features</TypographyH3>
          <p className="font-mono mb-2">
            Structured with modular Express routes, Mongoose models with validation, protected order
            endpoints, and responsive UI components built with React and Tailwind CSS.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/storekit/landing.png`,
              `${BASE_PATH}/storekit/orders.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "codingducks",
    category: "React & API Integration",
    title: "Movie & Recipe Explorer",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.node],
    },
    live: "#",
    github: "https://github.com/biswajitbiswal",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Interactive content discovery application consuming third-party REST APIs.
          </TypographyP>
          <TypographyP className="font-mono">
            A responsive React application featuring debounced search inputs, category filter pills,
            modal ingredient/cast breakdowns, and persistent local storage bookmarking.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">React Best Practices</TypographyH3>
          <p className="font-mono mb-2">
            Built using custom hooks for data fetching, caching, error handling boundaries,
            and optimized re-rendering with modern React state primitives.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/landing.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "peakposts",
    category: "JavaScript & Async API",
    title: "Weather & Forecast App",
    src: "/assets/projects-screenshots/peakposts/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.node],
    },
    live: "#",
    github: "https://github.com/biswajitbiswal",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time weather intelligence and multi-day forecasting.
          </TypographyP>
          <TypographyP className="font-mono">
            Built with modern JavaScript (ES6+), async/await, Geolocation API, and OpenWeather REST API.
            Renders dynamic temperature charts, humidity indicators, and weather condition animations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Core Learnings</TypographyH3>
          <p className="font-mono mb-2">
            Reinforces deep understanding of asynchronous JavaScript, event handling, error handling for
            network latency, and fluid DOM updates.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/peakposts/landing.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "gumbalup",
    category: "React & State Management",
    title: "Smart Expense Tracker",
    src: "/assets/projects-screenshots/gumbalup/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.node],
    },
    live: "#",
    github: "https://github.com/biswajitbiswal",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Personal finance manager with real-time budget tracking &amp; charts.
          </TypographyP>
          <TypographyP className="font-mono">
            An intuitive expense tracker designed to monitor daily income and spending,
            categorize transactions, calculate monthly savings, and display visual breakdown charts.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Features &amp; Implementation</TypographyH3>
          <p className="font-mono mb-2">
            Implemented clean React state management with hooks, custom filters by date &amp; category,
            form validation, and exportable financial summaries.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/gumbalup/landing.png`,
            ]}
          />
        </div>
      );
    },
  },
];

export default projects;
