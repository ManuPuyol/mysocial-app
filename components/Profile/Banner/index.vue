<template>
  <div>
    <button
      @click="$router.back()"
      type="button"
      class="ml-5 mt-3 p-2 text-white absolute hidden max-sm:block bg-gray-800 rounded-full hover:bg-gray-400 hover:text-black"
    >
      <svg
        class="w-4 h-4 dark:text-white "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        />
      </svg>
    </button>
    <div class="h-40 h-2/4 xs:h-64 overflow-hidden">
      <img
        class="w-full"
        src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="Photo by aldi sigun on Unsplash"
      />
    </div>

    <div class="flex justify-between">
      <div>
        <ProfileBannerUserData :user="user" />
      </div>

      <div class="py-4 mr-3">
        <button
          class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full"
          @click="handleEditProfile()"
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
function handleEditProfile() {

}
</script>
