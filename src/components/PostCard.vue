<template>
  <div
    class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300 border"
  >
    <h2 class="text-xl font-semibold text-blue-700 mb-2">{{ post.title }}</h2>
    <p class="text-gray-700 mb-4 line-clamp-3">{{ post.body }}</p>

    <div class="flex flex-wrap gap-2 mb-3">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
      >
        #{{ tag }}
      </span>
    </div>

    <div class="text-sm text-gray-500 flex justify-between">
      <span>👁️ {{ post.views }} views</span>
      <span>❤️ {{ (post.reactions as any).likes || 0 }} likes</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  post: {
    id: number;
    userId: number;
    title: string;
    body: string;
    tags: string[];
    reactions: object;
    views: number;
  };
}>();
</script>

<style scoped></style>
