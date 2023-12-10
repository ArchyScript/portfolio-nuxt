<template>
  <section id="experience">
    <UITitle title="My Experience" />

    <div class="relative">
      <div
        class="absolute z-0 border-r border-orange ml-4 top-14 bottom-14 md:ml-8"
      ></div>

      <div class="relative z-10 flex flex-col gap-4">
        <div
          class="flex items-center gap-2 md:gap-10"
          v-for="(experience, index) in experiences"
          :key="index"
        >
          <CardsExperience :experience="experience" :index="index" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { experiences } from "../db"

  //   import { experiences } from "@/composibles/experiences"
</script>

<!-- <style scoped>
  @import url("@/assets/styles/experience.css");
</style>

<style>
  .desc a {
    @apply text-orange;
  }
</style> -->
