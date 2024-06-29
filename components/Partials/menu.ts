export type MenuTypes = {
  title: string
  link: string
  icon: string
}
export type NavLinkTypes = {
  title: string
  route: string
}

export const nav: NavLinkTypes[] = [
  { title: "Welcome", route: "welcome" },
  { title: "About", route: "about" },
  { title: "Tools", route: "tools" },
  { title: "Experience", route: "experience" },
  { title: "Works", route: "works" },
  { title: "Contact", route: "contact" },
]

export const menu: MenuTypes[] = [
  {
    title: "Github",
    icon: "github",
    link: "https://github.com/ArchyScript",
  },
  {
    title: "Whatsapp",
    icon: "whatsapp",
    link: "https://api.whatsapp.com/send?phone=2349073457307",
  },
  {
    title: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/archyscript/",
  },
  {
    title: "Gitlab",
    icon: "gitlab-outlined",
    link: "https://gitlab.com/ArchyScript",
  },
  {
    title: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/archyscript/",
  },
  {
    title: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/ArchyScript",
  },
]
