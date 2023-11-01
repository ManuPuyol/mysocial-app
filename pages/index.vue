<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Home / kraken</Title>
      </Head>
      <div class="border-b" :class="krakenBorderColor">
        <PostForm :user="user" @on-success="handleFormSuccess"/>
      </div>
      <PostListFeed :posts="homePosts" />
    </MainSection>
  </div>
</template>
<script setup>
const { krakenBorderColor } = useTailwindConfig();
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
function handleFormSuccess(post) {
  navigateTo({
    path: `/status/${post.id}`
  })
}
</script>
