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

export type ProjectSpec = {
  label: string;
  value: string;
};

export type ProjectCategory = "featured" | "other";
export type ProjectLayout = "large" | "small";
export type CircuitType = "horizontal" | "circle" | "diagonal" | "video";

export type ProjectProofType =
  | "github"
  | "demo"
  | "architecture"
  | "screenshots";

export type ProjectProof = {
  type: ProjectProofType;
  label: string;
  href?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: ProjectCategory;
  layout: ProjectLayout;
  featuredOrder?: number;
  projectType?: string;
  /** @deprecated Use proof array instead */
  link?: string;
  slides: ProjectSlide[];
  icon: string;
  tags: string[];
  workflow?: string[];
  techStack?: string[];
  demonstrates?: string[];
  reliability?: string[];
  proof?: ProjectProof[];
  specs: ProjectSpec[];
  highlights?: string[];
  circuit?: CircuitType;
  imagePosition?: "left" | "right";
  objectFit?: "cover" | "contain";
  imageClassName?: string;
  shellClassName?: string;
};

export type SkillCategory = {
  title: string;
  prominent?: boolean;
  skills: { label: string; techId?: string }[];
};

export const GITHUB_PROFILE = "https://github.com/JamesKunn/";

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
    label: "OpenAI API",
    icon: "/images/tech/chatgpt.png",
    description:
      "I integrate OpenAI's LLMs to add 'intelligence' to standard applications. I have experience in advanced prompt engineering and lead scoring, using AI to perform real-time intent analysis and autonomous decision-making.",
  },
  {
    id: "Gspace",
    name: "Gspace",
    label: "Google Workspace",
    icon: "/images/tech/gspace.png",
    description:
      "I integrate Google Workspace tools such as Google Sheets, Google Docs, Google Forms, and Gmail into automation workflows—using them as data sources, triggers, and outputs for business process automation.",
  },
  {
    id: "n8n",
    name: "n8n",
    label: "n8n",
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
  {
    id: "React",
    name: "React",
    label: "React",
    icon: "/images/tech/icons8-react-40.png",
    description:
      "I use React to build dynamic user interfaces. I have experience in building web applications that are fast, scalable, and easy to maintain.",
  },
  {
    id: "Python",
    name: "Python",
    label: "Python",
    icon: "/images/tech/icons8-python-48.png",
    description:
      "I use Python for backend development, data analysis, and scripting. I have experience in building scalable applications and automating repetitive tasks.",
  },
  {
    id: "Json",
    name: "Json",
    label: "Json",
    icon: "/images/tech/icons8-json-48.png",
    description:
      "I use Json for data interchange and storage. I have experience in working with structured data formats and API responses.",
  },
  {
    id: "AI Agents",
    name: "AI Agents",
    label: "AI Agents",
    icon: "/images/tech/icons8-robot-48.png",
    description:
      "I use AI Agents to build intelligent automation solutions. I have experience in creating autonomous agents that can perform complex tasks and make decisions based on their environment.",
  },
  {
    id: "Webhooks",
    name: "Webhooks",
    label: "Webhooks",
    icon: "/images/tech/icons8-webhook-24.png",
    description:
      "I use Webhooks to enable real-time communication between different services and applications. I have experience in setting up and managing webhook integrations.",
  },
  {
    id: "Data Processing",
    name: "Data Processing",
    label: "Data Processing",
    icon: "/images/tech/icons8-data-processing-64.png",
    description:
      "I use various data processing techniques to clean, transform, and analyze data for insights and decision-making.",
  },
  {
    id: "Git",
    name: "Git",
    label: "Git",
    icon: "/images/tech/icons8-git-50.png",
    description:
      "I use Git for version control and collaboration. I have experience in managing code repositories, branching strategies, and resolving merge conflicts.",
  },
  {
    id: "GitHub",
    name: "GitHub",
    label: "GitHub",
    icon: "/images/tech/icons8-git-48.png",
    description:
      "I use GitHub for code hosting and collaboration. I have experience in managing repositories, pull requests, and contributing to open-source projects.",
  },
  {
    id: "LLM Workflows",
    name: "LLM Workflows",
    label: "LLM Workflows",
    icon: "/images/tech/icons8-workflow-94.png",
    description:
      "I use LLM Workflows to create and manage workflows that leverage large language models for various tasks.",
  },
  {
    id: "Claude",
    name: "Claude",
    label: "Claude",
    icon: "/images/tech/icons8-claude-ai-48.png",
    description:
      "I use Claude to interact with large language models for various tasks.",
  },
  {
    id: "GSheets",
    name: "GSheets",
    label: "GSheets",
    icon: "/images/tech/icons8-google-sheets-48.png",
    description:
      "I use GSheets for data analysis and visualization. I have experience in creating spreadsheets that help communicate insights and support decision-making.",
  },
  {
    id: "REST APIs",
    name: "REST APIs",
    label: "REST APIs",
    icon: "/images/tech/icons8-rest-api-64.png",
    description:
      "I use REST APIs to integrate with various services and applications. I have experience in designing, implementing, and consuming RESTful APIs.",
  },
  {
    id: "Third Party Integrations",
    name: "Third Party Integrations",
    label: "Third Party Integrations",
    icon: "/images/tech/mediator.png",
    description:
      "I use Third Party Integrations to connect and interact with external services and applications. I have experience in managing and implementing various integration solutions.",
  },
  {
    id: "FAST API",
    name: "FAST API",
    label: "FAST API",
    icon: "/images/tech/fastapi.png",
    description:
      "I use FAST API to build high-performance web APIs. I have experience in creating RESTful APIs with automatic interactive documentation.",
  },
  {
    id: "OAuth",
    name: "OAuth",
    label: "OAuth",
    icon: "/images/tech/authentication.png",
    description:
      "I use OAuth for secure authentication and authorization with third-party services. I have experience in implementing OAuth flows and managing access tokens.",
  },
  {
    id: "Cursor",
    name: "Cursor",
    label: "Cursor",
    icon: "/images/tech/icons8-cursor-ai-64.png",
    description:
      "I use Cursor as my code editor. I have experience in using its AI-powered features to enhance my coding productivity.",
  },
  {
    id: "VS Code",
    name: "VS Code",
    label: "VS Code",
    icon: "/images/tech/icons8-vs-code-48.png",
    description:
      "I use VS Code as my code editor. I have experience in using its rich set of features to enhance my coding productivity.",
  },
];

export const projects: Project[] = [
  {
    id: "n8n3",
    title: "AI Test Case Generator",
    subtitle: "AI-powered QA automation pipeline",
    description:
      "A workflow that transforms product requirements and documentation into structured test cases using AI.",
    category: "featured",
    layout: "small",
    featuredOrder: 1,
    icon: "bug_report",
    tags: ["n8n", "OpenAI API", "QA"],
    workflow: [
      "Requirement Document",
      "Document Processing",
      "AI Analysis",
      "Test Case Generation",
      "Structured Output",
    ],
    techStack: ["n8n", "OpenAI API", "Document Processing", "Webhooks", "Structured JSON"],
    demonstrates: [
      "Automated document processing",
      "AI-powered requirement analysis",
      "Structured data generation",
      "QA automation",
    ],
    reliability: [
      "Document extraction from PDF/DOCX",
      "Structured JSON output",
      "Webhook integration",
      "Workflow orchestration",
    ],
    proof: [
      { type: "architecture", label: "Architecture" },
      { type: "screenshots", label: "Workflow Screenshots" },
    ],
    specs: [
      { label: "Problem", value: "time-consuming QA setup" },
      { label: "Solution", value: "autonomous test generation" },
      { label: "Impact", value: "faster validation" },
    ],
    objectFit: "contain",
    slides: [
      {
        src: "/images/projects/testcasegen.png",
        alt: "Workflow 1",
        caption: "Generate Test Cases from PRD File",
      },
    ],
  },
  {
    id: "n8n2",
    title: "AI Epic & User Story Generator",
    subtitle: "From requirements to structured development tasks",
    description:
      "An AI-powered workflow that analyzes product requirements and transforms them into structured epics and user stories.",
    category: "featured",
    layout: "small",
    featuredOrder: 2,
    icon: "fact_check",
    tags: ["n8n", "Next.js", "PRD"],
    workflow: [
      "Requirements",
      "AI Analysis",
      "Epic Generation",
      "User Stories",
      "Acceptance Criteria",
    ],
    techStack: ["Next.js", "n8n", "OpenAI API", "Webhooks", "JSON"],
    demonstrates: [
      "AI workflow orchestration",
      "Requirement analysis",
      "Structured LLM output",
      "Frontend/backend integration",
    ],
    reliability: [
      "Webhook-triggered pipeline",
      "Sequential workflow execution",
      "Structured JSON output",
      "API communication",
    ],
    proof: [
      { type: "architecture", label: "Architecture" },
      { type: "screenshots", label: "Workflow Screenshots" },
    ],
    specs: [
      { label: "Problem", value: "slow planning cycles" },
      { label: "Solution", value: "auto epic generation" },
      { label: "Impact", value: "faster delivery" },
    ],
    objectFit: "contain",
    imageClassName: "bg-surface-container-low",
    shellClassName: "border-t-2 border-t-primary/20",
    slides: [
      {
        src: "/images/projects/prd-to-epic.png",
        alt: "Workflow 1",
        caption: "Generates Epic from PRD File",
      },
      {
        src: "/images/projects/epic-to-us.png",
        alt: "Workflow 2",
        caption: "Generate User Stories from Epic",
      },
      {
        src: "/images/projects/us-to-sb.png",
        alt: "Workflow 3",
        caption: "Generate Tasks from User Stories",
      },
    ],
  },
  {
    id: "Zapier",
    title: "AI Lead Qualification System",
    subtitle: "Automatically analyze, qualify, and route incoming leads",
    description:
      "An AI-powered workflow that evaluates incoming lead information and determines the appropriate next action—booking high-value leads to Google Calendar or routing others to Telegram.",
    category: "featured",
    layout: "large",
    featuredOrder: 3,
    icon: "smart_toy",
    tags: ["Zapier", "OpenAI API", "Calendar", "Telegram"],
    workflow: [
      "Website Form",
      "Zapier",
      "AI Lead Analysis",
      "High Value / Low Value",
      "Calendar Booking / Notification",
    ],
    techStack: ["Zapier", "OpenAI API", "Webhooks", "Google Calendar", "Telegram"],
    demonstrates: [
      "AI-based decision making",
      "Conditional workflow routing",
      "Lead qualification",
      "Business process automation",
    ],
    reliability: [
      "Input validation",
      "Conditional routing",
      "AI qualification logic",
      "Notification delivery",
    ],
    proof: [
      {
        type: "github",
        label: "GitHub",
        href: "https://github.com/JamesKunn/the-ai-powered-autonomous-gatekeeper.git",
      },
      { type: "architecture", label: "Architecture" },
      { type: "screenshots", label: "Workflow Screenshots" },
    ],
    specs: [
      { label: "Problem", value: "noisy lead intake" },
      { label: "Solution", value: "AI triage + routing" },
      { label: "Impact", value: "cleaner pipeline" },
    ],
    circuit: "diagonal",
    imagePosition: "right",
    slides: [
      { src: "/images/projects/gatekeeperform.png", alt: "Entry Point", caption: "Entry Point" },
      { src: "/images/projects/zapwork.png", alt: "Workflow", caption: "Workflow" },
    ],
  },
  {
    id: "n8n1",
    title: "AI Blog Content Automation",
    subtitle: "Automated content creation pipeline",
    description:
      "A workflow that automates multiple stages of content production—triggered by Google Sheets updates, generating articles with GPT and featured images with DALL·E.",
    category: "featured",
    layout: "large",
    featuredOrder: 4,
    icon: "auto_awesome",
    tags: ["n8n", "GPT", "DALL·E"],
    workflow: [
      "Google Sheets Trigger",
      "n8n",
      "AI Article Generation",
      "HTML Formatting",
      "DALL·E Image",
      "Publishing Preparation",
    ],
    techStack: ["n8n", "OpenAI API", "AI Image Generation", "Webhooks", "Content APIs"],
    demonstrates: [
      "Multi-step AI pipelines",
      "Automated content generation",
      "Conditional workflows",
      "Publishing automation",
    ],
    reliability: [
      "Trigger-based automation",
      "Multi-step pipeline orchestration",
      "Conditional approval flow",
      "API integrations",
    ],
    proof: [
      { type: "architecture", label: "Architecture" },
      { type: "screenshots", label: "Workflow Screenshots" },
    ],
    specs: [
      { label: "Problem", value: "manual content bottleneck" },
      { label: "Solution", value: "AI article pipeline" },
      { label: "Impact", value: "faster publishing" },
    ],
    circuit: "circle",
    imagePosition: "left",
    slides: [
      { src: "/images/projects/bloggen1.png", alt: "Workflow 1", caption: "Generates Topic" },
      { src: "/images/projects/bloggen2.png", alt: "Workflow 2", caption: "Approves Generated Topic" },
      { src: "/images/projects/bloggen3.png", alt: "Workflow 3", caption: "Generates Blog Contents" },
      { src: "/images/projects/bloggen4.png", alt: "Workflow 4", caption: "DALL-E Image Generation" },
      { src: "/images/projects/bloggen5.png", alt: "Workflow 5", caption: "Final Blog Post Output" },
    ],
  },
  {
    id: "Make",
    title: "Multi-Platform Order Automation",
    subtitle: "Connect orders, notifications, and records automatically",
    description:
      "An automation system that connects Telegram, Google Sheets, and Gmail to streamline order processing with bi-directional status updates.",
    category: "featured",
    layout: "small",
    featuredOrder: 5,
    icon: "sync",
    tags: ["Make", "Telegram", "API"],
    workflow: [
      "Order Form",
      "Google Sheets",
      "Order Confirmation",
      "Telegram Notification",
    ],
    techStack: ["Make", "Telegram", "Google Sheets", "Gmail"],
    demonstrates: [
      "Multi-platform integration",
      "Event-driven automation",
      "Two-way workflow automation",
      "Status management",
    ],
    reliability: [
      "Data synchronization",
      "Event-driven triggers",
      "Bi-directional updates",
      "Regex data cleaning",
    ],
    proof: [
      {
        type: "github",
        label: "GitHub",
        href: "https://github.com/JamesKunn/telegram-order-automation-syn.git",
      },
      { type: "architecture", label: "Architecture" },
      { type: "screenshots", label: "Workflow Screenshots" },
    ],
    specs: [
      { label: "Problem", value: "error-prone manual order handling" },
      { label: "Solution", value: "multi-platform automation" },
      { label: "Impact", value: "zero manual entry" },
    ],
    objectFit: "contain",
    imageClassName: "bg-white/5",
    slides: [
      { src: "/images/projects/orderform1.png", alt: "Scenario 1", caption: "Take orders via GForm" },
      { src: "/images/projects/orderform2.png", alt: "Scenario 2", caption: "Confirm orders via Gmail/Telegram" },
    ],
  },
  {
    id: "laravel",
    title: "Loan Tracking System",
    subtitle: "Role-based web application for loan operations",
    description:
      "A centralized loan tracking system designed to manage loan applications, payments, borrowers, and collection workflows.",
    category: "other",
    layout: "large",
    projectType: "Academic / Capstone",
    icon: "payments",
    tags: ["Laravel", "PHP", "MySQL"],
    techStack: ["Laravel", "PHP", "MySQL", "AdminLTE", "Spatie Permissions"],
    highlights: [
      "Role-based access control",
      "Loan application management",
      "Payment tracking & borrower management",
      "Collection workflows & admin dashboard",
    ],
    specs: [
      { label: "Problem", value: "fragmented loan tracking" },
      { label: "Solution", value: "centralized dashboard & workflows" },
      { label: "Impact", value: "faster decisions & clearer reporting" },
    ],
    reliability: [
      "Role-based access control",
      "Database-driven operations",
      "Input validation",
    ],
    proof: [{ type: "screenshots", label: "App Screenshots" }],
    circuit: "horizontal",
    imagePosition: "right",
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
    title: "Moodle-Based Learning Management System",
    subtitle: "LMS administration and system customization",
    description:
      "Moodle platform administration including grade calculation configuration, interface improvements, and course/content management.",
    category: "other",
    layout: "small",
    projectType: "Academic / Internship",
    icon: "school",
    tags: ["Moodle", "LMS"],
    highlights: [
      "Moodle administration & grade configuration",
      "Interface and design improvements",
      "Course/content management & document organization",
      "Technical troubleshooting & admin support",
    ],
    specs: [
      { label: "Problem", value: "manual learning flows" },
      { label: "Solution", value: "structured course ecosystem" },
      { label: "Impact", value: "smoother delivery & tracking" },
    ],
    proof: [{ type: "screenshots", label: "App Screenshots" }],
    slides: [
      { src: "/images/projects/project3.png", alt: "moodle login", caption: "Welcome Page" },
      { src: "/images/projects/project4.png", alt: "about page", caption: "About Page" },
    ],
  },
  {
    id: "python",
    title: "Youtube AI Repurposing",
    subtitle: "Long-form video to short-form clips",
    description:
      "An AI-powered dashboard that transforms long-form YouTube videos into vertical short clips with AI highlight extraction, voiceovers, and synchronized subtitles.",
    category: "other",
    layout: "large",
    icon: "smart_display",
    tags: ["Python", "FFMPEG", "AI"],
    workflow: [
      "YouTube Link",
      "Video Download",
      "AI Highlight Extraction",
      "Subtitle & Voiceover",
      "Vertical MP4 Output",
    ],
    demonstrates: [
      "AI content analysis",
      "Automated video processing",
      "Web dashboard integration",
    ],
    reliability: [
      "Automated processing pipeline",
      "Structured output generation",
    ],
    proof: [
      { type: "demo", label: "Private Demo — Architecture Available" },
      { type: "architecture", label: "Architecture" },
      { type: "screenshots", label: "App Screenshots" },
    ],
    specs: [
      { label: "Input", value: "long-form video link" },
      { label: "Process", value: "AI highlight + subtitle generation" },
      { label: "Output", value: "viral-ready short" },
    ],
    circuit: "video",
    imagePosition: "right",
    slides: [
      {
        src: "/images/projects/youtube-auto.png",
        alt: "Workflow 1",
        caption: "Enter a YouTube link and AI voice preference",
      },
      {
        src: "/images/projects/youtube-auto2.png",
        alt: "Workflow 2",
        caption: "AI extracts highlights and renders edits",
      },
      {
        src: "/images/projects/youtube-auto3.png",
        alt: "Workflow 3",
        caption: "Ready-to-post vertical MP4 with subtitles",
      },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Automation",
    prominent: true,
    skills: [
      { label: "n8n", techId: "n8n" },
      { label: "Make", techId: "Make-Integromat" },
      { label: "Zapier", techId: "Zapier" },
      { label: "OpenAI API", techId: "ChatGPT" },
      { label: "LLM Workflows", techId: "LLM Workflows" },
      { label: "AI Agents", techId: "AI Agents" },
    ],
  },
  {
    title: "Integrations",
    skills: [
      { label: "REST APIs", techId: "REST APIs" },
      { label: "Webhooks", techId: "Webhooks" },
      { label: "OAuth", techId: "OAuth" },
      { label: "JSON", techId: "Json" },
      { label: "Third Party Integrations", techId: "Third Party Integrations" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { label: "Next.js", techId: "NextJS" },
      { label: "React", techId: "React" },
      { label: "JavaScript", techId: "JavaScript" },
      { label: "Python", techId: "Python" },
      { label: "FastAPI", techId: "FAST API" },
      { label: "PHP", techId: "PHP" },
      { label: "Laravel", techId: "Laravel" },
    ],
  },
  {
    title: "Databases & Data",
    skills: [
      { label: "MySQL", techId: "MySQL" },
      { label: "PostgreSQL", techId: "PostgreSQL" },
      { label: "Google Sheets", techId: "GSheets" },
      { label: "Data Processing", techId: "Data Processing" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { label: "Git", techId: "Git" },
      { label: "GitHub", techId: "GitHub" },
      { label: "VS Code", techId: "VS Code" },
      { label: "Cursor", techId: "Cursor" },
      { label: "Claude", techId: "Claude" },
      { label: "Google Workspace", techId: "Gspace" },
    ],
  },
];

export const featuredProjects = projects
  .filter((p) => p.category === "featured")
  .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));

export const otherProjects = projects.filter((p) => p.category === "other");

export type AutomationService = {
  icon: string;
  title: string;
  description: string;
};

export const automationServices: AutomationService[] = [
  {
    icon: "psychology",
    title: "AI Workflows",
    description:
      "Connect AI models to business processes for content generation, analysis, classification, and decision-making.",
  },
  {
    icon: "account_tree",
    title: "n8n Workflow Development",
    description:
      "Build event-driven workflows using triggers, conditions, APIs, webhooks, scheduled jobs, and custom logic.",
  },
  {
    icon: "hub",
    title: "API Integrations",
    description:
      "Connect CRMs, SaaS platforms, databases, communication tools, and custom applications through APIs and webhooks.",
  },
  {
    icon: "description",
    title: "Document Processing",
    description:
      "Turn PDFs, documents, and unstructured information into structured data using automated extraction and AI analysis.",
  },
  {
    icon: "person_search",
    title: "Lead Automation",
    description:
      "Automate lead capture, qualification, routing, notifications, and follow-up processes.",
  },
  {
    icon: "settings_suggest",
    title: "Business Process Automation",
    description:
      "Replace repetitive manual processes with reliable workflows that synchronize data across multiple platforms.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const automationProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "Identify the repetitive process, business rules, bottlenecks, and desired outcome.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Map the triggers, data flow, conditions, integrations, and edge cases.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Implement the workflow using n8n, APIs, AI models, databases, and business applications.",
  },
  {
    step: "04",
    title: "Test",
    description:
      "Validate inputs, outputs, API responses, edge cases, and failure scenarios.",
  },
  {
    step: "05",
    title: "Deploy",
    description:
      "Connect the workflow to the production environment and ensure reliable execution.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "Monitor results, identify bottlenecks, and continuously improve the automation.",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
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

export const RESUME_PATH = "/files/Jamesbryanquijada-resume.pdf";
export const RESUME_FILENAME = "James-Quijada-Resume.pdf";
