<template>
  <div class="flex items-center justify-around">
    <PostItemActionsIcon color="orange">
      <template v-slot:icon="{ classes }">
        <div>
          <ChatBubbleLeftEllipsisIcon :class="classes" />
        </div>
      </template>
      <template v-slot:default> {{ props.post.repliesCount }} </template>
    </PostItemActionsIcon>

    <PostItemActionsIcon color="green">
      <template v-slot:icon="{ classes }">
        <div>
          <ArrowPathIcon :class="classes" />
        </div>
      </template>
      <template v-slot:default> {{ generateRandomNumber() }} </template>
    </PostItemActionsIcon>

    <PostItemActionsIcon color="red">
      <template v-slot:icon="{ classes }">
        <div>
          <HeartIcon :class="classes" />
        </div>
      </template>
      <template v-slot:default> {{ generateRandomNumber() }} </template>
    </PostItemActionsIcon>

    <PostItemActionsIcon color="orange">
      <template v-slot:icon="{ classes }">
        <div>
          <ArrowUpTrayIcon :class="classes" />
        </div>
      </template>
      <template v-slot:default> {{ generateRandomNumber() }} </template>
    </PostItemActionsIcon>
  </div>
</template>

<script setup>
import { ChatBubbleLeftEllipsisIcon, ArrowPathIcon, HeartIcon, ArrowUpTrayIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})

function generateRandomNumber(){
    return Math.floor(Math.random() * 100)
}
</script>
