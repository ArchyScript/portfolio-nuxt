<template>
  <div>
    <div
      :style="{
        left: mouseX + 'px',
        top: mouseY + 'px',
        backgroundColor: trailColor,
      }"
      class="mouse-trail"
    ></div>

    <div
      :style="{
        left: mouseX + 'px',
        top: mouseY + 'px',
        transform: bulbTransform,
        opacity: bulbOpacity,
      }"
      class="light-bulb"
    ></div>
  </div>
</template>
 
<script setup>
  const mouseX = ref(0)
  const mouseY = ref(0)
  const trailColor = ref("transparent")
  const bulbTransform = ref("scale(1)")
  const bulbOpacity = ref(1)
  let bulbTimeout = null

  const handleMouseMove = (e) => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY

    // Update mouse trail color
    trailColor.value = "#ffa07a"

    // Update light bulb position
    bulbTransform.value = "scale(1)"
    bulbOpacity.value = 1
    clearTimeout(bulbTimeout)

    // Activate light bulb animation when mouse is inactive
    bulbTimeout = setTimeout(() => {
      bulbTransform.value = "scale(1.5)"
      bulbOpacity.value = 0
    }, 500)
  }

  const handleMouseLeave = () => {
    // Clear mouse trail when mouse leaves the window
    trailColor.value = "transparent"
  }

  // Attach event listeners
  onMounted(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
  })

  // Remove event listeners when the component is unmounted
  onBeforeUnmount(() => {
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseleave", handleMouseLeave)
  })
</script>

<style scoped>
  .mouse-trail {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: transparent;
    border-radius: 50%;
    pointer-events: none;
    transition: background-color 0.3s ease;
  }

  .light-bulb {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 50%;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center center;
  }
</style>
