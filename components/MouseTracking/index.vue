<template>
  <div class="relative" @mousemove="handleMouseMove" @focus="handleFocus">
    <div
      class="h-20 w-20 rounded-full border bg-green-500"
      :style="{
        width: size + 'px',
        height: size + 'px',
        left: mouseX + 'px',
        top: mouseY + 'px',
      }"
      :class="{ bright: isFocused }"
    ></div>

    <!-- 
        
  .mouse-effect {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #17ce89;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: background-color 0.3s ease;
  }

     -->
    <!-- Your project page content here -->
  </div>
</template>

<script setup lang="ts">
  const size: Ref<number> = ref(100)
  const mouseX: Ref<number> = ref(0)
  const mouseY: Ref<number> = ref(0)
  const isFocused: Ref<boolean> = ref(false)

  const methods = {
    handleMouseMove(event: MouseEvent) {
      mouseX.value = event.clientX
      mouseY.value = event.clientY
    },
    handleFocus() {
      isFocused.value = true
    },
  }
</script>

<style scoped>
  .project-page {
    position: relative;
  }

  .mouse-effect.bright {
    background-color: #34d399;
  }
</style>
