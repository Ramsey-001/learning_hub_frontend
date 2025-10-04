<script setup>
import api from "../api";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  try {
    const res = await api.post("/users/sign_in", {
      user: { email: email.value, password: password.value }
    });

    // ✅ Get token from response headers or JSON
      const token = res.data.token;
      if (token) {
        localStorage.setItem("jwt", token);
        router.push("/posts");
      } else {
        error.value = "No token received. Please try again.";
      }
  } catch (err) {
    console.error(err);
    alert("Login failed");
  }
};
</script>

<template>
  <div>
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>
