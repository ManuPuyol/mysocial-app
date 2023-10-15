<template>
  <div
    class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300 border-b"
    :class="wrapperClasses"
  >
    <slot></slot>
  </div>
</template>
<script setup>
const { defaultTransition,krakenBorderColor } = useTailwindConfig();
const wrapperClasses = computed(()=>`${defaultTransition} ${krakenBorderColor}`)

</script>
