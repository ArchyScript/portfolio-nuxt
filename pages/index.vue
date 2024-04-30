<template>
  <div>
    <Hero />
    <About />
    <ToolsAndTechs />
    <Experience />
    <Work />
    <Contact />
  </div>
</template>

<script setup lang="ts">
  const loading: Ref<boolean> = ref(true)

  onMounted(() => {
    setTimeout(() => {
      loading.value = false
    }, 5000)
  })
</script>
