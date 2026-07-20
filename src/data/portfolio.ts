/**
 * Structured, typed content for the portfolio.
 * Editing text/data here updates the corresponding sections on the site.
 */

export type IconName =
  | 'about'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'education'
  | 'contact'
  | 'ai'
  | 'data'
  | 'chip'
  | 'lib'
  | 'bot'
  | 'front'
  | 'web'
  | 'tools'
  | 'lang';

export interface NavItem {
  id: string;
  label: string;
  icon: IconName;
}

export interface Experience {
  title: string;
  org: string;
  orgUrl: string;
  place: string;
  period: string;
  bullets: string[];
  stack: string[];
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  items: string[];
}

export interface Project {
  name: string;
  org: string;
  tag: string;
  desc: string;
  stack: string[];
  href: string;
  target: '_self' | '_blank';
}

export interface Degree {
  period: string;
  title: string;
  org: string;
  orgUrl: string;
  desc: string;
  thesis?: string;
  badges?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'github' | 'email';
  muted?: boolean;
}

export const profile = {
  name: 'Ayesha Munir',
  role: 'AI Software Engineer',
  tagline: 'Researcher | Problem Solver',
  roleLine: 'AI Software Engineer | Researcher | Problem Solver',
  email: 'ayeshamunir.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ayesha-samad/',
  github: 'https://github.com/ashmunir',
  githubSecondary: 'https://github.com/AyeshaMunirS',
  location: 'Santiago de Compostela, Spain',
  resumeUrl: 'assets/Ayesha-Munir-Resume.pdf',
  avatar: 'assets/ayesha-round.jpg',
};

export const nav: NavItem[] = [
  { id: 'about', label: 'About', icon: 'about' },
  { id: 'experience', label: 'Experience', icon: 'experience' },
  { id: 'skills', label: 'Skills', icon: 'skills' },
  { id: 'projects', label: 'Projects', icon: 'projects' },
  { id: 'education', label: 'Education', icon: 'education' },
  { id: 'contact', label: 'Contact', icon: 'contact' },
];

export const aboutParagraphs: string[] = [
  "I'm an AI Software Engineer who loves turning research and data into real, working software.",
  'With nearly five years of engineering experience, I build end-to-end AI and software systems — from data and research through model development to deployment. I hold an M.S. in Artificial Intelligence from the Universidade de Santiago de Compostela.',
  'My thesis focuses on image homogenization and domain adaptation to improve the generalizability of machine-learning models in fetal medicine.',
  'As an AI Software Engineer and Researcher at IIS Galicia Sur, I develop healthcare-AI and clinical-trial tools — RAG-based systems with LangChain, Ollama and the Gemini API, vector databases and LLMs — alongside React and React Native products from earlier roles.',
  'My skills span Python AI libraries (PyTorch, HuggingFace, OpenCV, LangChain), web and mobile frameworks (React, React Native, Next.js, TypeScript), and REST API integration.',
  'Find more details in the sections below!',
];

export const experiences: Experience[] = [
  {
    title: 'AI Software Engineer / Research Collaborator',
    org: 'IIS Galicia Sur',
    orgUrl: 'https://www.iisgaliciasur.es',
    place: 'Pontevedra, Spain',
    period: 'Apr 2025 — Present',
    bullets: [
      'Build healthcare-AI tools for research teams: clinical-trial AI support, information retrieval and health-data workflows.',
      'Developed RAG pipelines with vector databases, LLMs, prompt design, Ollama, OpenRouter and Gemini for clinical-trial search and Q&A.',
      'Support API integrations, documentation and testing with clinical, research and technical stakeholders.',
    ],
    stack: ['Python', 'RAG', 'Vector DBs', 'LLMs', 'Ollama', 'Gemini'],
  },
  {
    title: 'Senior Software Engineer',
    org: 'TEO International',
    orgUrl: 'https://teo.dk/en/home/',
    place: 'Islamabad, PK (Denmark-based)',
    period: 'Sep 2022 — Oct 2024',
    bullets: [
      'Delivered production web and mobile features with React, React Native, TypeScript, Formik, Yup and REST APIs.',
      'Built IoT-based access-control products — mobile app flows and web admin panels — with Agile teams and onsite stakeholders.',
    ],
    stack: ['React', 'React Native', 'TypeScript', 'IoT', 'REST APIs'],
  },
  {
    title: 'Software Engineer',
    org: 'Alberuni Technologies',
    orgUrl: 'https://www.stratex.nl',
    place: 'Islamabad, PK (NL-based)',
    period: 'Jun 2022 — Aug 2022',
    bullets: [
      'Developed frontend for workforce-management products using React, Ant Design and microfrontend concepts.',
      'Worked in sprint-based delivery to improve usability and prepare client handovers.',
    ],
    stack: ['React', 'Ant Design', 'Microfrontends'],
  },
  {
    title: 'Software Engineer',
    org: 'IneffableDevs',
    orgUrl: 'https://www.ineffabledevs.org/',
    place: 'Islamabad, PK (UK-based)',
    period: 'Mar 2021 — Jun 2022',
    bullets: [
      'Built React web apps for UK-facing products with production-quality releases in Agile/Scrum teams.',
      'Implemented reusable UI components, API integrations, forms, validation and Material UI screens.',
    ],
    stack: ['React', 'Material UI', 'Formik', 'Axios'],
  },
  {
    title: 'Trainee Software Engineer',
    org: 'TIPS x NR Soft',
    orgUrl: 'https://www.nrsofts.com/',
    place: 'Islamabad, Pakistan',
    period: 'Jun 2020 — Feb 2021',
    bullets: [
      'Developed government and counseling web-app features with React, Firebase, Bootstrap and PWA concepts.',
      'Supported frontend development, debugging, production-issue analysis and sprint delivery.',
    ],
    stack: ['React', 'Firebase', 'PWA', 'Bootstrap'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Data',
    icon: 'chip',
    items: [
      'Python', 'LLM applications', 'RAG pipelines', 'Vector databases', 'Prompt design',
      'Ollama', 'OpenRouter', 'Gemini', 'Computer vision', 'Domain adaptation', 'Healthcare AI',
    ],
  },
  {
    title: 'Frontend',
    icon: 'front',
    items: [
      'React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
      'Material UI', 'Ant Design', 'Fluent UI', 'Redux', 'Formik', 'Yup', 'Axios',
    ],
  },
  {
    title: 'AI / ML Libraries',
    icon: 'lib',
    items: ['PyTorch', 'HuggingFace', 'OpenCV', 'LangChain', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
  },
  {
    title: 'AI Assistants',
    icon: 'bot',
    items: ['ChatGPT', 'Claude', 'Cursor', 'GitHub Copilot', 'Codex', 'Gemini', 'Perplexity', 'NotebookLM'],
  },
  {
    title: 'Web & APIs',
    icon: 'web',
    items: ['REST API integration', 'Firebase Firestore', 'WordPress', 'Dashboards', 'PWA', 'Microfrontends', 'Responsive web'],
  },
  {
    title: 'Tools & Process',
    icon: 'tools',
    items: ['Git', 'GitLab', 'Azure DevOps', 'Jira', 'Trello', 'Jenkins', 'VS Code', 'Visual Studio', 'Agile/Scrum', 'QA collaboration'],
  },
  {
    title: 'Languages',
    icon: 'lang',
    items: ['English — C1', 'Spanish — A2'],
  },
];

export const projects: Project[] = [
  {
    name: 'Clinical Trial AI Support System',
    org: 'IIS Galicia Sur',
    tag: 'AI · Healthcare',
    desc: 'RAG and LLM workflows using vector databases, APIs, prompt design and local/API models with structured retrieval for clinical-trial information access.',
    stack: ['RAG', 'Vector DBs', 'LLMs', 'Python'],
    href: '#contact',
    target: '_self',
  },
  {
    name: 'Symbion Mobile App',
    org: 'TEO International',
    tag: 'Mobile · IoT',
    desc: 'React Native app for an IoT office door-lock system, operating locks through Android and iOS.',
    stack: ['React Native', 'IoT', 'iOS', 'Android'],
    href: 'https://teo.dk/en/home/',
    target: '_blank',
  },
  {
    name: 'ShareLocks Control Panel',
    org: 'TEO International',
    tag: 'Web · Admin',
    desc: 'React control panel for managing locks, users and organizations with backend access-control workflows.',
    stack: ['React', 'TypeScript', 'REST APIs'],
    href: 'https://teo.dk/en/home/',
    target: '_blank',
  },
  {
    name: 'Stratex Workforce Management',
    org: 'Alberuni Technologies',
    tag: 'Web · Enterprise',
    desc: 'Workforce system for HR, field-service management, scheduling, forecasting, budgeting and analytics.',
    stack: ['React', 'Ant Design', 'Microfrontends'],
    href: 'https://www.stratex.nl',
    target: '_blank',
  },
  {
    name: 'VANGO Luggage Transfer',
    org: 'IneffableDevs',
    tag: 'Web · Logistics',
    desc: 'User and driver web-app workflows for a luggage-transfer platform with separate customer, driver and operations flows.',
    stack: ['React', 'Formik', 'Material UI'],
    href: 'https://www.ineffabledevs.org/',
    target: '_blank',
  },
  {
    name: 'Pak Future PWA',
    org: 'TIPS x NR Soft',
    tag: 'Web · PWA',
    desc: 'Student-counseling progressive web app with institute information and social-emotional learning support.',
    stack: ['React', 'Firebase', 'PWA'],
    href: 'https://www.nrsofts.com/',
    target: '_blank',
  },
];

export const degrees: Degree[] = [
  {
    period: '2024 — 2026',
    title: 'M.S. in Artificial Intelligence',
    org: 'Universidade de Santiago de Compostela',
    orgUrl: 'https://www.usc.gal/es',
    desc: 'Graduated July 2026. Machine learning, deep learning, NLP, LLM systems, computer vision, biomedical image analysis, robotics/planning and AI research methodology.',
    thesis:
      'Image homogenization and domain adaptation to improve generalizability of ML models in fetal medicine.',
  },
  {
    period: '2017 — 2021',
    title: 'B.S. in Computer Science',
    org: 'Federal Urdu University of Arts, Science & Technology',
    orgUrl: 'https://fuuast.edu.pk/',
    desc: 'Specialization in Software Systems — software engineering, databases, algorithms, requirements analysis, web and mobile development.',
    badges: ['Gold Medalist', 'CGPA 3.84 / 4.00', 'Topper 2018–2021'],
  },
];

export const certifications = 'MERN Stack Developer · React Developer (W3Schools)';
export const training =
  'Research Data Management — EP PerMed & ELIXIR, ANR Paris. Responsible biomedical data use, data sharing and personalised healthcare.';

export const contactSocials: SocialLink[] = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'email' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'ashmunir', href: profile.github, icon: 'github' },
  { label: 'AyeshaMunirS', href: profile.githubSecondary, icon: 'github', muted: true },
];
