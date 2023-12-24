<template>
  <nav
    aria-label="social links"
    class="fixed h-full z-50 overflow-auto border-secondary hidden md:flex min-w-[60px] items-center py-5 top-0 border-r md:left-0 left-5 flex-col"
  >
    <nuxt-link to="/" class="mb-10">
      <img
        class="img h-10 w-10 rounded-full cursor-pointer"
        src="~/assets/images/me.png"
        alt="Headshot"
      />
    </nuxt-link>

    <div class="mt-auto space-y-8 flex-col flex pb-4">
      <a
        v-for="(menuLink, index) in menuLinks"
        :key="`${menuLink.title}_${index}`"
        :href="menuLink.link"
        target="_blank"
        rel="noopener noreferrer"
        :title="menuLink.title"
        class="text-secondary !hover:text-orange"
      >
        <Icons :title="menuLink.icon" class="text-xl" />
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
