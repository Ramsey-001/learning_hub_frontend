
<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
    <p class="text-gray-700 mb-6">{{ post.content }}</p>

    <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('comments') }}</h3>

    <ul v-if="post.comments && post.comments.length" class="space-y-3 mb-6">
      <li
        v-for="comment in post.comments"
        :key="comment.id"
        class="border border-gray-200 rounded-lg p-3 bg-gray-50"
      >
        <strong class="text-indigo-600">{{ comment.user.email }}:</strong>
        <span class="text-gray-700">{{ comment.content }}</span>
      </li>
    </ul>

    <p v-else class="text-gray-500 mb-6 italic">No comments yet.</p>

    <form @submit.prevent="createComment" class="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        v-model="newComment"
        :placeholder="$t('addComment')"
        class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        class="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        {{ $t('addComment') }}
      </button>
    </form>

    <router-link
      to="/posts"
      class="inline-block text-indigo-600 hover:underline font-medium"
    >
      {{ $t('backToPosts') }}
    </router-link>
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
  try {
    const res = await api.get(`/posts/${route.params.id}`);
    post.value = res.data;
  } catch (error) {
    console.error("Error loading post:", error);
  }
};

// Create new comment
const createComment = async () => {
  if (!newComment.value.trim()) return;
  try {
    await api.post(`/posts/${route.params.id}/comments`, {
      content: newComment.value,
    });
    newComment.value = "";
    await loadPost();
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};

onMounted(loadPost);
</script>

