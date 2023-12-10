<template>
  <nav
    aria-label="site"
    class="fixed overflow-auto h-full z-50 border-l border-secondary hidden md:flex min-w-[60px] justify-between items-center font-Chakra py-6 top-0 md:right-0 right-5 !text-secondary flex-col space-y-8"
  >
    <ul class="space-y-4 pt-2 links">
      <li class="nav-link">
        <a href="/#about">About</a>
      </li>
      <li class="nav-link">
        <a href="/#tools">Tools</a>
      </li>
      <li class="nav-link">
        <a href="/#experience">Experience</a>
      </li>
      <li class="nav-link">
        <a href="/#works">Work</a>
      </li>
      <li class="nav-link">
        <a href="/#contact">Contact</a>
      </li>
    </ul>

    <div class="mt-auto flex-col flex">
      <a class="nav-link" href="mailto:archyscript@gmail.com">
        archyscript@gmail.com
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import gsap from "gsap"
  const activeLink = ref("")

  const setActiveLink = (link: string) => {
    activeLink.value = link
  }
  onMounted(() => {
    gsap.fromTo(
      ".nav-link",
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.35,
        delay: 1.75,
        ease: "linear",
      }
    )

    // // Check the active link on initial load
    // setActiveLink(getActiveLink());
    // // Add a scroll listener to update the active link on scroll
    // window.addEventListener('scroll', () => {
    //   setActiveLink(getActiveLink());
    // });
  })

  onMounted(() => {
    gsap.fromTo(
      ".nav-link",
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.35,
        delay: 1.75,
        ease: "linear",
      }
    )
  })
</script>

<style scoped lang="scss">
  a {
    writing-mode: vertical-rl;
    transition: all 0.25s;
  }
  li {
    display: block;
    margin: 0px 0px 0px 0px;
    writing-mode: vertical-rl;
  }
  li:not(:first-child) {
    padding: 30px 0px 0px 0px;
  }
</style>

<style scoped>
  .nav-link {
    @apply transition-all duration-300 cursor-pointer hover:text-orange;
  }
  .nav-link:hover {
    transform: scale(1.1) !important;
  }
  .nav-link-active {
    @apply text-white;
  }
</style>
