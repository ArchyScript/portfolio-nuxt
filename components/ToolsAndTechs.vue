<template>
  <section id="tools" class="space-y-8">
    <!-- <UITitle title="Tools and Technologies" /> -->

    <UITabs :tabs="librariesAndFrameworks" @select="handleSelectActiveTab" />

    <div>
      <div
        class="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center w-full flex-wrap"
      >
        <div
          v-for="(tech, index) in computedTechAndTools"
          :key="index"
          class="flex justify-center items-center flex-col space-y-1.5 rounded-md p-1.5 sm:p-2 md:p-3 w-20 h-20 md:w-24 md:h-24 border border-gray border-opacity-50"
        >
          <Icons :title="tech.icon" class="text-2xl sm:text-3xl md:text-4xl" />

          <p class="text-xs sm:text-sm text-gray">
            {{ tech.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import gsap from "gsap"
  import { librariesAndFrameworks, toolsAndFrameworks } from "~/db/techs"

  const activeTab = ref("All")
  const handleSelectActiveTab = (active_tab: string) => {
    activeTab.value = active_tab
  }

  const computedTechAndTools = computed(() => {
    if (activeTab.value === "All") return toolsAndFrameworks
    return toolsAndFrameworks.filter(
      (item) => item.category === activeTab.value
    )
  })

  onMounted(() => {
    gsap.fromTo(
      ".icons",
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

<style scoped lang="scss">
  #about {
    color: var(--gray);
    .inner {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-gap: 50px;

      @media (max-width: 768px) {
        @apply flex flex-col justify-center items-center;
      }
    }
  }
</style>
