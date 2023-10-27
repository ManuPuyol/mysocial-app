<template>
  <div>
    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500">No posts</p>
    </div>
    <div
      v-else
      class="pb-4 border-b hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300"
      :class="[krakenBorderColor, defaultTransition]"
      v-for="post in props.posts"
      :key="post.id"
    >
      <PostItem :post="post" />
    </div>
  </div>
</template>

<script setup>
const { krakenBorderColor, defaultTransition } = useTailwindConfig();
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
const isEmptyArray = computed(() => props.posts.length === 0);
</script>
