<template>
    <div>
        <ProfileFeedTabList :tabList="tabList"/>
    </div>
    
</template>
<script setup> 

const tabList = ref(['Posts','Likes','Follows'])

</script>

