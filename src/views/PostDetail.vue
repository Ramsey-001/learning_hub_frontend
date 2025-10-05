
<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>

    <h3>{{ $t('comments') }}</h3>
    <ul>
      <li v-for="comment in post.comments" :key="comment.id">
        <strong>{{ comment.user.email }}:</strong> {{ comment.content }}
      </li>
    </ul>

    <form @submit.prevent="createComment">
      <input v-model="newComment" :placeholder="$t('addComment')" />
      <button type="submit">{{ $t('addComment') }}</button>
    </form>

    <router-link to="/posts">{{ $t('backToPosts') }}</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import api from "../api";

const route = useRoute();
const { locale } = useI18n();
const post = ref({});
const newComment = ref("");

// Load post details
const loadPost = async () => {
  const res = await api.get(`/posts/${route.params.id}`);
  post.value = res.data;
};

// Create new comment
const createComment = async () => {
  if (!newComment.value.trim()) return;
  await api.post(`/posts/${route.params.id}/comments`, {
    content: newComment.value,
  });
  newComment.value = "";
  await loadPost();
};

onMounted(loadPost);
</script>

