<template>
  <div class="loading-container">
    <img
      src="~/assets/images/me.png"
      class="h-40 w-40"
      alt="Headshot"
      class="logo-animation"
    />
  </div>
</template>

<script setup>
  // No need for 'export default' and 'name' in <script setup>

  //   const logoAnimationStyles = `
  //   @keyframes spin {
  //     from {
  //       transform: rotate(0deg);
  //     }
  //     to {
  //       transform: rotate(360deg);
  //     }
  //   }
  // `
</script>

<style scoped>
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .logo-animation {
    animation: spin 2s linear infinite;
    /* Add any other styles you want for your logo */
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  /* Include the animation styles
${logoAnimationStyles}
 */
</style>
