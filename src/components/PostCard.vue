<template>
  <div
    class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-200 p-5 sm:p-6 cursor-pointer"
  >
    <slot :post="post">
      <div class="flex justify-between items-center text-sm text-gray-500 mb-2">
        <span
          >🆔 <strong class="text-gray-700">ID: {{ post.id }}</strong></span
        >
        <span>👤 Author: User #{{ post.userId }}</span>
      </div>

      <h2 class="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
        {{ post.title }}
      </h2>
      <p class="text-gray-700 text-sm sm:text-base mb-4 line-clamp-3">
        {{ post.body }}
      </p>
      <div class="flex flex-wrap gap-2 mb-3">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-blue-200"
        >
          #{{ tag }}
        </span>
      </div>
      <div class="text-sm text-gray-500 flex justify-between items-center">
        <span>👁️ {{ post.views }} views</span>
        <span>❤️ {{ (post.reactions as any).likes || 0 }} likes</span>
      </div>
    </slot>
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
