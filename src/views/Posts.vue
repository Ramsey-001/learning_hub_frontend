<template>
  <div>
    <h2>Posts</h2>

    <!-- Link to new post page -->
    <router-link to="/posts/new">
      <button>Add New Post</button>
    </router-link>

    <!-- Post list -->
    <ul>
      <li v-for="p in posts" :key="p.id">
        <!-- Make title a link to post detail -->
        <router-link :to="`/posts/${p.id}`">{{ p.title }}</router-link>
        - {{ p.content }}
        <button @click="deletePost(p.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../api";

const posts = ref([]);

// Load all posts
onMounted(async () => {
  try {
    const res = await api.get("/posts");
    posts.value = res.data;
  } catch (err) {
    console.error("Error loading posts", err);
  }
});

// Delete post
const deletePost = async (id) => {
  try {
    await api.delete(`/posts/${id}`);
    posts.value = posts.value.filter((p) => p.id !== id);
  } catch (err) {
    console.error("Error deleting post", err);
  }
};
</script>
