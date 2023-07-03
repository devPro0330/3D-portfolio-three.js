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
  company,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Full-Stack Developer",
    company_name: "Freelance",
    icon: company,
    iconBg: "#E6DEDD",
    date: "04/2020 - PRESENT",
    points: [
      "Contributed to the development of a continuous integration and deployment (CI/CD) pipeline that incorporated unit testing, resulting in faster turnaround times by 40% for bug fixes and new features.",
      "Developed single page websites for customers using React.js, Next.js, Vue.js and Node.js.",
      "Implemented a React.js-based payment processing system for an online retailer that improved their payment processing speed and reduced fraud risk.",
    ],
  },
  {
    title: "Senior Full-Stack Developer",
    company_name: "Cloud Ten Labs",
    icon: company,
    iconBg: "#383E56",
    date: "06/2018 - 03/2020",
    points: [
      "Developed a React.js-based e-commerce website that significantly increased online sales and customer satisfaction, resulting in a 30% growth in revenue within 6 months.",
      "Collaborated with development teams to identify and resolve complex code issues, utilizing both manual and automated testing techniques to ensure high-quality software products.",
      "Mentored and Oversaw 7 new team members and junior developers, instructing them on the day-to-day working, best practices and modern technologies.",
      "Created a Vue.js-based customer service portal for a financial services company that significantly reduced the time required to resolve customer issues and improved customer satisfaction.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "ArcherMind Tech",
    icon: company,
    iconBg: "#E6DEDD",
    date: "11/2015 - 04/2018",
    points: [
      "Implemented a React.js-based dashboard for a financial company that streamlined their shipping and tracking processes, resulting in a 27% reduction in delivery time and improved customer satisfaction.",
      "Developed a custom JavaScript library that improved the functionality of a web application, resulting in a 15% increase in user engagement.",
      "Implemented a responsive design for a web application using React.js that improved the user experience and led to a 35% increase in user retention.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Shinetech Software Inc.",
    icon: company,
    iconBg: "#383E56",
    date: "09/2013 - 10/2015",
    points: [
      "Developed a responsive e-commerce website using PHP and MySQL that increased online sales by 50% over the course of a year.",
      "Developed a C# desktop application for a medical research team that improved the efficiency of data analysis and led to more accurate research findings.",
      "Created a Java-based inventory management system for a retail store that reduced inventory errors by 78% and saved the company thousands of dollars in lost revenue.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Doug proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Doug does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Doug optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
