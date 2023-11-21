<template>
    <div>
      <MainSection title="Profile" :loading="loading">
        <Head>
          <Title>Profile</Title>
        </Head>
        <ProfilePage/>
      </MainSection>
    </div>
  </template>
  <script setup>
const loading = ref(false);
</script>