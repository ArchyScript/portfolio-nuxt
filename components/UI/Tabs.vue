<template>
  <div
    className="flex items-baseline justify-center flex-wrap    space-x-1 sm:space-x-2 lg:space-x-3 space-y-1  sm:space-y-2"
  >
    <span
      v-for="(tab, index) in tabs"
      :key="index"
      @click="handleClick(tab.title)"
      class="select-none cursor-pointer capitalize border rounded-md text-xs leading-5 px-3 text-center border !py-1"
      :class="activeTab === tab.title ? 'active' : ' inactive'"
    >
      {{ tab.title }}
    </span>
  </div>
</template>

<script lang="ts" setup>
  interface Tab {
    title: string
  }
  const props = defineProps({
    tabs: {
      type: Array as () => Tab[],
      default: [],
    },
  })

  const activeTab = ref(" ")
  const emit = defineEmits(["select"])

  const handleClick = (active_tab: string) => {
    activeTab.value = active_tab
    emit("select", active_tab)
  }

  onMounted(() => {
    activeTab.value = props.tabs[0].title
  })
</script>

<style scoped>
  .active {
    @apply text-black bg-gray border-gray font-bold;
  }

  .inactive {
    @apply text-white border-gray bg-[#2f293ae8] bg-opacity-50;
  }
</style>
