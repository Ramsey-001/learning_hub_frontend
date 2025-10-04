<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>

    <h3>Comments</h3>
    <ul>
      <li v-for="comment in post.comments" :key="comment.id">
        <strong>{{ comment.user.email }}:</strong> {{ comment.content }}
      </li>
    </ul>

    <form @submit.prevent="createComment">
      <input v-model="newComment" placeholder="Add a comment..." />
      <button type="submit">Add Comment</button>
    </form>
    <router-link to="/posts">⬅ Back to Posts</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "../api";

const route = useRoute();
const post = ref({ comments: [] });
const newComment = ref("");

const loadPost = async () => {
  const response = await api.get(`/posts/${route.params.id}`);
  post.value = response.data;
};

const createComment = async () => {
  try {
    await api.post(`/posts/${route.params.id}/comments`, {
      comment: { content: newComment.value }
    });
    newComment.value = "";
    await loadPost(); // ✅ reload to show latest
  } catch (err) {
    console.error("Error creating comment:", err);
  }
};

onMounted(loadPost);
</script>
