<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
        {{ $t("loginTitle") }}
      </h2>

      <div class="space-y-4">
        <input
          v-model="email"
          type="email"
          :placeholder="$t('email')"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          v-model="password"
          type="password"
          :placeholder="$t('password')"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          @click="login"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {{ $t("loginButton") }}
        </button>

        <p class="text-center text-gray-600 mt-4">
          {{ $t("noAccount") }}
          <router-link
            to="/register"
            class="text-blue-600 hover:underline font-medium"
          >
            {{ $t("signUp") }}
          </router-link>
        </p>

        <p v-if="error" class="text-center text-red-600 mt-2">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "../api";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const { t } = useI18n();

const login = async () => {
  error.value = "";
  try {
    const res = await api.post("/users/sign_in", {
      user: { email: email.value, password: password.value },
    });

    const token = res.data.token;
    if (token) {
      localStorage.setItem("jwt", token);
      router.push("/posts");
    } else {
      error.value = t("noTokenError");
    }
  } catch (err) {
    console.error(err);
    error.value = t("loginFailed");
  }
};
</script>
