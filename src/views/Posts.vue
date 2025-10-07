<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800">{{ $t('posts') }}</h2>

        <router-link
          to="/posts/new"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {{ $t('addNewPost') }}
        </router-link>
      </div>

      <!-- Posts List -->
      <div v-if="translatedPosts.length" class="space-y-6">
        <div
          v-for="p in translatedPosts"
          :key="p.id"
          class="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
        >
          <router-link
            :to="`/posts/${p.id}`"
            class="text-2xl font-semibold text-blue-700 hover:underline"
          >
            {{ p.title }}
          </router-link>
          <p class="text-gray-600 mt-2">{{ p.content }}</p>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center text-gray-500 mt-20">
        {{ $t('noPostsYet') }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import api from "../api";

const posts = ref([]);
const translatedPosts = ref([]);
const { locale } = useI18n();

const loadPosts = async () => {
  try {
    const res = await api.get("/posts");
    posts.value = res.data;
    await translatePosts();
  } catch (error) {
    console.error("Failed to load posts:", error);
  }
};

const translatePosts = async () => {
  translatedPosts.value = posts.value.map((post) => ({
    ...post,
    title: post.title,
    content: post.content,
  }));
};

onMounted(loadPosts);
watch(locale, translatePosts);
</script>
