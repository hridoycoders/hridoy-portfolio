import SKILLS from "@/assets/skills";

// Type definition
export interface ISkill {
  name: string;
  description: string;
  icon: ImageMetadata;
  link: string;
}

// Web Fundamentals & Languages
export const WebLanguagesStack = [
  {
    name: "HTML",
    description: "Markup language for creating web page structure.",
    icon: SKILLS.HtmlIcon,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    description: "Stylesheet language for designing web pages.",
    icon: SKILLS.CssIcon,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    description: "Programming language for interactive web applications.",
    icon: SKILLS.JsIcon,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    description: "JavaScript with static typing.",
    icon: SKILLS.TsIcon,
    link: "https://www.typescriptlang.org/",
  },
] as const;

// Frontend & UI
export const FrontendLibrariesStack = [
  {
    name: "React.js",
    description: "Library for building component-based user interfaces.",
    icon: SKILLS.ReactIcon,
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    description: "React framework for building web applications.",
    icon: SKILLS.NextIcon,
    link: "https://nextjs.org/",
  },
  {
    name: "Astro",
    description: "Web framework for building fast websites.",
    icon: SKILLS.AstroIcon,
    link: "https://astro.build/",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework.",
    icon: SKILLS.TailwindIcon,
    link: "https://tailwindcss.com/",
  },
] as const;

// Backend & APIs
export const BackendApisStack = [
  {
    name: "Node.js",
    description: "JavaScript runtime for server-side development.",
    icon: SKILLS.NodeIcon,
    link: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    description:
      "Minimal Node.js framework for building web applications and APIs.",
    icon: SKILLS.ExpressIcon,
    link: "https://expressjs.com/",
  },
  {
    name: "REST API",
    description: "Architecture for communication between applications.",
    icon: SKILLS.RestApiIcon,
    link: "https://restfulapi.net/",
  },
  {
    name: "Firebase",
    description: "Platform providing backend services for applications.",
    icon: SKILLS.FirebaseIcon,
    link: "https://firebase.google.com/",
  },
] as const;

// Databases & Storage
export const DatabaseStack = [
  {
    name: "MongoDB",
    description: "NoSQL database for storing application data.",
    icon: SKILLS.MongoIcon,
    link: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    description: "Relational database management system.",
    icon: SKILLS.MysqlIcon,
    link: "https://www.mysql.com/",
  },
] as const;

// Deployment & Hosting
export const CloudDevOpsStack = [
  {
    name: "Netlify",
    description: "Platform for deploying and hosting web projects.",
    icon: SKILLS.NetlifyIcon,
    link: "https://www.netlify.com/",
  },
  {
    name: "Vercel",
    description: "Platform for deploying modern web applications.",
    icon: SKILLS.VercelIcon,
    link: "https://vercel.com/",
  },
] as const;

// Development Tools
export const ToolingTestingStack = [
  {
    name: "Git",
    description: "Version control system for tracking code changes.",
    icon: SKILLS.GitIcon,
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    description: "Platform for hosting and managing code repositories.",
    icon: SKILLS.GithubIcon,
    link: "https://github.com/",
  },
  {
    name: "npm",
    description: "Package manager for JavaScript.",
    icon: SKILLS.NpmIcon,
    link: "https://www.npmjs.com/",
  },
  {
    name: "Postman",
    description: "Tool for testing and working with APIs.",
    icon: SKILLS.PostmanIcon,
    link: "https://www.postman.com/",
  },
] as const;

// Configuration
export const ConfigTemplatingStack = [
  {
    name: "JSON",
    description: "Lightweight format for storing and exchanging data.",
    icon: SKILLS.JsonIcon,
    link: "https://www.json.org/",
  },
  {
    name: "Markdown",
    description: "Lightweight markup language for documentation.",
    icon: SKILLS.MarkdownIcon,
    link: "https://www.markdownguide.org/",
  },
] as const;

// IDE & Design Tools
export const IdesDesignStack = [
  {
    name: "VS Code",
    description: "Code editor for web development.",
    icon: SKILLS.VsCodeIcon,
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Figma",
    description: "Collaborative interface design and prototyping tool.",
    icon: SKILLS.FigmaIcon,
    link: "https://www.figma.com/",
  },
] as const;

export default {
  WebLanguagesStack,
  FrontendLibrariesStack,
  BackendApisStack,
  DatabaseStack,
  CloudDevOpsStack,
  ToolingTestingStack,
  ConfigTemplatingStack,
  IdesDesignStack,
};
