<template>
  <div class="mb-12 flex items-center select-none">
    <div v-if="hasBothEnds" class="h-5 w-5 rounded-full bg-orange"></div>
    <div
      v-if="hasBothEnds"
      class="h-[1px] w-[8rem] bg-orange md:w-[12rem]"
    ></div>

    <div class="title__text !w-[18rem] rounded-md !md:w-[30rem] text-center">
      {{ title }}
    </div>

    <div class="h-[1px] w-[8rem] bg-orange md:w-[12rem]"></div>
    <div class="h-5 w-5 rounded-full bg-orange"></div>
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
    @apply text-orange border border-orange py-3 px-10 rounded  relative text-base md:text-lg;
  }
</style>
