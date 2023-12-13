<template>
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div class="flex flex-col space-y-1.5 p-6">
        <div class="flex items-center">
          <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
          <div class="ml-4">
            <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ patient.name }}</h3>
            <a class="text-sm text-blue-600" rel="ugc">View Profile</a>
          </div>
        </div>
      </div>
      <div class="p-6">
        <div class="grid gap-4">
          <div class="flex items-center">
            <!-- <person-standing/> -->
            <span>{{ patient.activity }}</span>
          </div>
          <div class="flex items-center">
            <span>{{ patient.duration }}</span>
          </div>
          <div class="flex items-center">
            <span>{{ patient.frequency }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { X } from 'lucide-vue-next';
  export default {
    components: {
        X
    },
    props: ['patient'],
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  