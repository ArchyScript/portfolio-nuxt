<template>
  <div
    class="container max-w-[1200px] mx-auto flex justify-center items-center flex-col w-full"
    ref="body"
  >
    <PartialsTopBar />
    <PartialsLeftSideBar />
    <PartialsRightSideBar />

    <div
      class="w-full h-full px-5 sm:px-8 md:px-20 lg:px-24 xl:px-6 py-4 md:py-0"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .layout-line {
    animation: grow 0.65s 1.5s 1 forwards;
  }
</style>
