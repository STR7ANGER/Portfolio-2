/**
 * Single source of truth for everything SEO-related: canonical URL, metadata
 * copy, social handles, and the data that feeds the JSON-LD graph.
 */

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://adityamaurya.net"
).replace(/\/$/, "")

export const siteConfig = {
  name: "Aditya Maurya",
  jobTitle: "Full-Stack Developer",
  url: siteUrl,
  locale: "en_US",
  email: "adityamaurya.2807@gmail.com",
  phone: "+91-8602019492",
  resume: "/Aditya-Maurya-Resume.pdf",

  title: "Aditya Maurya — Full-Stack Developer & Cloud Engineer",
  shortTitle: "Aditya Maurya",
  titleTemplate: "%s | Aditya Maurya",

  description:
    "Aditya Maurya is a full-stack developer and cloud engineer building production web apps with Next.js, Node.js, .NET, and AWS. Explore his projects, work experience, technical stack, and DSA profile.",

  // Used for OG/Twitter cards where a shorter, punchier line reads better.
  tagline:
    "Full-stack developer building clean products, strong backends, and scalable cloud systems.",

  keywords: [
    "Aditya Maurya",
    "Aditya Maurya portfolio",
    "full stack developer",
    "full stack developer India",
    "software engineer portfolio",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "TypeScript developer",
    ".NET developer",
    "NestJS",
    "cloud engineer",
    "AI engineer",
    "reinforcement learning",
    "PyTorch",
    "AWS",
    "Azure",
    "Kubernetes",
    "Docker",
    "PostgreSQL",
    "backend developer",
    "Bennett University",
    "DSA",
    "LeetCode",
    "STR7ANGER",
  ],

  socials: {
    github: "https://github.com/STR7ANGER",
    linkedin: "https://www.linkedin.com/in/adimaurya",
    x: "https://x.com/AdI0_0I",
    instagram: "https://www.instagram.com/_.strange.0_0",
    leetcode: "https://leetcode.com/u/Xiafloxy/",
    codolio: "https://codolio.com/profile/Xifloxy",
  },

  twitterHandle: "@AdI0_0I",

  knowsAbout: [
    "Full-Stack Development",
    "Web Development",
    "Cloud Computing",
    "System Design",
    "Distributed Systems",
    "Reinforcement Learning",
    "Machine Learning",
    "PyTorch",
    "Data Structures and Algorithms",
    "Next.js",
    "React",
    "Node.js",
    "NestJS",
    "TypeScript",
    ".NET",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "CI/CD",
  ],
} as const

/**
 * Projects rendered in the Projects section and mirrored into the JSON-LD
 * ItemList. `name`/`description` are the on-screen copy — keep them short so
 * the cards stay the same height; `seoDescription` is the longer, keyword-rich
 * variant used only in structured data, where length costs nothing.
 */
export const seoProjects = [
  {
    name: "Taskmorpher",
    description: "Productivity workspace with task tracking and collaboration.",
    seoDescription:
      "Task and project management platform built with Next.js and Supabase, featuring real-time collaboration, rich-text editing, and analytics dashboards.",
    url: "https://task-morpher.vercel.app/",
    repo: "https://github.com/STR7ANGER/TaskMorpher",
    image: "/taskmorpher.png",
  },
  {
    name: "Job Portal",
    description:
      "Job listing and hiring workflow platform for recruiters and candidates.",
    seoDescription:
      "Job listing and hiring workflow platform connecting recruiters and candidates, with search, applications, and listing management.",
    url: "https://job-portal-green-nu.vercel.app/",
    repo: "https://github.com/STR7ANGER/JOB-PORTAL",
    image: "/jobprotal.png",
  },
  {
    name: "Virtual Venture",
    description:
      "Virtual business and trading simulator with live-style interactions.",
    seoDescription:
      "Trading simulator with a Node.js backend modelling 1,000+ symbols and real-time portfolio tracking for 300+ test traders.",
    url: "https://virtual-ventures.netlify.app/",
    repo: "https://github.com/STR7ANGER/Virtual_Ventures",
    image: "/virtualventure.png",
  },
  {
    name: "Tech UI",
    description:
      "Reusable UI components and design system for modern web apps.",
    seoDescription:
      "Plug-and-play React UI component library and design system, reused across 20+ projects for fast, consistent interfaces.",
    url: "https://astonishing-arithmetic-d5066a.netlify.app/",
    repo: "https://github.com/STR7ANGER/UI_Library",
    image: "/techui.png",
  },
  {
    name: "Learning Habits",
    description:
      "Learning tracker focused on consistency, streaks, and progress insights.",
    seoDescription:
      "MERN e-learning platform with Stripe payments, MongoDB analytics, and scalable AWS media delivery supporting 1,000+ learners.",
    url: "https://learning-habits-ebon.vercel.app/",
    repo: "https://github.com/STR7ANGER/Learning-Habits",
    image: "/learninghabit.png",
  },
  {
    name: "Bloomify",
    description:
      "Growth-focused app experience with clean UX and engagement flows.",
    seoDescription:
      "Growth-focused web app with clean UX, onboarding, and engagement flows.",
    url: "https://bloomify-bay.vercel.app/",
    repo: "https://github.com/STR7ANGER/Bloomify",
    image: "/bloomify.png",
  },
] as const
