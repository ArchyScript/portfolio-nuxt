interface ProjectInterface {
  name: string
  role: string
  description: string
  tags: string[]
  links: {
    title: string
    url: string
    icon: string
  }[]
  isClient: boolean
  isLive: boolean
  show: boolean
}

// https://archyscript-ultimate-react-dashboard.netlify.app
// https://github.com/ArchyScript/ultimate-react-dashboard

export const projects: Array<ProjectInterface> = [
  {
    name: "Transfer XO",
    role: "Frontend Developer",
    description: `TransferXO simplifies international money transfers with a user-friendly platform, offering competitive rates and low fees for individuals and businesses. Secure and efficient, it enables hassle-free transactions from anywhere, ensuring safety and convenience.`,
    tags: ["Nuxt", "Typescript", "Tailwind", "antdv", "Pinia"],
    links: [
      // {
      //   title: "Github",
      //   url: "",
      //   icon: "github",
      // },
      {
        title: "Live URL",
        url: "https://transferxo.com/",
        icon: "edit",
      },
    ],
    isClient: true,
    isLive: true,
    show: true,
  },
  {
    name: "Architecture Hub",
    role: "Fullstack developer",
    description: `Aims to connect architecture students through a dynamic social platform, fostering collaboration, opportunities and creative exploration within the field. `,
    tags: [
      "Vue",
      "Typescript",
      "Node",
      "Tailwind",
      "Express",
      "Cloudinary",
      "MongoDB",
      "Vuex",
    ],
    links: [
      {
        title: "Github",
        url: "https://architecture-hub.netlify.app/",
        icon: "github",
      },
      {
        title: "Live URL",
        url: "https://architecture-hub.netlify.app/",
        icon: "edit",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "CHATs",
    role: "Front End Developer",
    description:
      "With Convexity Humanitarian Aids Transfer Solution (CHATS), we believe in the potential of the blockchain for the benefit of society.",
    tags: ["Typescript", "Tailwind", "Nuxt"],
    links: [
      {
        title: "Live URL",
        url: "https://withconvexity.com/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "",
        icon: "github",
      },
    ],
    isClient: true,
    isLive: true,
    show: true,
  },
  {
    name: "Vessel Trust",
    role: "Front End Developer",
    description:
      "A well-documented and secure system that will help Trade Parties with credit, documents transfer, communication, and frictionless payment.",
    tags: ["Typescript", "Tailwind", "Nuxt"],
    links: [
      {
        title: "Live URL",
        url: "https://vesseltrust.com/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "",
        icon: "github",
      },
    ],
    isClient: true,
    isLive: true,
    show: true,
  },
  {
    name: "Netrepeneurs",
    role: "Front End Developer",
    description:
      "Collaborated on an online platform for entrepreneurs, ensuring responsiveness across devices with Vue, Tailwind, and Nuxt.",
    tags: ["Typescript", "Tailwind", "Nuxt"],
    links: [
      {
        title: "Live URL",
        url: "https://netrepeneurs.com/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: false,
    show: true,
  },
  {
    name: "Cowrywise Clone",
    role: "Front End Developer",
    description: `Developed a Cowrywise clone leveraging the same technology stack as the original platform, showcasing proficiency in replicating financial services interfaces within the chosen framework`,
    tags: ["Typescript", "Tailwind", "Nuxt"],
    links: [
      {
        title: "Live URL",
        url: "https://cowrywise-clone.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/cowrywise-clone",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Skrind",
    role: "Front End Developer",
    description: `combines disease info with an AI-powered DIY self-testing tool for at-home screening. We aim to raise awareness, enhance accessibility, and promote early detection.`,
    tags: ["Typescript", "Tailwind", "Nuxt"],
    links: [
      {
        title: "Live URL",
        url: "https://www.skrind.com",
        icon: "edit",
      },
      {
        title: "Github",
        url: "",
        icon: "github",
      },
    ],
    isClient: true,
    isLive: true,
    show: true,
  },
  {
    name: "Simple Calculator",
    role: "Web Developer",
    description:
      "Crafted a simple calculator capable of performing basic arithmetic operations using HTML, CSS, and Javascript.",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-simple-calculator.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/simple_calculator",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Portfolio",
    role: "Software Developer",
    description: `Crafted my portfolio to highlight web development expertise, showcasing proficiency in frontend technologies, design principles, and user experience. Features interactive interfaces and past project achievements.`,
    tags: ["Typescript", "Tailwind", "Nuxt"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Klienty",
    role: "Front End Developer",
    description:
      "Platform for selling services and digital skills online, managing customer information, orders, and providing clients with centralized access. Developed using Vue JS, Vuetify, and Bootstrap.",
    tags: ["Vue JS", "Vuetify", "Bootstrap"],
    links: [
      { title: "Live URL", url: "https://klienty.co/", icon: "edit" },
      { title: "Github", url: "", icon: "github" },
    ],
    isClient: true,
    isLive: true,
    show: true,
  },
  {
    name: "Responsive Dashboard",
    role: "Front End Developer",
    description: `Built a responsive dashboard with real-time insights and interactive visualizations. Seamlessly adapts to different screen sizes for an optimal and engaging user experience.`,
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://simple-responsive-dashboard.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/simple_responsive_dashboard",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Tic Tac Toe Game",
    role: "Web Developer",
    description:
      "A TIC TAC TOE game with player names, scores, and reset functionality.",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-tic-tac-toe-game.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/tic-tac-toe-game",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Typing Game",
    role: "Web Developer",
    description:
      "A typing game to improve users' typing skills with varying difficulty levels.",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-typing-game.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/typing_game",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Portfolio (Vuetify)",
    role: "Web Developer",
    description: "A portfolio project built using Vue JS and Vuetify.",
    tags: ["Vue JS", "Vuetify"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-portfolio.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/portfolio",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Random Quote Generator",
    role: "Web Developer",
    description: "Generates random quotes for users.",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-quote-generator.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/random_quote_generator",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Virtual Keyboard",
    role: "Web Developer",
    description:
      "A virtual keyboard allowing users to type words with customizable features.",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-virtual-keyboard.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/virtual_keyboard",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Length Converter",
    role: "Web Developer",
    description:
      "An app for basic unit conversion, allowing users to switch scales.",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-lenght-converter.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/length_converter",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Matrix Calculator",
    role: "Web Developer",
    description:
      "A simple app solving basic 3x3 matrix problems including determinant and inverse.",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-matrix-calculator.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/matrix_calculator",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Ludo Game",
    role: "Web Developer",
    description:
      "Initiated a Ludo Game project, currently abandoned with dummy data. Created to replicated the same experience as a physical version",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-ludo-game.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/ludo-game",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Cast NG",
    role: "Web Developer",
    description:
      "Developed Cast NG, a web application using HTML, CSS, Javascript, and Tailwind CSS.",
    tags: ["HTML", "CSS", "Javascript", "Tailwind"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-castng-clone.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/CastNG",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Promise Card",
    role: "Web Developer",
    description:
      "A simple promise card design with customizable background colors.",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-promise-card.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/promise_card",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
  {
    name: "Random Quote Generator",
    role: "Web Developer",
    description: "Generates random quotes for users.",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      {
        title: "Live URL",
        url: "https://archyscript-quote-generator.netlify.app/",
        icon: "edit",
      },
      {
        title: "Github",
        url: "https://github.com/ArchyScript/random_quote_generator",
        icon: "github",
      },
    ],
    isClient: false,
    isLive: true,
    show: true,
  },
]

/*   
  {
    name: "",
   role: "",
    description: ``,
    tags: ["Typescript", "Tailwind", "Nuxt"],
    links: [
      {
        title: "Live URL",
        url: "",
        icon: "edit",
      },
      {
        title: "Github",
        url: "",
        icon: "github",
      },
    ],
    isClient: true,
    isLive: true,
    show: true,
  },
 */
