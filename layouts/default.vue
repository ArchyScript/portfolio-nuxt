<template>
  <div
    class="container max-w-[1200px] mx-auto flex justify-center items-center flex-col w-full ove rflow-scroll"
    ref="body"
  >
    <!-- <Loader /> -->
    <PartialsTopBar />
    <PartialsLeftSideBar />
    <PartialsRightSideBar />

    <div class="w-full h-full px-[60px]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .layout-line {
    animation: grow 0.65s 1.5s 1 forwards;
  }

  /*
  @keyframes grow {
    from {
      opacity: 0;
      height: 0;
    }
    to {
      opacity: 1;
      height: 100%;
    }
  }

  @keyframes show {
    from {
      z-index: 0;
    }
    to {
      z-index: 3;
    }
  }
  */
</style>
