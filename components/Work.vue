<template>
  <section id="works" class="flex flex-col">
    <UITitle title="my projects" />

    <p class="mb-6">
      There are about
      <span class="text-orange text-xl font-bold">
        {{ projects.length }}
      </span>
      projects listed here and counting 👍🏾
    </p>

    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-4">
      <div
        v-for="(project, index) in displayedProjects"
        :key="index"
        class="p-0.5"
      >
        <CardsWork :project="project" />
      </div>
    </div>

    <div class="flex justify-enter items-center pt-16 mx-auto">
      <UIButton
        :text="isShowMore ? 'Show Less' : 'Show More'"
        @click="handleShowMore"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { gsap } from "gsap"
  import { projects } from "~/db/projects"
  import { librariesAndFrameworks } from "~/db/techs"

  const displayedProjects = ref(projects.slice(0, 6)) // Display the first 6 projects initially
  const projectsPerPage = 6
  const isShowMore = ref(false)

  // const showMoreDisabled = computed(
  //   () => displayedProjects.value.length === projects.length
  // )
  // const showLessDisabled = computed(() => displayedProjects.value.length === 6)

  const handleShowMore = () => {
    if (isShowMore.value) return showLess()
    else showMore()
  }
  const showMore = () => {
    displayedProjects.value = projects
    isShowMore.value = true
    // const endIndex = displayedProjects.value.length + projectsPerPage
    // displayedProjects.value = projects.slice(0, endIndex)
  }

  const showLess = () => {
    displayedProjects.value = projects.slice(0, 6)
    isShowMore.value = false
    // const endIndex = Math.max(
    //   displayedProjects.value.length - projectsPerPage,
    //   6
    // )
    // displayedProjects.value = projects.slice(0, endIndex)
  }

  const animateCard = () => {
    gsap.fromTo(
      ".nav-icon",
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
  }

  //
  onMounted(() => animateCard())
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0px;
    margin: 50px 0px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
  }
</style>
