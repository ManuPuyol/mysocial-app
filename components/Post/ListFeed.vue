<template>
  <div>
    <h1>list feed</h1>
    <ul>
        <PostItem v-for="post in props.posts" :post="post" :key="post.id" />
        
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>
