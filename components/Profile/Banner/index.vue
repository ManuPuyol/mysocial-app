<template>
  <div>

    <div class=" h-2/4 sm:h-64 overflow-hidden">
      <img class="w-full"
        src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="Photo by aldi sigun on Unsplash" />
    </div>
   
    <ProfileBannerUserData :user="user"/>
    <button>editar</button>
    
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
