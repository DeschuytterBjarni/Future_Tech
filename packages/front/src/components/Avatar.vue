<template>
    <img :src="src" :alt="alt" :width="size" :height="size" class="avatar" />
  </template>
  
  <script setup lang="ts">
  defineProps(['src', 'alt', 'size'])
  </script>
  
  <style scoped>
  .avatar {
    border-radius: 50%;
  }
  </style>
  