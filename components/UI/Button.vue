<template>
  <button
    class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    :disabled="props.disabled"
    :class="classes"
    @click="handleClick"
    v-if="props.type === 'fill'"
    >
    <span :class="textFontSize">
      <slot />
    </span>
  </button>
  <button
    v-else
    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300  dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
    :disabled="props.disabled"
    :class="classes"
    @click="handleClick"
  >
    <span
      :class="classes"
      class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0"
    >
      <slot />
    </span>
  </button>
</template>
<script setup>
const emits = defineEmits(["onClick"]);

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
  },
  liquid: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "fill",
  },
});
const paddingClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "py-2 px-3";
    case "lg":
      return "px-4 py-3";
    default:
      return "px-3 py-3";
  }
});
const textFontSize = computed(() => {
  switch (props.size) {
    case "lg":
      return "text-md";
    default:
      return "text-sm";
  }
});
const defaultWidth = computed(() => {
  switch (props.size) {
    default:
      return "w-min";
  }
});
const classes = computed(
  () =>
    `${props.type === "fill" ? paddingClasses.value : ""} ${
      props.liquid ? "w-full" : defaultWidth.value
    }`
);

function handleClick(event) {
  emits("onClick", event);
}
</script>
