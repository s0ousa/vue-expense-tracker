<script setup lang="ts">
const props = defineProps({
  title: String,
  value: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div
    class="card w-full bg-base-100 card-xs shadow-sm border-r-8 my-4"
    :class="props.value >= 0 ? 'border-green-500' : 'border-red-500'"
  >
    <div class="card-body">
      <div class="w-full flex items-center justify-between">
        <h2 class="card-title text-lg font-normal">{{ props.title }}</h2>
        <p class="text-lg grow-0 font-medium">R$ {{ props.value }}</p>
      </div>
    </div>
  </div>
</template>
