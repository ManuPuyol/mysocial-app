<template>
  <div class="flex justify-start px-5 -mt-12 mb-5">
    
    <span >
      <img
        alt="img"
        :src="props.user.profileImage"
        class="mx-auto object-cover rounded-full h-32 w-32 bg-white p-1"
      />
    </span>
  </div>

  <div class="px-7 mb-8">
    <h2 class="text-3xl font-bold text-black dark:text-white">
      {{ props.user.name }}
    </h2>
    <p class="text-gray-400 mt-2 dark:text-gray-400">{{ props.user.handle }}</p>
    <p class="mt-2 text-gray-600 dark:text-gray-300">Hey this is my blog</p>
    <p class="text-gray-400 mt-2 dark:text-gray-400 mb-2">
      Member since {{ props.user.createdAt }}
    </p>
    <span class="mt-2 dark:text-white"> 125 </span>
    <span class="text-gray-400 mt-2 dark:text-gray-400">Siguiendo</span>
    <span class="mt-2 dark:text-white"> 100 </span>
    <span class="text-gray-400 mt-2 dark:text-gray-400">Seguidores</span>
  </div>
</template>
<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>
