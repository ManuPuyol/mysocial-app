<template>
  <div
    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
  >
    <ul class="flex flex-wrap -mb-px justify-around">
      <li class="me-2" v-for="(tab, index) in tabList" :key="tab">
        <a
          @click="handleTab(tab, index)"
          href="#"
          class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-lime-700  dark:hover:text-gray-300"
          :class="{ [activeClass]: index === tabInfo.tabIndex }"
          >{{ tab }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const tabInfo = reactive({
  tabIndex: 0,
  tabName: "",
});
const props = defineProps({
  tabList: {
    type: Array,
    default: null,
  },
});
const activeClass = "border-lime-600 text-lime-600 border-b-2 border-lime-500 hover:border-lime-700";

function handleTab(tab, index) {
  this.tabInfo.tabIndex = index;
}
</script>
