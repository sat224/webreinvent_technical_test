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
  const fetchAllPosts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      console.log(data.posts);
      posts.value = data.posts;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    fetchAllPosts,
    posts,
  };
});
