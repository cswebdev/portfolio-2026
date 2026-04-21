// Constants and configuration
export const SOCIAL_LINKS = {
  github: 'https://github.com/cswebdev',
  linkedin: 'https://www.linkedin.com/in/christian-snider',
  twitter: '',
  email: 'cswebdev91@gmail.com',
};

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// Hero Section Data
export const HERO_DATA = {
  name: 'Christian Snider',
  title: 'A Full-Stack Developer with a passion for Front-End Development',
  yearsOfExperience: '3+',
  location: 'South Carolina, USA',
  availability: 'Open to Remote and On-Site Opportunities',
  resumeUrl: '/resume.pdf',
  cta: {
    primary: { text: 'View My Work', href: '#projects' },
    resume: { text: 'Get My Resume', href: '/resume.pdf' },
    secondary: { text: 'Get In Touch', href: '#contact' },
  },
};

// About Section Data


// Project section Data
export const PROJECTS_DATA = [
  {
    title: 'Project One',
    description: 'A brief description of Project One, highlighting key features and technologies used.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/project1.png',
    githubLink: '', // Link to GitHub repository
    demoLink: '', // Optional: Link to live demo (GitHub Pages, Vercel, Netlify, etc.)
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two, highlighting key features and technologies used.',
    technologies: ['Angular', 'Express', 'MySQL'],
    image: '/images/project2.png',
    githubLink: '',
    demoLink: '',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three, highlighting key features and technologies used.',
    technologies: ['Vue', 'Firebase'],
    image: '/images/project3.png',
    githubLink: '',
    demoLink: '',
  },
]; 
  


// Experience Section Data
export const EXPERIENCE_DATA = [
  {
    company: 'ATHI Software',
    role: 'Front-End Developer',
    employmentType: 'Contract',
    duration: 'August 2025 - Present',
    description: 'Developed and maintained responsive web applications using React, TypeScript, and Tailwind CSS for various client projects.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
  },
  {
    company: 'Cherry Social', 
    role: 'Backend-Developer',
    employmentType: 'Volunteer',
    duration: 'January 2025 - June 2025',
    description: 'Contributed to the development of a social media platform for local communities, focusing on backend API development and database management.',
    technologies: ['Django', 'Python', 'Docker', 'PostgreSQL', 'Git'],
  },
  {
    company: 'Carolina Code School',
    role: 'Teaching Assistant',
    employmentType: 'Part-Time',
    duration: 'May 2024 - July 2024',
    description: 'Assisted students in learning web development concepts, provided code reviews, and supported operations for social media and marketing efforts by writing weekly blog posts for Linkedin and email newsletters.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Git'],
  }, 
  {
    company: 'Interconnected Collective', 
    role: 'Front-End Developer',
    employmentType: 'Volunteer',
    duration: 'March 2024 - May 2024',
    description: 'Collaborated on the development of a non-profit website, implementing responsive design to showcase the organization\'s project to develop interactive experiences for the 2024 Lesbians who Tech and Allies Conference.',
    technologies: ['React', 'JavaScript', 'CSS', 'Git'],
  }, 
  {
    company: 'Booz Allen Hamilton',
    role: 'Software Engineer Intern',
    employmentType: 'Internship',
    duration: 'June 2023 - August 2023',
    description: 'Worked on cross-functional teams to develop a web applications for various government clients, utilizing Agile methodologies and modern web technologies to deliver high-quality solutions.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'JavaScript', 'Git'],
  }
];