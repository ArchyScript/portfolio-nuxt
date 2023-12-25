export type MenuTypes = {
  title: string
  link: string
  icon: string
}
export type NavLinkTypes = {
  title: string
  href: string
}

export const nav: NavLinkTypes[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Tools",
    href: "#tools",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Works",
    href: "#works",
  },
  {
    title: "Contact",
    href: "#contact",
  },
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
