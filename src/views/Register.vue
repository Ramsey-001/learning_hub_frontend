<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
      <h1 class="text-2xl font-bold mb-6 text-center">{{ $t("registerTitle") }}</h1>

      <form @submit.prevent="register" class="flex flex-col space-y-4">
        <input
          v-model="email"
          type="email"
          :placeholder="$t('email')"
          class="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          v-model="password"
          type="password"
          :placeholder="$t('password')"
          class="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          v-model="passwordConfirmation"
          type="password"
          :placeholder="$t('confirmPassword')"
          class="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          {{ $t("registerButton") }}
        </button>
      </form>

      <p v-if="error" class="text-red-500 text-center mt-4">{{ error }}</p>

      <p class="text-center mt-6 text-sm">
        {{ $t("haveAccount") }}
        <router-link to="/login" class="text-blue-600 hover:underline">
          {{ $t("loginHere") }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../api";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");
const error = ref("");
const router = useRouter();

const register = async () => {
  try {
    const response = await api.post(
      "/users",
      {
        user: {
          email: email.value,
          password: password.value,
          password_confirmation: passwordConfirmation.value,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const token = response.data.token;
    if (token) {
      localStorage.setItem("jwt", token);
      router.push("/posts");
    } else {
      error.value = $t("noTokenError");
    }
  } catch (err) {
    error.value =
      err.response?.data?.errors?.join(", ") || $t("signupFailed");
  }
};
</script>
