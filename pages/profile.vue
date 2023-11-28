<template>
    <div>
      <MainSection title="Profile" :loading="loading">
        <Head>
          <Title>Profile</Title>
        </Head>
        <ProfilePage :user="user"/>
        <PostListFeed :posts="homePosts" />

      </MainSection>
    </div>
  </template>
  <script setup>
const { getPosts } = usePosts();

const loading = ref(false);
const homePosts = ref([]);
const { useAuthUser } = useAuth();

const user = useAuthUser();

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { posts } = await getPosts();
    homePosts.value = posts;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>