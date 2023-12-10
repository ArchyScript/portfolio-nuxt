interface Experience {
  name: string
  desc: string
  tags: string[]
  links: {
    name: string
    url: string
  }[]
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
    description: `I embarked on my exploration into the technology and programming space in February 2020, focusing on web development with HTML/CSS. Transitioned to JavaScript in April 2020, built projects, and ultimately chose 
      <a href="https://vuejs.org/" target="_blank" class="text-orange hover:opacity-80"> Vue.js  </a>
     as my primary and preferred frontend framework.`,
  },
  {
    name: "B.Sc in Architecture",
    type: "Educational",
    role: "Architect-in-Training",
    workArrangement: "Onsite",
    duration: "January 2020 — Present",
    description: `Pursuing a B.Sc in Architecture at
      <a href="https://oauife.edu.ng/" target="_blank" class="text-orange hover:opacity-80"> OAU  </a>,
     blending architectural principles with technology. As an architect-in-training, I refine problem-solving skills, infusing innovation and user-centricity into frontend designs. My educational journey fosters a unique perspective for a holistic approach to work.`,
  },
  {
    name: "Osun State College of Technology",
    type: "Educational",
    role: "Computer Science Student",
    workArrangement: "Onsite",
    duration: "January 2018 — August 2019",
    description: `Attended a College of Technology for a National Diploma in Computer Science. Completed the program in two years, gaining comprehensive knowledge and skills in computer science.`,
  },
  {
    name: "Developer Student Club OAU",
    type: "Extracurricular",
    role: "Member",
    workArrangement: "Hybrid",
    duration: "Ongoing",
    description: `Active member of the Developer Student Club (DSC) at OAU, participating in various tech-related activities and events.`,
  },
  /* 
  {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    description: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    description: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    description: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    description: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    description: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    description: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    description: ``,
  }, {
    name: "",
    type: "",
    role: "",
    workArrangement: "",
    duration: "June 2023 — August 2023",
    description: ``,
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
