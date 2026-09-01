export const PROJECTS = [
  {
    id: 1,
    number: '01',
    date: 'NOV 2025',
    type: 'FOOD WASTE REDUCTION SYSTEM',
    title: 'EvoWST',
    summary:
      'A social-impact platform connecting food donors and receivers to reduce food waste and promote sustainability.',
    idea:
      'EvoWST is designed to connect people and organizations that have surplus food with people who can make use of it. The goal is to make food donation more accessible while creating a simple and practical donation ecosystem.',
    system:
      'The application uses a full-stack MERN architecture with real-time communication, location-based donation tracking and secure authentication. Donors can create and manage donations while receivers can discover and interact with available food resources.',
    flow: [
      'Food Donor',
      'EvoWST Platform',
      'Location & Donation Tracking',
      'Food Receiver',
    ],
    highlights: [
      'Real-time chat using Socket.io',
      'Donation tracking with Mapbox',
      'JWT-based authentication',
      'Cloudinary image handling',
    ],
    stack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Socket.io',
      'Mapbox',
      'JWT',
      'Cloudinary',
    ],
    github:
      'https://github.com/vvek1/EvoWST-FoodWasteReductionSystem',
  },

  {
    id: 2,
    number: '02',
    date: 'MAY 2025',
    type: 'ECOMMERCE STORE',
    title: 'NexChange',
    summary:
      'A full-stack ecommerce platform designed with secure authentication, online payments and dynamic shopping functionality.',
    idea:
      'NexChange focuses on creating a complete shopping experience with a modern frontend, secure user flows and a backend that can manage products, carts and orders.',
    system:
      'The project follows a MERN architecture with Redux for state management and RESTful APIs for product and cart operations. Stripe is used for payment integration and Material UI supports the interface layer.',
    flow: [
      'Customer',
      'Storefront',
      'Cart & APIs',
      'Secure Checkout',
    ],
    highlights: [
      'MERN + Redux architecture',
      'Stripe payment integration',
      'Secure user authentication',
      'RESTful product and cart APIs',
    ],
    stack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Redux',
      'Stripe',
      'Material UI',
    ],
    github: null,
  },

  {
    id: 3,
    number: '03',
    date: 'MAR 2026',
    type: 'PREDICTION SYSTEM',
    title: 'Housing Price',
    summary:
      'An end-to-end machine learning pipeline developed to predict housing prices using data preprocessing, feature engineering and regression techniques.',
    idea:
      'The project turns raw housing data into a practical prediction workflow. The focus is on preparing reliable features, training a regression model and evaluating how well the model generalizes.',
    system:
      'The pipeline uses Python for data preparation, Pandas and NumPy for manipulation, feature engineering for useful predictors and Scikit-learn for model training and evaluation with Random Forest regression.',
    flow: [
      'Raw Housing Data',
      'Preprocessing',
      'Feature Engineering',
      'Random Forest Prediction',
    ],
    highlights: [
      'Data preprocessing pipeline',
      'Feature engineering',
      'RandomForest model',
      '88%+ prediction accuracy',
    ],
    stack: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'RandomForest',
    ],
    github:
      'https://github.com/vvek1/housing-price-prediction',
  },
];


export const EXPERIENCE = [
  {
    title: 'Raletta Studios',
    meta: 'AI/ML ENGINEER INTERN',
    date: 'SEPT 2025 — OCT 2025',
    description:
      'Worked as an AI/ML Engineer Intern, contributing to responsive product interfaces and data-focused backend work.',
    details:
      'Built responsive user interfaces using Next.js and TypeScript, designed and managed PostgreSQL databases, and wrote complex SQL queries for data storage, retrieval and optimization.',
    tools: ['Next.js', 'TypeScript', 'PostgreSQL', 'SQL'],
  },

  {
    title: 'Google Developer Students Clubs',
    meta: 'INDUSTRIAL TRAINING — LEARNER',
    date: '30 DAYS',
    description:
      'Gained hands-on experience with Google Cloud Platform through structured industrial training.',
    details:
      'Focused on practical cloud concepts and development workflows through a structured Google Cloud learning experience.',
    tools: ['Google Cloud', 'Cloud Fundamentals', 'Development'],
  },

  {
    title: 'Oracle GenAI Professional',
    meta: 'GENERATIVE AI PROFESSIONAL CERTIFICATE',
    date: '2026',
    description:
      'Oracle Generative AI Professional Certificate focused on generative AI concepts and professional foundations.',
    details:
      'Strengthened understanding of generative AI architectures, applications and practical AI workflows.',
    tools: ['Oracle', 'Generative AI', 'AI Architecture'],
  },

  {
    title: 'Data Science Course Certificate',
    meta: 'DATA SCIENCE COURSE',
    date: 'JUN 2026',
    description:
      'Data Science course certificate from CodeWithHarry.',
    details:
      'Covered practical data science foundations with an emphasis on Python-based analysis and working with data.',
    tools: ['Python', 'Data Science', 'Data Analysis'],
  },

  {
    title: 'Python for Data Science',
    meta: 'NPTEL',
    date: 'JUL — AUG 2025',
    description:
      'NPTEL Python for Data Science certification with a consolidated score of 71%.',
    details:
      'Built a foundation in Python for data science workflows, analysis and computational problem solving.',
    tools: ['Python', 'NPTEL', 'Data Science'],
  },

  {
    title: 'C++ Programming',
    meta: 'PROGRAMMING CERTIFICATE',
    date: 'JUN 2023',
    description:
      'Programming certificate from Samyak Institute.',
    details:
      'Developed core programming foundations using C++, including structured problem solving and programming concepts.',
    tools: ['C++', 'Programming', 'Problem Solving'],
  },
];


export const STACK = [
  {
    name: "LANGUAGES",
    short: "Python, C++, JavaScript, SQL",
    icon: "python",
    description:
      "Core programming languages I use for problem solving, backend development and data-driven applications.",
    technologies: ["Python", "C++", "JavaScript", "SQL"],
    use: "DSA, scripting, backend logic, APIs and database queries.",
  },

  {
    name: "AI / MACHINE LEARNING",
    short: "PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib",
    icon: "pytorch",
    description:
      "My data and machine learning toolkit for turning raw datasets into useful insights and predictive models.",
    technologies: [
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    use: "Data preprocessing, feature engineering, visualization and ML model development.",
  },

  {
    name: "DATA SCIENCE",
    short: "Analysis, Visualization, Feature Engineering",
    icon: "pandas",
    description:
      "A practical data science workflow focused on understanding data and extracting meaningful patterns.",
    technologies: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
    ],
    use: "Exploratory analysis, visualization, statistics and predictive analytics.",
  },

  {
    name: "FULL STACK",
    short: "React.js, Next.js, Node.js, Express.js",
    icon: "react",
    description:
      "Full-stack technologies I use to build responsive interfaces and complete web applications.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
    use: "Frontend interfaces, backend APIs and complete web applications.",
  },

  {
    name: "DATABASES",
    short: "MongoDB, MySQL, PostgreSQL",
    icon: "mongodb",
    description:
      "Database technologies I use for storing, querying and managing application data.",
    technologies: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
    use: "Application data, relational queries, authentication and persistent storage.",
  },

  {
    name: "TOOLS & DESIGN",
    short: "Git, GitHub, VS Code, Postman, Figma",
    icon: "github",
    description:
      "Development and design tools that support my day-to-day workflow from coding to API testing and UI planning.",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
    ],
    use: "Version control, development, API testing, collaboration and UI design.",
  },
];

