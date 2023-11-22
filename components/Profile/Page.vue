<template>
    <ProfileBanner :user="user"/>
    <ProfileFeed/>
</template>
<script setup>

const { useAuthUser } = useAuth();
const user = useAuthUser();


</script>


