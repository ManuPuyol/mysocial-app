<template>
  <div>
    <PostFormInput :user="props.user" @onSubmit="handleFormSubmit" />
  </div>
</template>
<script setup>
const { postPost } = usePosts();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
async function handleFormSubmit(data) {
  try {
    const response = await postPost({
        text: data.text,
        mediaFiles: data.mediaFiles
    });
  } catch (error) {
    console.log(error);
  }
}
</script>
