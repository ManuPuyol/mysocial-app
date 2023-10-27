<template>
  <div>
    <PostItemHeader :post="props.post"/>
    <div class="ml-16">
      <p class="flex-shrink w-auto font-medium text-gray-800 dark:text-white">
        {{ props.post.text }}
      </p>
      <div
        v-for="image in post.mediaFiles"
        :key="image.id"
        class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="krakenBorderColor"
      >
        <img :src="image.url" alt="" class="w-full rounded-2xl"/>
      </div>
      <div class="mt-2">
       <PostItemActions :post="post"/>
      </div>
    </div>
  </div>
</template>
<script setup>
const { krakenBorderColor } = useTailwindConfig();
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
