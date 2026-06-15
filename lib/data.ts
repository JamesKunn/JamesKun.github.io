export type TechItem = {
  id: string;
  name: string;
  label: string;
  icon: string;
  description: string;
};

export type ProjectSlide = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  slides: ProjectSlide[];
};

export const techStacks: TechItem[] = [
  {
    id: "PHP",
    name: "PHP",
    label: "PHP",
    icon: "/images/tech/php.png",
    description:
      "I use PHP to build dynamic and functional web applications. I've worked on real-life projects like a Loan Tracking System and custom features for a Moodle-based LMS. I focus on writing clean, reusable code and applying MVC principles for better structure and maintainability.",
  },
  {
    id: "JavaScript",
    name: "JavaScript",
    label: "JavaScript",
    icon: "/images/tech/js.png",
    description:
      "JavaScript is what I use to make websites interactive and user-friendly. I apply it for form validation, dynamic content updates, AJAX requests, and improving UI/UX in my Laravel and portfolio projects. I have experience using both vanilla JavaScript and libraries.",
  },
  {
    id: "Laravel",
    name: "Laravel",
    label: "Laravel",
    icon: "/images/tech/laravel.png",
    description:
      "Laravel is my main framework for backend development. I've built fully functional systems like a Loan Tracking System with authentication, CRUD operations, role management, and database handling. I also worked on creating dashboards and integrating Blade templates, controllers, and models to deliver clean and scalable applications.",
  },
  {
    id: "MySQL",
    name: "MySQL",
    label: "MySQL",
    icon: "/images/tech/mysql.png",
    description:
      "I use MySQL to design and manage databases for web applications. I've created relational databases for systems like loan tracking and LMS platforms, using proper table relationships, foreign keys, and optimized queries. I'm comfortable with migrations, seeding, and database CRUD operations.",
  },
  {
    id: "Wordpress",
    name: "Wordpress",
    label: "Wordpress",
    icon: "/images/tech/wordpress.png",
    description:
      "I work with WordPress to create responsive websites and customize themes for portfolios and simple business sites. I understand how to install plugins, modify themes using PHP, and manage content through the WordPress dashboard. I can also integrate forms, custom pages, and basic SEO setup.",
  },
  {
    id: "Make-Integromat",
    name: "Make-Integromat",
    label: "Make",
    icon: "/images/tech/make.png",
    description:
      "I specialize in low-code engineering using Make (formerly Integromat) to architect complex, bi-directional automation workflows. I have successfully built ecosystems that connect Telegram, Google Workspace, and Gmail APIs—implementing advanced features like Regex data cleaning, JSON parsing, and dynamic callback queries to transform manual operations into automated digital workflows.",
  },
  {
    id: "Zapier",
    name: "Zapier",
    label: "Zapier",
    icon: "/images/tech/zappier.jpeg",
    description:
      "Zapier is my primary tool for workflow orchestration and systems integration. I use it to bridge disconnected platforms, manage complex logic branching (Paths), and automate the flow of data between webhooks, AI engines, and productivity suites.",
  },
  {
    id: "ChatGPT",
    name: "ChatGPT",
    label: "Open AI API",
    icon: "/images/tech/chatgpt.png",
    description:
      "I integrate OpenAI's LLMs to add 'intelligence' to standard applications. I have experience in advanced prompt engineering and lead scoring, using AI to perform real-time intent analysis and autonomous decision-making.",
  },
  {
    id: "Gspace",
    name: "Gspace",
    label: "Google Space",
    icon: "/images/tech/gspace.png",
    description:
      "I use Google Space to build web applications that are integrated with Google Workspace. I have experience in building web applications that are integrated with Google Workspace, such as Google Sheets, Google Docs, and Google Forms.",
  },
  {
    id: "n8n",
    name: "n8n",
    label: "N8n",
    icon: "/images/tech/n8n.png",
    description:
      "I use n8n to build complex workflow automation systems. I have experience in building systems that connect to external APIs, use AI agents, and perform complex data transformations.",
  },
  {
    id: "NextJS",
    name: "NextJS",
    label: "NextJS",
    icon: "/images/tech/nextjs.png",
    description:
      "I use NextJS to build server-side rendered web applications. I have experience in building web applications that are fast, scalable, and easy to maintain.",
  },
];

export const projects: Project[] = [
  {
    id: "laravel",
    title: "Loan Tracking System",
    description:
      "A web-based system developed as a school project to monitor loan applications, payments, and borrower information.",
    slides: [
      { src: "/images/projects/project1.png", alt: "login", caption: "Login Page" },
      { src: "/images/projects/A1.png", alt: "Adashboard", caption: "Admin Dashboard" },
      { src: "/images/projects/A2.png", alt: "Aapplication", caption: "Data Import & Export" },
      { src: "/images/projects/A3.png", alt: "logs", caption: "Activity tracking" },

      { src: "/images/projects/b1.png", alt: "Mdashboard", caption: "Manager Dashboard" },
      { src: "/images/projects/b2.png", alt: "payment", caption: "Payment Page" },
      { src: "/images/projects/b3.png", alt: "client", caption: "Client Page" },
      { src: "/images/projects/b4.png", alt: "loan", caption: "Loan Settings" },

      { src: "/images/projects/L1.png", alt: "Lappication", caption: "Processing Page" },
      { src: "/images/projects/L2.png", alt: "applicationdetails", caption: "Loan Details" },

      { src: "/images/projects/C1.png", alt: "Capplication", caption: "New Loan Application" },
      { src: "/images/projects/C2.png", alt: "C2application", caption: "Collectors View" },

    ],
  },
  {
    id: "moodle",
    title: "Moodle-Based LMS",
    description:
      "A Moodle-powered platform designed to manage courses, track student progress, and enhance online learning experiences.",
    slides: [
      { src: "/images/projects/project3.png", alt: "moodle login", caption: "Welcome Page" },
      { src: "/images/projects/project4.png", alt: "about page", caption: "About Page" },
    ],
  },
  {
    id: "Make",
    title: "Multi-Platform Order Automation System",
    description:
      "A bi-directional automation connecting Telegram, Google Sheets, and Gmail. Features real-time status updates via Telegram callback queries and automated data cleaning for streamlined order management.",
    link: "https://github.com/JamesKunn/telegram-order-automation-syn.git",
    slides: [
      { src: "/images/projects/orderform1.png", alt: "Scenario 1", caption: "Take orders via GForm" },
      { src: "/images/projects/orderform2.png", alt: "Scenario 2", caption: "Confirm orders via Gmail/Telegram" },
    ],
  },
  {
    id: "Zapier",
    title: "AI-Powered Lead Qualification System",
    description:
      "An autonomous pipeline that analyzes incoming project inquiries. High-value leads are instantly booked to Google Calendar, while low-priority chats are routed to Telegram to keep your schedule clean.",
    link: "https://github.com/JamesKunn/the-ai-powered-autonomous-gatekeeper.git",
    slides: [
      { src: "/images/projects/gatekeeperform.png", alt: "Entry Point", caption: "Entry Point" },
      { src: "/images/projects/zapwork.png", alt: "Workflow", caption: "Workflow" },
    ],
  },
  {
    id: "n8n1",
    title: "AI-Powered Blog Content Automation System",
    description:
      "Engineered a workflow triggered by real-time Google Sheets updates. It utilizes GPT-4.1-mini to draft 1,000-word articles in a specific brand voice, formats the text into clean HTML, and prompts DALL-E 3 to generate a relevant featured image.",
    link: "https://github.com/JamesKunn/the-ai-powered-autonomous-gatekeeper.git",
    slides: [
      { src: "/images/projects/bloggen1.png", alt: "Workflow 1", caption: "Generates Topic" },
      { src: "/images/projects/bloggen2.png", alt: "Workflow 2", caption: "Approves Generated Topic" },
      { src: "/images/projects/bloggen3.png", alt: "Workflow 3", caption: "Generates Blog Contents" },
      { src: "/images/projects/bloggen4.png", alt: "Workflow 4", caption: "DALL-E Image Generation" },
      { src: "/images/projects/bloggen5.png", alt: "Workflow 5", caption: "Final Blog Post Output" },
    ],
  },
  {
    id: "n8n2",
    title: "AI-Powered Epic & User Story Generation System Workflow",
    description:
      "Developed a backend automation system in n8n that listens to a Next.js/Vercel frontend webhook. When a PRD is uploaded, the system parses the data and sequentially generates structured Epics, User Stories, and Sprint Board tasks.",
    link: "https://github.com/JamesKunn/",
    slides: [
      { src: "/images/projects/prd-to-epic.png", alt: "Workflow 1", caption: "Generates Epic from PRD File" },
      { src: "/images/projects/epic-to-us.png", alt: "Workflow 2", caption: "Generate User Stories from Epic" },
      { src: "/images/projects/us-to-sb.png", alt: "Workflow 3", caption: "Generate Tasks from User Stories" },
    ],
  },
  {
    id: "n8n3",
    title: "AI-Powered Test Case Generation System Workflow",
    description:
      "Architected an n8n workflow that automatically extracts raw text from PDF and Docx files stored in Google Drive. Elite OpenAI Agents analyze functional requirements, user flows, and edge cases to autonomously generate a structured QA test suite.",
    link: "https://github.com/JamesKunn/the-ai-powered-autonomous-gatekeeper.git",
    slides: [
      { src: "/images/projects/testcasegen.png", alt: "Workflow 1", caption: "Generate Test Cases from PRD File" },
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  {
    href: "https://www.facebook.com/share/1AnTFiR5L6/",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/ohgilew?igsh=YjdjeGtrcGw0eWpp",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/james-quijada-538889273",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/JamesKunn/",
    label: "GitHub",
  },
];

export const RESUME_PATH = "/files/james_quijada-resume.pdf";
export const RESUME_FILENAME = "James_Kun_Resume.pdf";
