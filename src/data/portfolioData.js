export const personalInfo = {
  name: "Ruper Angelo Reyes",
  title: "Software Developer | .NET | Full Stack",
  summary:
    "Software Developer with years of experience delivering business-critical applications across ERP, payroll, POS, and biometric-integrated systems. Currently studying Computer Programming and Analysis at Fanshawe College in London, Ontario, while continuing to build scalable, high-performance software.",
  location: "London, Ontario, Canada",
  email: "ruperangeloreyes.dev@gmail.com",
  github: "https://github.com/ruperangeloreyes",
  linkedin: "https://linkedin.com/in/ruperangeloreyes",
  resumePath: "/Ruper-Angelo-Reyes-Resume.txt",
};

export const aboutHighlights = [
  "Designed and maintained enterprise systems that support day-to-day operations for inventory, finance, and customer-facing workflows.",
  "Improved system responsiveness through query optimization, careful API design, and measurable performance tuning.",
  "Known for translating business requirements into maintainable architecture with clean code and long-term scalability.",
];

export const skills = {
  Languages: ["C#", "VB.NET", "JavaScript", "Python", "C++", "Java"],
  Frameworks: [".NET Core", "ASP.NET", "Node.js", "Vue.js", "React"],
  Databases: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
  Tools: [
    "REST APIs",
    "JWT Authentication",
    "SOAP/REST Integration",
    "Factory / Singleton / Observer / Mediator",
    "CI/CD",
    "Docker",
    "Azure",
    "AWS",
  ],
};

export const projects = [
  {
    title: "ERP Inventory & Sales Management System",
    description:
      "Enterprise platform for stock movement, purchasing, sales order flow, and role-based reporting used by operations and finance teams.",
    techStack: ["C#", ".NET Core", "SQL Server", "REST API"],
    achievements: [
      "Reduced stock reconciliation issues by centralizing inventory transactions in a single audited pipeline.",
      "Introduced modular services that improved release confidence and reduced maintenance overhead.",
      "Built role-aware dashboards to speed up operational decisions for sales and warehouse teams.",
    ],
    github: "https://github.com/ruperangeloreyes/erp-inventory-sales",
    demo: "",
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Data analytics application that surfaces revenue trends, product velocity, and regional KPIs with near real-time updates.",
    techStack: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    achievements: [
      "Optimized reporting queries and indexing strategy to improve dashboard load times under heavy usage.",
      "Implemented reusable chart data adapters to simplify adding new business metrics.",
      "Enabled drill-down analysis for monthly and product-level revenue insights.",
    ],
    github: "https://github.com/ruperangeloreyes/sales-analytics-dashboard",
    demo: "",
  },
  {
    title: "Document Factory System (Design Patterns)",
    description:
      "Pattern-driven document generation engine that applies Factory and Singleton patterns for reliable formatting and output control.",
    techStack: ["C#", ".NET", "Design Patterns"],
    achievements: [
      "Applied Factory pattern to standardize creation for invoices, reports, and export templates.",
      "Used Singleton configuration services to ensure consistent formatting rules across outputs.",
      "Improved code maintainability through testable abstractions and reduced duplication.",
    ],
    github: "https://github.com/ruperangeloreyes/document-factory-system",
    demo: "",
  },
  {
    title: "Full-Stack Authentication Platform",
    description:
      "Secure full-stack application with account onboarding, JWT-based auth flows, and protected routes for role-specific features.",
    techStack: ["React", "Node.js", "MongoDB", "JWT"],
    achievements: [
      "Implemented token lifecycle management with refresh flow and guarded API routes.",
      "Separated concerns with clean API layers and reusable validation middleware.",
      "Improved user trust with secure password handling and robust session behavior.",
    ],
    github: "https://github.com/ruperangeloreyes/fullstack-auth-platform",
    demo: "",
  },
  {
    title: "System Optimization Case Study",
    description:
      "Performance-focused refactor of a business workflow service to reduce bottlenecks and increase throughput under peak demand.",
    techStack: ["C#", "SQL Server", "Performance", "System Design"],
    achievements: [
      "Reduced average endpoint response times through query tuning and asynchronous processing.",
      "Identified bottlenecks with metrics-based profiling and targeted refactoring.",
      "Improved deployment reliability with staged rollouts and regression checks.",
    ],
    github: "https://github.com/ruperangeloreyes/system-optimization-case-study",
    demo: "",
  },
];

export const experiences = [
  {
    company: "Southwood Mindanao Corporation",
    role: "Software Developer",
    period: "Previous Role",
    impact: [
      "Delivered internal business modules that improved data accuracy for operations and accounting teams.",
      "Helped streamline maintenance tasks by improving code organization and deployment consistency.",
    ],
  },
  {
    company: "Davao Unified Corporation",
    role: "Software Developer",
    period: "Previous Role",
    impact: [
      "Built and enhanced line-of-business applications supporting inventory and transaction workflows.",
      "Collaborated with stakeholders to convert manual routines into automated and traceable system flows.",
    ],
  },
  {
    company: "Hubport Interactive Incorporated",
    role: "Software Developer",
    period: "Previous Role",
    impact: [
      "Developed client-facing modules with strong focus on performance and integration reliability.",
      "Improved service interoperability through clean API contracts and practical system integration patterns.",
    ],
  },
  {
    company: "Canada Life",
    role: "Software Developer",
    period: "Professional Experience",
    impact: [
      "Contributed to enterprise software initiatives where scalability, quality, and reliability were critical.",
      "Supported modernization efforts by improving maintainability and alignment with engineering best practices.",
    ],
  },
];
