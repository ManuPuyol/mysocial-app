<template>
    <div>
        <PostItem :post="props.post" />
        <PostForm placeholder="Post your reply" :user="props.user" :reply-to="props.post" @on-success="handleFormSuccess"/>
        <PostListFeed :posts="replies"/>
    </div>
</template>
<script setup>
const props = defineProps({
    post:{
        type: Object,
        required:true
    },
    user: {
        type: Object,
        required: true
    }
})
const replies = computed(()=> props.post?.replies || []);
function handleFormSuccess(post) {
    navigateTo({
        path:`/status/${post.id}`
    })
}
</script>