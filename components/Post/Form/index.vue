<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
        <UISpinner/>
    </div>
    <div v-else>
        <PostFormInput :placeholder="props.placeholder" :user="props.user" @onSubmit="handleFormSubmit" />

    </div>
  </div>
</template>
<script setup>
const loading = ref(false)
const { postPost } = usePosts();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'What´s happening ?'
  }
});
async function handleFormSubmit(data) {
    loading.value = true;
  try {
    const response = await postPost({
        text: data.text,
        mediaFiles: data.mediaFiles
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>
