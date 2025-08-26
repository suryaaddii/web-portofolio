import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  php,
  tailwind,
  laravel,
  github,
  figma,
  rakamin,
  assalaam,
  core,
  teachme,
  landing,
  dashboard,
  mysql,
  inventory,
  majorney,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Frontend Engineer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "PT Rakamin Kolektif",
    icon: rakamin,
    iconBg: "#E3DEDD",
    date: "Aug 2023 - Feb 2024",
    points: [
      "Develop frontend developer of a website and application.",
      "Develop backend developer designs for applications or supporting infrastructure. ",
      "Responsible for company data management, including security, integrity and analysis.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Core Initiative Studio",
    icon: core,
    iconBg: "#383E56",
    date: "Feb 2024 - March 2024",
    points: [
      "Design website or application designs and develop them using several frontend web developer frameworks.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name:
      "PT Tiga Serangkai Pustaka Mandiri Group - Assalaam Hypermarket",
    icon: assalaam,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Analyzing website needs at PT Tiga Serangkai Pustaka Mandiri Group – Assalaam Hypermarket",
      "Redesign the Assalaam Hypermarket Website Landing Page",
      "Develop a website that prioritizes admin functions to be able to view the transaction history dashboard ",
      "Create an online new member registration system and a function for Assalaam Hypermarket clients or members to be able to access shopping history and total bonus points obtained during a certain period.",
    ],
  },
];

const projects = [
  {
    name: "Website Profil for Teachme Course Tutoring",
    description:
      "Create and develop a profile website for Teachme Course tutoring.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "red-text-gradient",
      },
    ],
    image: teachme,
    source_code_link: "https://github.com/",
  },
  {
    name: "Landing Page Assalaam Hypermarket",
    description: "Redesign the Assalaam Hypermarket Website Landing Page.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dashboard Admin Register Member Online",
    description:
      "Build a systematic website so that admins can have access to members.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/",
  },
  {
    name: "Inventory Management Stock System",
    description: "Develop stock inventory management features.",
    tags: [
      {
        name: "Express JS",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreeSQL",
        color: "pink-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: "https://github.com/",
  },
  {
    name: "Majorney AI Recommendation System",
    description:
      "Develop an AI-based web application that recommends study programs.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Laragon",
        color: "pink-text-gradient",
      },
    ],
    image: majorney,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
