<template>
  <div
    class="shadow-md flex justify-between flex-col relative h-full p-4 sm:p-6 md:p-8 overflow-auto bg-semi-dark rounded-md hover:-translate-y-0.5 hover:scale-105 hover:cursor-zoom-in trans"
  >
    <div>
      <div class="flex items-center justify-between w-full">
        <span class="text-3xl sm:text-4xl text-main">
          <Icons title="folder" />
        </span>

        <div class="flex items-center gap-3.5" v-if="project.isLive">
          <a
            v-for="(link, index) in project.links"
            :key="index"
            class="text-xl sm:text-2xl text-gray hover:text-main transition-all duration-300 cursor-pointer"
            target="_blank"
            :href="link.url"
            :title="link.title"
          >
            <Icons :title="link.icon" v-if="shouldDisplayIcon(link, project)" />
          </a>
        </div>
      </div>

      <header class="w-full">
        <h2 class="text-white font-semibold text-2xl mt-5 mb-0.5">
          {{ project.name }}
        </h2>

        <p
          class="text-main text-sm mb-2 items-stretch font-medium md:font-semibold"
        >
          {{ project.role }}
        </p>

        <p class="text-gray items-stretch">
          {{ project.description }}
        </p>
      </header>
    </div>

    <footer class="flex gap-2 mt-5 flex-wrap">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="rounded-md text-[10px] sm:text-xs leading-5 px-2.5 sm:px-3 font-normal text-white bg-opacity-90 bg-[#2f293ae8] text-center border border-gray !py-1"
      >
        {{ tag }}
      </span>
    </footer>
  </div>
</template>

<script setup lang="ts">
  interface ProjectInterface {
    name: string
    role: string
    description: string
    tags: string[]
    links: {
      title: string
      url: string
      icon: string
    }[]
    isClient: boolean
    isLive: boolean
    show: boolean
  }
  const props = defineProps({
    project: {
      type: Object as () => ProjectInterface,
      default: () => ({} as ProjectInterface),
    },
  })

  const shouldDisplayIcon = (link: any, project: ProjectInterface) => {
    return !(
      (link.icon === "github" && project.isClient) ||
      (link.icon === "edit" && !project.isLive)
    )
  }
</script>
