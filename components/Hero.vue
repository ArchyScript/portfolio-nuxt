<template>
  <section
    id="hero"
    class="flex flex-col space-y-4 items-start !text-gray justify-center pb-16"
  >
    <div class=" ">
      <h5 class="animate text-base sm:text-lg text-xl text-main mb-1.5 sm:mb-2">
        Hi , my name is
      </h5>

      <h2
        class="animate text-large font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[120%]"
      >
        Dasaolu Daniel.
      </h2>

      <!-- <h3
        class="animate text-large text-gray font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[120%]"
      >
        I solve problems and create magic
      </h3> -->
      <!-- <h3
        class="animate text-large text-gray font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[120%]"
      >
        I create magic with code
      </h3> -->

      <h3
        class="animate text-large text-gray font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[120%]"
      >
        I solve problems; my codes do the magic
      </h3>
      <!-- <code> with code </code> -->
    </div>

    <p class="animate text-gray text-base md:text-lg xl:text-xl max-w-2xl">
      Experienced Frontend Developer specializing in MEVN/MERN stacks, committed
      to delivering high-performance, accessible, and responsive applications.
      Thrives on collaborating with like-minded developers to create captivating
      user experiences. Takes pride in ensuring the utmost speed and
      accessibility in every project.
    </p>

    <div class="flex space-x-6">
      <UIButton text="Résumé" />
    </div>

    <!-- <h3 class="animate text-large text-gray">
        I
        <span class="animated-text text-main"> {{ currentAction }}, </span>
        crafting enchantment with code.
      </h3> 
      
         <p> I <span class="animated-text text-main"> solve problems </span>
        and create magic.  </p>
      
      <p> I tackle problems and create magic.
I handle problems and create magic.
I address problems and create magic.
I conquer problems and create magic.
I master problems and create magic. </p>
-->
  </section>
</template>

<script setup lang="ts">
  import gsap from "gsap"
  // const mql = ref(window.matchMedia("(max-width: 700px)"))

  const actions = ref([
    "solve problems",
    "create magic",
    "Debug Code",
    "Optimize Performance",
    "Troubleshoot Errors",
    "Implement Solutions",
  ])
  const currentActionIndex = ref(0)
  const currentAction = computed(() => actions.value[currentActionIndex.value])

  const startAnimation = () => {
    animateAction()
  }

  const animateAction = () => {
    currentActionIndex.value =
      (currentActionIndex.value + 1) % actions.value.length
  }

  onMounted(() => {
    startAnimation()
    gsap.fromTo(
      ".animate",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        duration: 0.3,
        // delay: mql.value.matches ? 2 : 3.35,
        ease: "powerOut",
      }
    )
  })
</script>

<style scoped>
  .animated-text {
    animation: fadeInOut 5s ease-in-out infinite;
  }

  @keyframes fadeInOut {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>
