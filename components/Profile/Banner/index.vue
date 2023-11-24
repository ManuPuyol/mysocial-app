<template>
  <div>
    <div class="h-40 h-2/4  xs:h-64 overflow-hidden">
      <img
        class="w-full"
        src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="Photo by aldi sigun on Unsplash"
      />
    </div>

    <div class="flex justify-around lg:gap-24 md:gap-24">
      <div>
        <ProfileBannerUserData :user="user" />

      </div>

      <div class="py-4">
      <button
      class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full"
    >
      Edit profile
    </button>
    </div>
    </div>
    
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
