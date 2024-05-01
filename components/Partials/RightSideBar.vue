<template>
  <nav
    class="fixed overflow-auto h-full z-50 border-l border-gray hidden md:flex min-w-[60px] justify-between items-center py-6 top-0 md:right-0 right-5 !text-gray flex-col space-y-12"
  >
    <div class="space-y-8 pt-4">
      <span
        class="nav-link"
        v-for="(navLink, index) in navLinks"
        :key="`${navLink.title}-${index}`"
      >
        <a :key="index" :href="`#${navLink.route}`"> {{ navLink.title }} </a>
      </span>
    </div>

    <div class="mt-auto flex-col flex">
      <a class="nav-link" href="mailto:archyscript@gmail.com">
        archyscript@gmail.com
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import gsap from "gsap"
  import { useActive } from "vue-use-active-scroll"

  const NavActions = ref([
    { title: "Home", route: "home" },
    { title: "About", route: "about" },
    { title: "Tools", route: "tools" },
    { title: "Experience", route: "experience" },
    { title: "Works", route: "works" },
    { title: "Contact", route: "contact" },
  ])

  const targets = computed(() =>
    NavActions.value.map(({ route }: any) => route)
  )
  const { activeId } = useActive(targets)

  // onMounted(() => {
  //   gsap.fromTo(
  //     ".nav-link",
  //     { opacity: 0, x: 20 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       stagger: 0.2,
  //       duration: 0.35,
  //       delay: 1.75,
  //       ease: "linear",
  //     }
  //   )
  // })
</script>

<style scoped>
  .nav-link {
    @apply transition-all duration-300 cursor-pointer font-medium hover:text-main hover:font-semibold  text-sm;
  }
  .nav-link.active {
    @apply font-bold;
  }
  .nav-link:hover {
    transform: scale(1.1) !important;
  }
  .nav-link > a {
    writing-mode: vertical-rl;
    transition: all 0.25s;
    padding: 0 0.5rem;
  }
  .nav-link {
    display: block;
    margin: 0px 0px 0px 0px;
    writing-mode: vertical-rl;
  }
</style>
