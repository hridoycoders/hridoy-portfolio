import { Avatar_180, Avatar_250 } from "@assets/images";

// Importing SVGs as raw strings
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import InstagramIconRaw from "@assets/SVGs/Instagram.svg?raw";
import GoogleIconRaw from "@assets/SVGs/Google.svg?raw";
import DiscordIconRaw from "@assets/SVGs/Discord.svg?raw";

import { LogoIcon } from "@/assets/SVGs";
import { ThemeOptions } from "../../scripts/generateThemes";

// Theme Configuration
export const themeConfig = ThemeOptions.DEFAULT;

// Site Configuration
export const siteConfig = {
  title: "Hridoy Ahmed | Aspiring Full Stack Developer",
  description:
    "Hridoy Ahmed is an aspiring Full Stack Developer and CST student at Bogura Polytechnic Institute, Bangladesh.",
  canonical: "https://hridoy-portfolio.vercel.app/",
  googleSiteVerification: "",
  keywords:
    "Hridoy Ahmed, Aspiring Full Stack Developer, Frontend Developer, Backend Developer, Web Developer, JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS, Bangladesh",
  avatar: "/hridoy.jpg",
  siteUrl: "https://hridoy-portfolio.vercel.app/",
};

// Header Section
export const headerConfig = {
  logotext: "Portfolio",
  actionButton: {
    text: "Resume",
    url: "#", // use full URL or Public Folder path
  },
};

// Hero Section
export const heroConfig = {
  salutation: "Hi 👋 My name is",
  firstName: "Hridoy",
  lastName: "Ahmed",
  position: "Aspiring Full Stack Developer",
  tagLine: {
    prefixText: "I build",
    highlightedText: "Modern Web Apps",
    suffixText: "with creativity and passion.",
  },
  avatar: Avatar_180,
  links: [
    {
      label: "GitHub",
      url: "https://github.com/hridoycoders",
      icon: GithubIconRaw,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/hridoy-ahmed1/",
      icon: LinkedinIconRaw,
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/hridoy_ahmed_noor/",
      icon: InstagramIconRaw,
    },
    {
      label: "Google Search",
      url: "https://www.google.com/search?q=Hridoy+Ahmed",
      icon: GoogleIconRaw,
    },
  ],
};

// About Section
export const aboutConfig = {
  aboutAvatar: Avatar_250,
  description: [
    "Hey there! 👋 I'm Hridoy Ahmed, a CST student at Bogura Polytechnic Institute and an aspiring Full Stack Developer.",
    "I'm passionate about building modern, responsive, and user-friendly web applications. I enjoy learning new technologies and turning creative ideas into real-world projects.",
    "Currently, I'm learning Frontend Development with HTML, CSS, JavaScript, TypeScript, React, and Next.js while exploring Backend Development.",
    "My goal is to become a skilled Full Stack Developer, build meaningful digital experiences, and keep growing as a developer.",
  ],
};

// Footer Section
export const footerConfig = {
  logo: LogoIcon,
  title: "Hridoy Ahmed | Portfolio.",
  links: [
    {
      label: "GitHub",
      url: "https://github.com/hridoycoders",
      icon: GithubIconRaw,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/hridoy-ahmed1/",
      icon: LinkedinIconRaw,
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/hridoy_ahmed_noor/",
      icon: InstagramIconRaw,
    },
    {
      label: "Discord",
      url: "https://discordapp.com/users/1533131338415079533",
      icon: DiscordIconRaw,
    },
    {
      label: "Google Search",
      url: "https://www.google.com/search?q=Hridoy+Ahmed",
      icon: GoogleIconRaw,
    },
  ],
  copyrightText: "© Copyright 2026 Hridoy Ahmed",
};
