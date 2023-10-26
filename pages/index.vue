<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Home / kraken</Title>
      </Head>
      <div class="border-b" :class="krakenBorderColor">
        <PostForm :user="user" />
      </div>
      <PostListFeed :posts="homePosts" />
    </MainSection>
  </div>
</template>
<script setup>
const { krakenBorderColor } = useTailwindConfig();
const { getHomePosts } = usePosts();

const loading = ref(false);
const homePosts = ref([]);
const { useAuthUser } = useAuth();

const user = useAuthUser();

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { posts } = await getHomePosts();
    homePosts.value = posts;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>
