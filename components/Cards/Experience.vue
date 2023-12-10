<template>
  <div class="flex items-center space-x-2 md:space-x-10 min-w-full">
    <div class="card-circle">
      {{ index < 9 ? `0${+index + 1}` : +index + 1 }}
      <!-- {{ index <= 9 ? `0${index}` : index }} -->
    </div>

    <div class="card" data-aos="fade-left" data-aos-duration="500">
      <div class="flex items-center gap-4 md:gap-10">
        <div class="space-y-1.5">
          <div class="space-y- tracking-wide">
            <h3 class="text-white opacity-90 font-medium md:text-xl">
              {{ experience.name }}
            </h3>
            <p class="text-sm text-orange font-thin">
              {{ experience.role }}
            </p>
          </div>

          <div
            class="mt-2 text-sm md:text-base desc"
            v-html="experience.description"
          ></div>

          <div class="pt-2 flex items-center text-sm space-x-6">
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
    <!-- <div
          class="flex items-center gap-2 md:gap-10"
          v-for="(experience, n) in experiences"
          :key="n"
        >
          <div class="card-circle">0{{ n }}</div>
          <div class="card" data-aos="fade-left" data-aos-duration="500">
            <div class="flex items-center gap-4 md:gap-10">
              <div>
                <div class="text-white opacity-90 font-medium md:text-xl">
                  {{ experience.title }}
                  <span v-if="experience.link">
                    (
                    <a
                      :href="experience.link.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="font-bold text-orange"
                      >{{ experience.link.name }}</a
                    >
                    )
                  </span>
                </div>
                <div
                  class="mt-2 text-sm md:text-base desc"
                  v-html="experience.desc"
                ></div>
              </div>
            </div>
          </div>
        </div> -->
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
    @apply w-full rounded-md bg-badge border border-secondary flex flex-col items-center gap-4 justify-between p-4 md:flex-row md:gap-10 md:p-8 text-secondary;
  }

  .card-circle {
    @apply text-white text-sm font-bold border border-secondary flex items-center justify-center rounded-full bg-badge flex-shrink-0 h-8 w-8 md:text-xl md:h-16 md:w-16;
  }
</style>
