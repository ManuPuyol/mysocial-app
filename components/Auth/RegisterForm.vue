<template>
  <div
    class="w-full p-6 m-auto bg-white border-t border-lime-600 rounded shadow-lg shadow-lime-800/50 lg:max-w-md"
  >
    <div class="flex justify-center">
      <h2 class="text-lg font-bold text-lime-400">Register</h2>
    </div>
    <div class="pt-5 space-y-6">
      <UIInput label="Username" v-model="data.username" />
      <UIInput label="Email" type="email" v-model="data.email" />
      <UIInput label="Password" type="password" v-model="data.password" />
      <UIInput
        label="Repeat password"
        type="password"
        v-model="data.repeatPassword"
      />
      <UIButton liquid> Register </UIButton>
      <button
        @click="activeLoginForm"
        type="button"
        class="fx-5 py-2.5 text-center inline-flex items-center text-lime-400 dark:text-white"
      >
        <svg
          class="w-4 h-4 dark:text-white me-2"
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
        Back
      </button>
    </div>
  </div>
</template>
<script setup>
const data = reactive({
  password: "",
  repeatPassword: "",
  email: "",
  username: "",
  loading: false,
});

const emits = defineEmits(["register"]);
function activeLoginForm() {
  emits("register", {
    register: false,
  });
}
</script>
