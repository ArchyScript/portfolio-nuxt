<template>
  <section
    id="contact"
    class="text-secondary flex justify-center items-center flex-col py-16"
  >
    <div class="flex-col center">
      <div
        class="text-center max-w-xl flex flex-col space-y-4 sm:space-y-6 items-center"
      >
        <p class="text-lg sm:text-xl">That's all folks</p>

        <p class="text-3xl sm:text-4xl md:text-6xl font-bold text-orange">
          Get in Touch
        </p>

        <p class="text-lg sm:text-xl">
          If you would love to work with me, collaborate on a project or just
          say "Hello"
        </p>

        <p>
          <a class="!mt-5" href="mailto:archyscript@gmail.com">
            <UIButton text="GET IN TOUCH" />
          </a>
        </p>
      </div>

      <!-- <p class="animated-text text-2xl py-16 font-bold">
        Le agradezco de antemano
      </p> -->
    </div>
  </section>
</template>

<script setup lang="ts">
  // const mql = window.matchMedia("(max-width: 700px)");

  // const show = ref(mql.matches);
</script>

<style scoped>
  @keyframes moveFromRightToLeft {
    0% {
      transform: translateX(100%) translateY(0);
      opacity: 0;
      color: var(--orange);
    }
    10%,
    90% {
      transform: translateX(0) translateY(-20px);
      opacity: 1;
    }
    20%,
    80% {
      opacity: 1;
      transform: translateX(0) translateY(0);
    }
    30%,
    70% {
      transform: translateX(-20px) translateY(-10px);
    }
    40%,
    60% {
      transform: translateX(0) translateY(-10px);
    }
    50% {
      transform: translateX(0);
      color: var(--badge);
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
      color: var(--orange);
    }
  }

  .animated-text {
    white-space: nowrap;
    overflow: hidden;
    animation: moveFromRightToLeft 10s linear infinite;
  }
</style>
