<template>
    <div>
        <PostItem :post="props.post" />
        <PostForm placeholder="Post your reply" :user="props.user"/>
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
const replies = computed(()=> props.post?.replies || [])
</script>