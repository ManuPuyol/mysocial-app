<template>
  <div class="border-x" :class="krakenBorderColor">
    <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80">
      <h2 class="text-xl font-bold text-gray-800 dark:text-white">{{ props.title }}</h2>
    </div>
    <div v-if="props.loading" class="flex item-center justify-center p-4 border-b" :class="krakenBorderColor">
      <UISpinner/>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: { String, required: true },
  loading: {
    type: Boolean,
    required: true,
  },
});
const { defaultTransition,krakenBorderColor } = useTailwindConfig();

</script>
