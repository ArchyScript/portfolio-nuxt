<template>
  <section id="experience">
    <UITitle title="My Experience" />

    <div class="relative -ml-3 sm:ml-0">
      <div
        class="absolute z-0 border-r border-main ml-4 md:ml-8 top-14 bottom-14"
      ></div>

      <div class="relative z-10 flex flex-col space-y-4">
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
</script>
