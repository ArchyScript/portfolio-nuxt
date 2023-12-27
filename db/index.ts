interface Experience {
  name: string
  desc: string
  tags: string[]
  links: {
    name: string
    url: string
  }[]
  description: {
    sm: string
    lg: string
  }
  show: Boolean
}

// export const experiences: Array<Experience> = [
export const experiences = [
  {
    name: "Self Taught",
    type: "Tech Industry",
    role: "Software Developer",
    workArrangement: "Remote",
    duration: "February 2020 — Present",
    description: {
      sm: `Started web development in February 2020 with HTML/CSS, transitioned to JavaScript in April 2020, and chose Vue.js as my primary frontend framework.`,
      lg: `I embarked on my exploration into the technology and programming space in February 2020, focusing on web development with HTML/CSS. Transitioned to JavaScript in April 2020, built projects, and ultimately chose 
      <a href="https://vuejs.org/" target="_blank" class="text-main hover:opacity-80"> Vue.js  </a>
     as my primary and preferred frontend framework.`,
    },
  },
  {
    name: "B.Sc in Architecture",
    type: "Educational",
    role: "Architect-in-Training",
    workArrangement: "Onsite",
    duration: "January 2020 — Present",
    description: {
      sm: `Pursuing a B.Sc in Architecture at <a href="https://oauife.edu.ng/" target="_blank" class="text-main hover:opacity-80"> OAU  </a>,
       combining architectural principles with technology. As an architect-in-training, I focus on innovative and user-centric frontend designs.`,
      lg: `Pursuing a B.Sc in Architecture at
      <a href="https://oauife.edu.ng/" target="_blank" class="text-main hover:opacity-80 inline-flex"> OAU  </a>,
     blending architectural principles with technology. As an architect-in-training, I refine problem-solving skills, infusing innovation and user-centricity into frontend designs. My educational journey fosters a unique perspective for a holistic approach to work.`,
    },
  },
  {
    name: "Osun State College of Technology",
    type: "Educational",
    role: "Computer Science Student",
    workArrangement: "Onsite",
    duration: "January 2018 — August 2019",
    description: {
      sm: `Graduated with a National Diploma in Computer Science from a College of Technology in two years.`,
      lg: `Attended a College of Technology for a National Diploma in Computer Science. Completed the program in two years, gaining comprehensive knowledge and skills in computer science.`,
    },
  },
  {
    name: "Developer Student Club OAU",
    type: "Extracurricular",
    role: "Member",
    workArrangement: "Hybrid",
    duration: "Ongoing",
    description: {
      sm: `Active member of the Developer Student Club (DSC) at OAU, involved in tech-related activities.`,
      lg: `Active member of the Developer Student Club (DSC) at OAU, participating in various tech-related activities and events.`,
    },
  },
  {
    name: "Team Collaboration",
    type: "Professional Experience",
    role: "Software Developer",
    workArrangement: "Collaborative",
    duration: "Ongoing",
    description: {
      sm: `Actively contributing as a collaborative team member in software development.`,
      lg: `As a Software Developer within a professional team, I am not only technically proficient but also bring a wealth of experience as a dedicated team player. I have a proven track record of effective collaboration, having successfully contributed to collaborative software development initiatives in the past. Currently engaged in ongoing projects, I continue to actively participate in team discussions, value the insights of fellow developers, and foster an inclusive and collaborative environment. My commitment to effective team collaboration, developed through past experiences, remains a cornerstone of my approach as I contribute to creating positive and synergistic team dynamics.`,
    },
  },
  /* 
  {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    desc: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    desc: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    desc: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    desc: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    desc: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    desc: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    desc: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    desc: ``,
  },
   */
  // {

  //   name: "Personal Project",
  //   type: "Freelance",
  //   role: "Fullstack Developer",
  //   workArrangement: "Remote",
  //   duration: "June 2023 — August 2023",
  //   description: `Developed a personal fullstack project from scratch. Worked as a fullstack developer and designed the UI for a user-friendly experience. Built responsive front-end design components using Vue JS, Typescript, and Tailwind CSS. Used Vuex 4 for state management. Developed the backend API with Node and Express JS, utilizing MongoDB for the database and Cloudinary for file storage. Implemented collaboration and version control using Git. Hosted the frontend on Netlify and the backend on Heroku.`,
  // },
]

/* Developed a personal  fullstack project from scratch

Used git for collaboration and version control.
Worked as a fullstack developer on a personal project 
Designed the UI myself and made sure it is user friendly
Built responsive front end design components with Vue JS, Typescript and Tailwind CSS.
Used Vuex 4 for the state management
Built the backend API with Node and Express JS, MongoDB for the database and Cloudinary for file storage. 
Hosted the frontend on Netlify and the backend on Heroku.
Link - https://architecture-hub.netlify.app/ */
