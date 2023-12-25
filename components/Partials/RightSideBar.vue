<template>
  <nav
    class="fixed overflow-auto h-full z-50 border-l border-secondary hidden md:flex min-w-[60px] justify-between items-center py-6 top-0 md:right-0 right-5 !text-secondary flex-col space-y-12"
  >
    <div class="space-y-8 pt-4">
      <span class="nav-link">
        <a href="/#about">About</a>
      </span>
      <span class="nav-link">
        <a href="/#tools">Tools</a>
      </span>
      <span class="nav-link">
        <a href="/#experience">Experience</a>
      </span>
      <span class="nav-link">
        <a href="/#works">Work</a>
      </span>
      <span class="nav-link">
        <a href="/#contact">Contact</a>
      </span>
    </div>

    <div class="mt-auto flex-col flex">
      <a class="nav-link" href="mailto:archyscript@gmail.com">
        archyscript@gmail.com
      </a>
    </div>

    <!-- 
      
     -->
  </nav>
</template>

<script setup lang="ts">
  import gsap from "gsap"

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

<style scoped>
  .nav-link {
    @apply transition-all duration-300 cursor-pointer   hover:text-orange text-sm;
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
