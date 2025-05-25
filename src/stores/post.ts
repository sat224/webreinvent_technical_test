import { defineStore } from "pinia";
import { ref } from "vue";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number };
  views: number;
}

export const usePostStore = defineStore("post", () => {
  const posts = ref<Post[]>([]);
  const postCache = ref<Record<string, Post>>({});
  const loading = ref(false);
  const skip = ref(0);
  const limit = 10;
  const hasMore = ref(true);
  const lastFetched = ref(0);
  const cacheKey = "postStoreCache";
  const cacheDuration = 15 * 60 * 1000;

  const restoreFromCache = () => {
    const cached = localStorage.getItem(cacheKey);
    if (!cached) return;

    const parsed = JSON.parse(cached);
    if (Date.now() - parsed.lastFetched < cacheDuration) {
      posts.value = parsed.posts;
      skip.value = parsed.skip;
      hasMore.value = parsed.hasMore;
      lastFetched.value = parsed.lastFetched;
      console.log("Restored from cache");
    } else {
      localStorage.removeItem(cacheKey);
    }
  };

  const saveToCache = () => {
    localStorage.setItem(
      cacheKey,
      JSON.stringify({
        posts: posts.value,
        skip: skip.value,
        hasMore: hasMore.value,
        lastFetched: Date.now(),
      })
    );
  };

  const fetchAllPosts = async () => {
    if (loading.value || !hasMore.value) return;
    loading.value = true;
    try {
      const res = await fetch(
        `https://dummyjson.com/posts?limit=${limit}&skip=${skip.value}`
      );
      if (!res.ok) throw new Error("something went wrong");
      const data = await res.json();
      posts.value.push(...data.posts);
      skip.value += limit;
      hasMore.value = posts.value.length < data.total;
      saveToCache();
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const getPostById = async (id: string) => {
    if (postCache.value[id]) return postCache.value[id];
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!res.ok) throw new Error("Post not found");
    const post = await res.json();
    postCache.value[id] = post;
    return post;
  };

  return {
    posts,
    loading,
    hasMore,
    restoreFromCache,
    fetchAllPosts,
    getPostById,
  };
});
