<template>
  <header class="header">
    <nav>
      <router-link to="/posts">{{ $t('posts') }}</router-link> |
      <router-link to="/posts/new">{{ $t('addNewPost') }}</router-link>
    </nav>

    <select v-model="selectedLang" @change="switchLanguage">
      <option value="en">🇬🇧 English</option>
      <option value="fr">🇫🇷 Français</option>
      <option value="ja">🇯🇵 日本語</option>
    </select>
  </header>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { locale } = useI18n();
const selectedLang = ref(locale.value);

function switchLanguage() {
  locale.value = selectedLang.value;
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
}
select {
  padding: 5px;
}
</style>
