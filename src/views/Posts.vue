<template>
  <div>
    <h2>{{ $t('posts') }}</h2>

    <router-link to="/posts/new">
      <button>{{ $t('addNewPost') }}</button>
    </router-link>

    <ul>
      <li v-for="p in translatedPosts" :key="p.id">
        <router-link :to="`/posts/${p.id}`">
          {{ p.title }}
        </router-link>
        <p>{{ p.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import api from "../api";
//import { translateText } from "../utils/translate";

const posts = ref([]);
const translatedPosts = ref([]);
const { locale } = useI18n();

// Load posts from backend
const loadPosts = async () => {
  const res = await api.get("/posts");
  posts.value = res.data;
  await translatePosts();
};

// Translate posts when language changes
// Translate posts when language changes
const translatePosts = async () => {
  translatedPosts.value = posts.value.map((post) => ({
    ...post,
    title: post.title,
    content: post.content,
  }));
};


onMounted(loadPosts);
watch(locale, translatePosts); // retranslate when language changes
</script>
