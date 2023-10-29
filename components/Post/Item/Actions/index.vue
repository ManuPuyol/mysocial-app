<template>
  <div class="flex items-center justify-around">
    <PostItemActionsIcon color="orange" :size="size">
      <template v-slot:icon="{ classes }">
        <div>
          <ChatBubbleLeftEllipsisIcon :class="classes" />
        </div>
      </template>
      <template v-if="showStats" v-slot:default> {{ props.post.repliesCount }} </template>
    </PostItemActionsIcon>

    <PostItemActionsIcon color="green" :size="size">
      <template v-slot:icon="{ classes }">
        <div>
          <ArrowPathIcon :class="classes" />
        </div>
      </template>
      <template v-if="showStats" v-slot:default> {{ generateRandomNumber() }} </template>
    </PostItemActionsIcon>

    <PostItemActionsIcon color="red" :size="size">
      <template v-slot:icon="{ classes }">
        <div>
          <HeartIcon :class="classes" />
        </div>
      </template>
      <template v-if="showStats" v-slot:default> {{ generateRandomNumber() }} </template>
    </PostItemActionsIcon>

    <PostItemActionsIcon color="orange" :size="size">
      <template v-slot:icon="{ classes }">
        <div>
          <ArrowUpTrayIcon :class="classes" />
        </div>
      </template>
      <template v-if="showStats" v-slot:default> {{ generateRandomNumber() }} </template>
    </PostItemActionsIcon>
  </div>
</template>

<script setup>
import {
  ChatBubbleLeftEllipsisIcon,
  ArrowPathIcon,
  HeartIcon,
  ArrowUpTrayIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
const showStats = computed(() => props.compact);
const size = computed(() => props.compact ? 5 : 8);

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
</script>
