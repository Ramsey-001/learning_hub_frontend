<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="email" placeholder="Email" type="email" />
      <input v-model="password" placeholder="Password" type="password" />
      <input v-model="passwordConfirmation" placeholder="Confirm Password" type="password" />
      <button type="submit">Register</button>
    </form>

    <p v-if="error" style="color:red">{{ error }}</p>
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      }
    );

    // ✅ Use token from response JSON
    const token = response.data.token;
    if (token) {
      localStorage.setItem("jwt", token);
      router.push("/posts");
    } else {
      error.value = "No token received. Please try again.";
    }
  } catch (err) {
    error.value = err.response?.data?.errors?.join(", ") || "Signup failed. Try again.";
  }
};
</script>
