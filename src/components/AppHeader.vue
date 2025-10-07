<template>
  <header class="flex items-center justify-between px-6 py-4 bg-white shadow-md">
    <!-- Left: Navigation Links -->
    <nav class="flex items-center space-x-6 text-gray-700 font-medium">
      <router-link 
        to="/posts" 
        class="hover:text-blue-600 transition-colors duration-200"
      >
        {{ $t('posts') }}
      </router-link>

      <router-link 
        to="/posts/new" 
        class="hover:text-blue-600 transition-colors duration-200"
      >
        {{ $t('addNewPost') }}
      </router-link>
    </nav>

    <!-- Right: Language Selector + Logout -->
    <div class="flex items-center space-x-4">
      <select
        v-model="selectedLang"
        @change="switchLanguage"
        class="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="ja">🇯🇵 日本語</option>
      </select>

      <button
        @click="logout"
        class="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition-colors duration-200"
      >
        {{ $t('logout') }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { useRouter } from "vue-router";

const { locale } = useI18n();
const router = useRouter();
const selectedLang = ref(locale.value);

function switchLanguage() {
  locale.value = selectedLang.value;
}

// Simple logout action (clear token & redirect)
function logout() {
  localStorage.removeItem("authToken");
  router.push("/login");
}
</script>
