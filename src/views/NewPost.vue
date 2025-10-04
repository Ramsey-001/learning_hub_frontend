<template>
  <div>
    <h2>Create New Post</h2>
    <form @submit.prevent="submitPost">
      <div>
        <label>Title:</label>
        <input v-model="title" required />
      </div>
      <div>
        <label>Content:</label>
        <textarea v-model="content" required></textarea>
      </div>
      <button type="submit">Create Post</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../api";

const title = ref("");
const content = ref("");
const router = useRouter();

const submitPost = async () => {
  try {
    const response = await api.post("/posts", {
      post: { title: title.value, content: content.value }
    });
    console.log("Post created:", response.data);
    router.push("/posts"); // Navigate back to posts page after creation
  } catch (err) {
    console.error("Error creating post:", err.response?.data || err);
  }
};
</script>
