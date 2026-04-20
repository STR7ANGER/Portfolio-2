type AboutStat = {
  title: string
  value: string
  note: string
  className?: string
}

export const aboutStats: AboutStat[] = [
  {
    title: "Currently",
    value: "B.Tech CSE",
    note: "Cloud Computing at Bennett University · CGPA 8.0",
    className: "md:col-span-2",
  },
  {
    title: "Impact",
    value: "5,000+ users",
    note: "Backends and enterprise modules shipped in production",
  },
  {
    title: "Builder mode",
    value: "20+ projects",
    note: "Reusable UI systems, SaaS apps, dashboards, and tooling",
  },
  {
    title: "Cloud + DevOps",
    value: "AWS · Azure · AKS",
    note: "CI/CD, containers, deployments, and monitoring",
  },
  {
    title: "Leadership",
    value: "Research Head",
    note: "Bennett Cloud Computing Club · mentored 100+ students",
  },
]

export const experiences = [
  {
    role: "Junior Full-Stack Developer",
    company: "SpectroNOVA",
    period: "Jul 2025 — Feb 2026",
    location: "Remote",
    bullets: [
      "Built and tested ASP.NET REST APIs and backend microservices supporting 5,000+ active users.",
      "Improved a product showcase website by fixing client-side issues and raising UI reliability.",
      "Designed CI/CD flows with GitHub Actions and Azure DevOps for automated builds, tests, and deployments.",
      "Deployed microservices to Azure Kubernetes Service with centralized monitoring.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "USUALS.AI",
    period: "Aug 2025 — Oct 2025",
    location: "Remote · Contract",
    bullets: [
      "Architected a NestJS + Prisma + PostgreSQL backend for 1k+ AI media processing jobs per month.",
      "Worked on an Electron + React desktop app and node-based media generation workflows.",
      "Refined prompt and bias strategies for more accurate, consistent generative AI output.",
      "Designed scalable Node.js media queues that cut manual editing effort by 45%.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Computing Mind Technology",
    period: "Jan 2025 — Aug 2025",
    location: "Remote",
    bullets: [
      "Led MERN platform development for 200+ learners on AWS-hosted infrastructure.",
      "Set up Dockerized deployments and CI/CD pipelines across EC2, S3, and CloudFront.",
      "Built real-time classes and scheduling systems that improved engagement by 40%.",
    ],
  },
  {
    role: "CS / IT Engineer Intern",
    company: "BHEL",
    period: "Jun 2025 — Jul 2025",
    location: "Bhopal",
    bullets: [
      "Analyzed enterprise infrastructure for 1,000+ users with focus on reliability and scalability.",
      "Studied distributed systems, load balancing, caching, CDN layers, and HA deployment patterns.",
      "Reviewed DBMS architectures and hybrid cloud / on-prem system design tradeoffs.",
    ],
  },
  {
    role: "Software Development Associate",
    company: "AgroTrac Digital",
    period: "Aug 2025 — Sep 2025",
    location: "Remote",
    bullets: [
      "Developed buyer and seller web pages with stronger responsiveness and usability.",
      "Integrated third-party APIs for dynamic data flow and better product functionality.",
      "Collaborated on bug fixes and enhancements to improve performance and platform reliability.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Sapphire Broking",
    period: "Jun 2025 — Mar 2025",
    location: "Remote",
    bullets: [
      "Served as founding frontend developer and built user-facing interfaces from scratch.",
      "Created onboarding workflows with Surepass API for verification and KYC.",
      "Built trading dashboards with real-time P&L views and interactive data tables.",
    ],
  },
] as const

export const projects = [
  {
    name: "Task Morpher",
    tag: "Task & Project Management Platform",
    stack: "Next.js · Supabase · Realtime collaboration · Analytics",
    description:
      "A SaaS productivity workspace with live collaboration, rich dashboards, and CI/CD deployment for 500+ users.",
  },
  {
    name: "Tech.UI",
    tag: "UI Component Library",
    stack: "React · Design systems · Reusable components",
    description:
      "A component library focused on fast, polished interfaces and reused across 20+ projects.",
  },
  {
    name: "Virtual Ventures",
    tag: "Trading Simulator",
    stack: "Node.js · Real-time portfolios · Market simulation",
    description:
      "Simulates 1,000+ symbols and powers dynamic portfolio tracking for 300+ users.",
  },
  {
    name: "Learning Habits",
    tag: "E-Learning Platform",
    stack: "MERN · AWS · Stripe · Scalable media delivery",
    description:
      "A learning platform with payments, scalable content delivery, and production-ready AWS deployment.",
  },
] as const

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++", "C#", "Java", "Go"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    items: [".NET", "Node.js", "Express", "NestJS", "Django", "GraphQL", "WebSockets"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "DynamoDB"],
  },
] as const

export const toolCards = [
  {
    title: "CI/CD pipelines",
    text: "I build delivery flows with GitHub Actions, Azure DevOps, Docker, and cloud deployments so shipping feels smooth, not scary.",
  },
  {
    title: "Reusable UI systems",
    text: "Tech.UI reflects how I like to work: one polished design system, reused everywhere, with less repetition and more consistency.",
  },
  {
    title: "API + testing workflows",
    text: "Postman, DevTools, edge-case testing, and workflow validation are part of my day-to-day build rhythm.",
  },
  {
    title: "Developer automation",
    text: "From Prisma and Mongoose to infra setup and deployment scripts, I like creating tools that remove boring repetition.",
  },
] as const

export const dsaStats = [
  { label: "LeetCode solved", value: "800+" },
  { label: "Contest rating", value: "1650+" },
  { label: "Hackathon finish", value: "#1 place" },
  { label: "Students mentored", value: "100+" },
] as const
