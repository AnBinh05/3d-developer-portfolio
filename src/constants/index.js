import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Cloud & DevOps",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Algorithms & Problem Solving",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Science Major",
    company_name: "Vietnam-Korea University (VKU)",
    icon: starbucks,
    iconBg: "#1d1836",
    date: "Sep 2023 - Present (Graduation: Jun 2028)",
    points: [
      "Studying Computer Science and Software Engineering fundamentals with strong academic commitment.",
      "In-depth focus on Data Structures & Algorithms, Object-Oriented Programming, and Database Architecture (MySQL / PostgreSQL).",
      "Collaborating with classmates on real-world team projects and technical research.",
      "Learning Japanese (JLPT N3 level preparation) alongside technical English proficiency.",
    ],
  },
  {
    title: "Robocar Contest - 4th Place Award",
    company_name: "VKU Technology Contest",
    icon: tesla,
    iconBg: "#383E56",
    date: "April 2025",
    points: [
      "Secured 4th place in the annual VKU Robocar engineering competition.",
      "Collaborated with team members on control algorithms, sensor integration, and performance optimization.",
      "Demonstrated strong problem-solving skills under high-pressure competitive environments.",
      "Applied structured code practices and Git version control across team branches.",
    ],
  },
  {
    title: "Spring Boot & Software Engineering",
    company_name: "Udemy & Certified Training",
    icon: shopify,
    iconBg: "#1d1836",
    date: "July 2025",
    points: [
      "Mastered building enterprise-grade software services with Java & Spring Boot framework.",
      "Designed RESTful API architectures, JWT-based authentication, and relational database integrations.",
      "Implemented API documentation with Swagger/OpenAPI and automated request testing via Postman.",
      "Practiced Clean Architecture, SOLID design principles, and scalable system design.",
    ],
  },
  {
    title: "AWS Cloud & Professional Certifications",
    company_name: "Credly & AWS Training",
    icon: meta,
    iconBg: "#383E56",
    date: "Nov 2025 - Dec 2025",
    points: [
      "Achieved Credly Digital Badges in Web Development Fundamentals and Project Management Fundamentals.",
      "Completed 'DevOps on AWS for Beginner' course covering AWS EC2, S3, IAM, and CI/CD pipelines.",
      "Participated in VKU 'AI FOR LIFE' 2025 contest exploring AI and cloud application integrations.",
      "Continuously honing skills to build secure, robust, and highly available web infrastructure.",
    ],
  },
];

const certificates = [
  {
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild (Credly Verified)",
    issue_date: "Nov 2025",
    description:
      "Demonstrates core knowledge of web development concepts, building responsive & interactive websites with HTML, CSS, JavaScript, and understanding modern deployment and testing workflows.",
    badge_url:
      "https://images.credly.com/images/0c1c6eed-818c-4f78-bfaa-7ea8704c863a/linkedin_thumb_image.png",
    credential_link:
      "https://www.credly.com/badges/ace9a3bd-89e1-43aa-a95b-f47238d740e6/public_url",
  },
  {
    title: "Project Management Fundamentals",
    issuer: "IBM SkillsBuild (Credly Verified)",
    issue_date: "Dec 2025",
    description:
      "Demonstrates mastery of project lifecycles (Initiate, Plan, Execute, Monitor & Close), deliverables including Project Charter, Work Breakdown Structure (WBS), Risk & Quality Management.",
    badge_url:
      "https://images.credly.com/images/a4f13de3-9fc7-4d94-8f31-076999c2d06e/linkedin_thumb_BadgeEmblem_ProjectManagementFundamentals.png",
    credential_link:
      "https://www.credly.com/badges/6d728048-8b38-495e-b979-a6c5dff2f0b7/public_url",
  },
  {
    title: "DevOps on AWS for Beginner",
    issuer: "DevOpsEdu.vn",
    issue_date: "Dec 2025",
    description:
      "Course completion certificate covering Cloud computing fundamentals, AWS core services (EC2, S3, IAM), Docker containerization, and automated CI/CD deployment pipelines.",
    badge_url:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png",
    credential_link:
      "https://devopsedu.vn/certificate?cert_hash=d743e34f39753048",
  },
];

const testimonials = certificates;

const projects = [
  {
    name: "Spring Boot Enterprise API",
    description:
      "Scalable RESTful API service built with Java & Spring Boot, implementing JWT authentication, role-based access control, MySQL/PostgreSQL persistence, and Swagger documentation.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AnBinh05",
  },
  {
    name: "Cloud & DevOps Web App",
    description:
      "Modern web application containerized with Docker, deployed on AWS Cloud (EC2, S3), featuring CI/CD pipeline automation and secure cloud storage management.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AnBinh05",
  },
  {
    name: "Algorithm & Intelligent System",
    description:
      "Competitive programming and algorithmic solution suite developed for contests (VKU Robocar 4th Place, AI For Life), focusing on efficiency and data structures.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "algorithms",
        color: "green-text-gradient",
      },
      {
        name: "cpp",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AnBinh05",
  },
];

export { services, technologies, experiences, testimonials, certificates, projects };
