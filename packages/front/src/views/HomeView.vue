<script setup lang="ts">
</script>

<template>
  <div class="flex h-screen items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-6">Welcome to the revalidation aid</h1>
        <router-link to="/patient">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2">
            Patient
          </button>
        </router-link>
        <router-link to="/doctor">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mx-2">
            Doctor
          </button>
        </router-link>
      </div>
    </div>
</template>
