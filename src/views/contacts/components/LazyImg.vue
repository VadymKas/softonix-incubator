<template>
  <div ref="imageWrapper" class="lazy__image-wrapper w-full h-full">
    <div v-if="imageLoading" class="h-full skeleton-animation" />
    <img
      v-else-if="!imageLoading"
      :src="imgSrc"
      :alt="alt"
      class="object-cover"
      @load="onLoad"
      @error="onError"
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
}>()
const imageWrapper = ref()
const imgSrc = ref('')
const imageLoading = ref(true)

const onLoad = () => {
  imageLoading.value = false
}

const onError = () => {
  imageLoading.value = false
  imgSrc.value = 'https://static.vecteezy.com/system/resources/previews/006/059/989/non_2x/crossed-camera-icon-avoid-taking-photos-image-is-not-available-illustration-free-vector.jpg'
}

const options = {
  rootMargin: '300px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      imgSrc.value = props.src
      imageLoading.value = false
    }
  })
}, options)

onMounted(() => {
  observer.observe(imageWrapper.value)
})

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<style>
.skeleton-animation {
  animation: pulse 1s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    background-color: #dddddd;
  }
  50% {
    background-color: #dfdbdb;
  }
  100% {
    background-color: #cccccc;
  }
}
</style>
