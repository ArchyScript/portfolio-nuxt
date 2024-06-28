<template>
  <nav
    aria-label="social links"
    class="fixed h-full z-50 overflow-auto space-y-12 border-gray hidden md:flex min-w-[60px] justify-between items-center py-5 top-0 border-r md:left-0 left-5 flex-col"
  >
    <nuxt-link to="/">
      <img
        class="img h-10 w-10 xl:h-12 xl:w-12 cursor-pointer"
        src="~/public/images/logo.svg"
        alt="Headshot"
      />
    </nuxt-link>

    <div class="mt-auto space-y-8 flex-col flex pb-2">
      <a
        v-for="(menuLink, index) in menuLinks"
        :key="`${menuLink.title}_${index}`"
        :href="menuLink.link"
        target="_blank"
        rel="noopener noreferrer"
        :title="menuLink.title"
        class="text-gray"
      >
        <!-- hover:text-[#0060AA] -->
        <Icons :title="menuLink.icon" class="text-lg" />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import gsap from "gsap"
  import { menu } from "./menu"
  const menuLinks = ref(menu)

  onMounted(() => {
    gsap.fromTo(
      ".nav-icon",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.4,
        delay: 1.2,
        ease: "linear",
      }
    )
  })
</script>

<style scoped></style>
