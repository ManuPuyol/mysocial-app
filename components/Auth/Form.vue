
<template>
  <div class="w-full">
    <div class="flex justify-center ">
      <div class="w-20 h-20">
        <LogoKraken/>
      </div>
    </div>
    <div class="pt-5 space-y-6">
      <UIInput
        label="Username"
        placeholder="@username"
        v-model="data.username"
      />
      <UIInput
        label="Password"
        placeholder="********"
        type="password"
        v-model="data.password"
      />
      <UIButton liquid @click="handleLogin" :disabled="isButtonDisabled">
        Login
      </UIButton>
      
    </div>
  </div>
</template>
<script setup>
const data = reactive({
  password: "",
  username: "",
  loading: false,
});
async function handleLogin() {
  const { login } = useAuth();

  data.loading = true;
  try {
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
}

const isButtonDisabled = computed(() => {
  return (!data.username || !data.password) || data.loading
})
</script>
