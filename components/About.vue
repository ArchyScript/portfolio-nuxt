<template>
  <section id="about">
    <UITitle title="About Me" />

    <div
      class="flex flex-col-reverse md:flex-row justify-between gap-y-8 md:gap-y-0 md:space-x-10 text-secondary"
    >
      <div class="flex-1 lg:flex-3 my-auto">
        <div class="flex justify-between flex-col space-y-4">
          <p class="description leading-7">
            Hello! 👋🏾 I am <span class="text-orange"> Daniel Dasaolu </span>
            , an enthusiastic frontend Developer with a strong foundation in web
            development. I excel in designing exceptional digital experiences
            and applying cutting-edge technologies for innovative solutions.
          </p>

          <p class="description leading-7">
            Simultaneously pursuing a degree in Architecture, I seamlessly
            integrate technical proficiency with architectural knowledge,
            approaching problem-solving from a multidisciplinary perspective.
          </p>

          <p class="description leading-7">
            Over the years, I have had the opportunity to work with amazing
            companies and people, and on diverse projects. Outside coding, I
            indulge in wildlife documentaries for a captivating escape.
          </p>
        </div>
      </div>

      <div class="w-full h-full flex-1 lg:flex-2 sm:p-6">
        <img
          class="img w-full h-full rounded-md bg-cover"
          src="~/assets/images/me.png"
          alt="Headshot"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import gsap from "gsap"

  onMounted(() => {
    gsap.fromTo(
      ".description",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.4,
        delay: 1.2,
        ease: "linear",
      }
    )
  })
</script>

<style scoped lang="scss">
  #about {
    color: var(--secondary);
    .inner {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-gap: 50px;

      @media (max-width: 768px) {
        @apply flex flex-col justify-center items-center;
      }
    }
  }
</style>
