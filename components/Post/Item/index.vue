<template>
  <div>
    <PostItemHeader :post="props.post"/>
    <div :class="postBodyWrapper">
      <p class="flex-shrink w-auto font-medium text-gray-800 dark:text-white" :class="textSize">
        {{ props.post.text }}
      </p>
      <div
        v-for="image in post.mediaFiles"
        :key="image.id"
        class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="krakenBorderColor"
      >
        <img :src="image.url" alt="" class="w-full rounded-2xl"/>
      </div>
      <div class="mt-2" v-if="!props.hideActions">
       <PostItemActions :post="post" :compact="props.compact" @on-comment-click="handleCommentClick"/>
      </div>
    </div>
  </div>
</template>
<script setup>
const { krakenBorderColor } = useTailwindConfig();

const emitter = useEmitter()

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false
  },
  hideActions: {
    type: Boolean,
    default: false
  }
});
const postBodyWrapper = computed(()=> props.compact ? 'ml-16' : 'ml-2 mt-4');
const textSize = computed(()=> props.compact ? 'text-base' : 'text-2xl')

function handleCommentClick() {
  emitter.$emit('replyPost', props.post)
}
</script>
