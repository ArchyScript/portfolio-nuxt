<template>
  <div class="mb-12 flex items-center select-none">
    <div v-if="hasBothEnds" class="h-5 w-5 rounded-full bg-main"></div>
    <div
      v-if="hasBothEnds"
      class="h-[1px] w-[5rem] sm:w-[8rem] bg-main md:w-[12rem]"
    ></div>

    <div
      class="title__text w-[16rem] sm:w-[18rem] rounded-md !md:w-[30rem] text-center"
    >
      {{ title }}
    </div>

    <div class="h-[1px] w-[5rem] sm:w-[8rem] bg-main md:w-[12rem]"></div>
    <div class="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-full bg-main"></div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    hasBothEnds: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  })
</script>

<style scoped lang="scss">
  .title__text {
    @apply text-main font-semibold md:font-bold border border-main py-2.5 px-8  sm:py-3 sm:px-10 rounded  relative text-base md:text-lg;
  }
</style>
