<template>
  <button class="big-btn w-fit select-none" @click="showLess">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
  import type { PropType } from "vue"
  type ButtonType = "button" | "submit" | "reset" | undefined

  defineProps({
    type: {
      type: String as PropType<ButtonType>,
      validator: (value: ButtonType) =>
        !value || ["button", "submit", "reset"].includes(value),

      default: "button",
    },
    text: {
      type: String,
      default: "",
    },
    loadingClass: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: "font-normal",
    },
    style: {
      type: Object,
    },
  })
</script>

<style scoped lang="scss">
  .big-btn {
    @apply text-orange border border-orange py-3 px-10 rounded cursor-pointer relative text-base;

    &:focus,
    &:active {
      background-color: #ffffff30;
      outline: none;
    }

    &:before {
      @apply bg-light_orange;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 100%;
      top: 0;
      z-index: -1;
      transition: right 0.55s ease-out;
    }

    &:hover:before {
      @apply right-0;
    }
  }
</style>
