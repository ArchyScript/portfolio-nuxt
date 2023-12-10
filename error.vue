<template>
  <!-- <DefaultLayout> -->
  <div class="center flex-col text-orange scale-150 h-screen">
    <h1 class="text-6xl font-bold">404</h1>
    <p class="text-xl">This pages doesn't exist</p>
    <!-- <nuxt-link to="/" class="big-btn scale-75">Go Back Home</nuxt-link> -->
  </div>
  <!-- </DefaultLayout> -->
</template>

<script setup lang="ts">
  const props = defineProps({
    error: Object,
  })
  const handleError = () => clearError({ redirect: "/" })

  onMounted(() => {
    console.error(props.error)
  })
</script>

<style scoped></style>
