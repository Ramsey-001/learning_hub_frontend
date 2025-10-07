<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Create New Post</h2>

    <form @submit.prevent="submitPost" class="space-y-5">
      <div>
        <label class="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          v-model="title"
          required
          type="text"
          placeholder="Enter post title"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-semibold mb-2">Content</label>
        <textarea
          v-model="content"
          required
          placeholder="Write your post content here..."
          rows="6"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Create Post
      </button>
    </form>

    <router-link
      to="/posts"
      class="inline-block mt-6 text-indigo-600 hover:underline text-center w-full block"
    >
      ⬅ Back to Posts
    </router-link>
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
      post: { title: title.value, content: content.value },
    });
    console.log("Post created:", response.data);
    router.push("/posts"); // Navigate back to posts page after creation
  } catch (err) {
    console.error("Error creating post:", err.response?.data || err);
  }
};
</script>

