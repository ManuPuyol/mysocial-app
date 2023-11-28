<template>
    <ProfileBanner :user="user"/>
    <ProfileFeed/>
</template>
<script setup>

const props = defineProps({
    user:{
        type: Object,
        default: null
    }
})

</script>


