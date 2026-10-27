import LOGOS from "@assets/Logos"
import SCREENSHOTS from "@assets/Shots"
import MOCKUPS from "@assets/Mockup"
import SKILL_STACK from "@/constants/skillStack";
import { buildTechStack } from "@/utils/commonUtils";

//#region Types
/**
 * Projects List Type Definition
 * This interface defines the structure and types of properties for each project in the projects list.
 * It ensures consistency and type safety when working with project data throughout the application.
 * Each project includes details such as name, description, technologies used, features, and links.
 */
export interface IProject {
    isHidden: boolean;

    name: string;
    shortDescription: string;
    description: string;

    logoImage: ImageMetadata;
    previewImage: ImageMetadata;
    deviceMockupImage: ImageMetadata;

    theme: string;
    status: "completed" | "development";

    liveUrl: string;
    sourceUrl: string;

    demoCredentials?: {
        email: string;
        password: string;
    };

    technologies: {
        title: string;
        description: string;
        icon: ImageMetadata;
    }[];

    features: {
        title: string;
        description: string;
    }[];

    logoSize: number;

    versions: {
        title: string;
        version: string;
        url: string;
    }[];
}

/**
 * Technology Stack Type Definition
 * This interface defines the structure and types of properties for each technology in the tech stack.
 */
export interface ITechStack {
    title: string;
    description: string;
    icon: ImageMetadata;
}
//#endregion


//#region Tech Stack
export const TECH_STACK = {
    // Web Fundamentals & Languages
    ...buildTechStack(SKILL_STACK.WebLanguagesStack),

    // Frontend & UI Libraries
    ...buildTechStack(SKILL_STACK.FrontendLibrariesStack),

    // Backend & APIs
    ...buildTechStack(SKILL_STACK.BackendApisStack),

    // Databases, Caching & ORM
    ...buildTechStack(SKILL_STACK.DatabaseStack),

    // Cloud, Storage & DevOps
    ...buildTechStack(SKILL_STACK.CloudDevOpsStack),

    // Tooling, Testing & Observability
    ...buildTechStack(SKILL_STACK.ToolingTestingStack),

    // Configuration & Templating
    ...buildTechStack(SKILL_STACK.ConfigTemplatingStack),

    // IDEs & Design Tools
    ...buildTechStack(SKILL_STACK.IdesDesignStack),
};
//#endregion


//#region COMMON_FEATURES
/**
 * Common Features used across multiple projects
 * This object defines features that are commonly implemented in various projects.
 * Each feature includes a title and description to provide a clear understanding of its purpose.
 * These features can be easily referenced and reused in project configurations to maintain consistency and reduce redundancy.
 * To add a new common feature, simply create a new property in the COMMON_FEATURES object with the appropriate title and description.
 */
const COMMON_FEATURES = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}
//#endregion


//#region Template
// {
//     isHidden: false,
//     name:"TITLE",
//     shortDescription:"SHORT_DESCRIPTION",
//     description:"DESCRIPTION",
//     logoImage:LOGO_URL,
//     previewImage:Screenshots.SCREENSHOT_URL,
//     deviceMockupImage:MockupImages.MOCKUP_URL,
//     theme:"PROJECT_THEME_COLOR_HEX",
//     status:"completed OR development",
//     liveUrl:"PROJECT_URL",
//     sourceUrl:"GITHUB_URL",
//     Demo?: {
//         email: "DEMO_EMAIL",
//         password: "DEMO_PASSWORD"
//     },
//     technologies:[TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     logoSize:50,
//     versions: [{
//         title: "PREV_PROJECT_TITLE",
//         version: "VERSION_NO"
//     }]
// },
//#endregion Template


//#region Projects List
/**
 * Projects List Configuration
 * This file contains an array of project objects, each representing a project with its details.
 * Each project object includes properties such as name, description, technologies used, features, and links.
 * The projects are organized in a structured format for easy access and management.
 * To add a new project, simply create a new object following the existing structure and append it to the PROJECTS_LIST array.
 * Make sure to import any necessary assets or icons at the top of this file.
 */
export const PROJECTS_LIST: IProject[] = [
  {
    isHidden: false,
    name: "Bazar Dor",
    shortDescription:
      "A modern marketplace platform to explore products, browse categories, and compare market prices.",
    description:
      "Bazar Dor is a responsive marketplace platform built with Next.js. Users can explore products across different categories, view product details, and sort products by price. The application provides a clean interface and a smooth browsing experience across devices.",
    logoImage: LOGOS.Bazardorlogo,
    previewImage: SCREENSHOTS.Bazardorscreen,
    deviceMockupImage: MOCKUPS.Bazardormock,
    theme: "#090b0b",
    status: "completed",
    liveUrl: "https://bazar-dor-market.vercel.app/",
    sourceUrl: "https://github.com/hridoycoders/bazar-dor",

    technologies: [
      TECH_STACK.Nextjs,
      TECH_STACK.TypeScript,
      TECH_STACK.TailwindCSS,
      TECH_STACK.MongoDB,
    ],

    features: [
      {
        title: "Product Categories",
        description:
          "Browse products through different categories such as rice, lentils, oil, vegetables, fish, and more.",
      },
      {
        title: "Price Sorting",
        description: "Sort products by price from low to high or high to low.",
      },
      {
        title: "Product Details",
        description: "View detailed information about individual products.",
      },
      {
        title: "API Integration",
        description: "Fetch product and category data from the backend API.",
      },
      COMMON_FEATURES.Responsive,
      COMMON_FEATURES.SEO,
    ],

    logoSize: 50,
    versions: [],
  },

  {
    isHidden: false,
    name: "Fit-Log",
    shortDescription:
      "A workout planning application to organize and manage personal fitness routines.",
    description:
      "Fit-Log helps users explore workouts, save their favourite exercises, and create personalized workout plans.",
    logoImage: LOGOS.Fitloglogo,
    previewImage: SCREENSHOTS.Fitlogscreen,
    deviceMockupImage: MOCKUPS.Fitlogmockup,
    theme: "dark",
    status: "completed",
    liveUrl: "https://fit-log-workout.vercel.app/",
    sourceUrl: "https://github.com/hridoycoders/fit-log",
    technologies: [
      TECH_STACK.Nextjs,
      TECH_STACK.TypeScript,
      TECH_STACK.TailwindCSS,
    ],
    features: [
      {
        title: "Workout Plans",
        description: "Create and manage workout plans.",
      },
      {
        title: "Saved Workouts",
        description: "Save workouts for quick access.",
      },
      {
        title: "Local Storage",
        description: "Keep saved plans available in the browser.",
      },
      COMMON_FEATURES.Responsive,
    ],
    logoSize: 80,
    versions: [],
  },

  {
    isHidden: false,
    name: "DevStack",
    shortDescription:
      "A developer technology directory to explore modern web development tools and technologies.",
    description:
      "DevStack is a responsive developer technology directory built with React. It helps developers explore different technologies, discover useful tools, and manage their selected tech stack through an interactive interface.",
    logoImage: LOGOS.Devstacklogo,
    previewImage: SCREENSHOTS.Devstackscreen,
    deviceMockupImage: MOCKUPS.Devstackmock,
    theme: "#090b0b",
    status: "completed",
    liveUrl: "https://devstack-pher.netlify.app/",
    sourceUrl: "https://github.com/hridoycoders/DevStack-pHero",

    technologies: [
      TECH_STACK.Reactjs,
      TECH_STACK.JavaScript,
      TECH_STACK.TailwindCSS,
    ],

    features: [
      {
        title: "Technology Directory",
        description: "Explore different web development technologies.",
      },
      {
        title: "Interactive Selection",
        description:
          "Select and manage technologies through an interactive interface.",
      },
      {
        title: "Responsive Design",
        description:
          "Enjoy a consistent experience across different screen sizes.",
      },
      {
        title: "Toast Notifications",
        description:
          "Get feedback through toast notifications when performing actions.",
      },
      COMMON_FEATURES.Responsive,
    ],

    logoSize: 60,
    versions: [],
  },
];
//#endregion Projects List
