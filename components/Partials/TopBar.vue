<template>
  <div class="flex md:hidden w-full">
    <nav
      id="header"
      class="bg-[#211e25c6] top-0 w-full px-4 py-1.5 sm:py-2 z-30 select-none block fixed shadow-ef fect transition-all duration-500"
      :class="showMenu ? 'shadow' : 'shadow-md'"
    >
      <div
        class="container flex flex-wrap items-center justify-between py-1 px-2.5 sm:px-4 mx-auto md:flex-row max-w-7xl"
      >
        <a href="#" class="transition-all duration-300 text-gray z-30">
          <nuxt-link to="/">
            <img
              class="h-10 w-10 sm:h-12 sm:w-12 cursor-pointer"
              src="~/public/images/logo.svg"
              alt="ArchyScript"
            />
          </nuxt-link>
        </a>

        <div class="z-30">
          <span
            @click="toggleMenu"
            class="text-3xl sm:text-4xl text-gray before:text-gray after:text-gray"
          >
            <Icons :title="showMenu ? 'close' : 'menu'" />
          </span>
        </div>
      </div>
    </nav>

    <transition appear @enter="enter" @before-enter="beforeEnter" :css="false">
      <div
        v-if="showMenu"
        class="navMenu w-full space-y-20 fixed bg-dark inset-0 h-full px-4 py-20 z-20 overflow-auto"
      >
        <div class="flex flex-col items-center space-y-4 pt-6">
          <span
            v-for="(navLink, index) in navLinks"
            :key="`${navLink.title}_${index}`"
            @click="close"
          >
            <a
              :href="navLink.href"
              rel="noopener noreferrer"
              class="text-gray !hover:text-main text-xl font-bold"
            >
              {{ navLink.title }}
            </a>
          </span>
        </div>

        <div
          class="menu-link space-x-4 sm:space-x-6 items-center justify-center flex"
        >
          <span
            v-for="(menuLink, index) in menuLinks"
            :key="`${menuLink.title}_${index}`"
          >
            <a
              :href="menuLink.link"
              target="_blank"
              rel="noopener noreferrer"
              :title="menuLink.title"
              class="text-gray !hover:text-main"
            >
              <Icons
                :title="menuLink.icon"
                class="text-lg sm:text-xl !hover:text-main"
              />
            </a>
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import gsap from "gsap"
  import { menu, nav } from "./menu"
  const menuLinks = ref(menu)
  const navLinks = ref(nav)

  const showMenu = ref(false)
  const toggleMenu = () => {
    if (!showMenu.value) return (showMenu.value = !showMenu.value)

    close()
  }
  const beforeEnter = (el: any) => {
    el.style.opacity = 0
    el.style.transform = "translateX(-100px)"
  }

  const enter = (el: any, done: any) => {
    gsap
      .to(el, {
        opacity: 1,
        x: 0,
        duration: 0.25,
        onComplete: done(),
      })
      .then(() => {
        gsap.fromTo(
          "li",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.25, ease: "linear", duration: 0.25 }
        )
      })
  }

  const close = () => {
    gsap.to(".navMenu", { opacity: 0, x: -100, duration: 0.25 }).then(() => {
      showMenu.value = false
    })
  }
  onMounted(() => {
    gsap.fromTo(
      "nav",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        // duration: 0.35,
        delay: 1.65,
        ease: "linear",
      }
    )

    topBarScroll()
  })
</script>
