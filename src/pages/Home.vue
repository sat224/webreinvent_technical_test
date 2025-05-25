<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-white px-4"
  >
    <div class="text-center max-w-xl">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
        Welcome to <span class="text-blue-600">Postify</span>
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 mb-8">
        Discover, read, and explore posts from various authors. Dive into
        engaging content and stay updated.
      </p>
      <RouterLink to="/posts">
        <button
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          Browse Posts →
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
