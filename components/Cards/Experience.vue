<template>
  <div
    class="flex items-center space-x-3 sm:space-x-6 md:space-x-10 min-w-full"
  >
    <div class="card-circle">
      {{ index < 9 ? `0${+index + 1}` : +index + 1 }}
    </div>

    <div class="card" data-aos-duration="500">
      <div class="space-y-1.5">
        <div class="space-y- tracking-wide">
          <h3 class="text-white opacity-90 font-medium md:text-xl">
            {{ experience.name }}
          </h3>
          <p class="text-xs sm:text-sm text-main font-thin">
            {{ experience.role }}
          </p>
        </div>

        <!-- description -->
        <div class="mt-2">
          <p
            class="block md:hidden text-sm md:text-base desc"
            v-html="experience.description.sm"
          ></p>
          <p
            class="hidden md:block text-sm md:text-base desc"
            v-html="experience.description.lg"
          ></p>
        </div>

        <div
          class="pt-2 flex items-center flex-wrap text-xs sm:text-sm space-x-4 space-y-2 sm:space-y-0 sm:space-x-6"
        >
          <span>
            {{ experience.type }}
          </span>

          <span>|</span>

          <span>
            {{ experience.workArrangement }}
          </span>

          <span>|</span>

          <p>
            {{ experience.duration }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    experience: {
      type: Object,
      default: {},
    },
    index: {
      type: String,
      default: 0,
    },
  })
</script>

<style scoped>
  .card {
    @apply w-full rounded-md bg-semi-dark border border-gray flex flex-col items-center justify-between md:flex-row p-4 md:p-8 text-gray;
  }

  .card-circle {
    @apply text-main text-xs sm:text-sm  md:text-xl font-bold border border-gray flex items-center justify-center rounded-full bg-semi-dark flex-shrink-0 h-8 w-8 md:h-16 md:w-16;
  }
</style>
