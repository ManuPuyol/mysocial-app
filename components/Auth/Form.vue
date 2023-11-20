<template>
  <div
    class="w-full p-6 m-auto bg-white border-t border-orange-600 rounded shadow-lg shadow-orange-800/50 lg:max-w-md"
  >
    <div class="flex justify-center">
      <div class="w-20 h-20">
        <LogoKraken />
      </div>
    </div>
    <div class="pt-5 space-y-6">
      <UIInput label="Username" v-model="data.username" />
      <UIInput label="Password" type="password" v-model="data.password" />
      <UIButton liquid @click="handleLogin" :disabled="isButtonDisabled">
        Login
      </UIButton>

      <p class="mt-8 text-xs font-light text-center text-gray-700">
        Don't have an account?
        <span
          @click="activeRegisterForm"
          class="font-medium text-orange-600 hover:underline cursor-pointer"
          >Sign up</span
        >
      </p>
    </div>
  </div>
</template>
<script setup>
const data = reactive({
  password: "",
  username: "",
  loading: false,
});
const emits = defineEmits(["register"]);
function activeRegisterForm() {
  emits("register", {
    register: true,
  });
}
async function handleLogin() {
  const { login } = useAuth();

  data.loading = true;
  try {
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.error("Error en la solicitud:", error);
    if (error.response) {
      // El servidor ha respondido con un estado de error (por ejemplo, 405)
      console.log("Estado de la respuesta:", error.response.status);
      console.log("Datos de la respuesta:", error.response.data);
    }
  } finally {
    data.loading = false;
  }
}

const isButtonDisabled = computed(() => {
  return !data.username || !data.password || data.loading;
});
</script>
