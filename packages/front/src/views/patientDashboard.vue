<template>
  <div class="flex w-full min-h-screen bg-gray-100">
    <aside class="w-64 bg-white">
      <div class="flex flex-col h-full">
        <nav class="flex-grow mt-5 px-4 space-y-2">
          <a class="flex items-center space-x-2 text-gray-600 " href="#">
            <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8"
              src="/placeholder.svg?height=50&amp;width=50"></span>
            <span class="font-medium">Jeff</span>
          </a>
          <RouterLink to="/patient" class="mt-8">
            <button class="flex items-center space-x-2 text-gray-600 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Dashboard</span>
            </button>
          </RouterLink>
          <RouterLink to="/patient/exercises">
            <button class="flex items-center space-x-2 text-gray-600 " href="#">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M104 96h-48C42.75 96 32 106.8 32 120V224C14.33 224 0 238.3 0 256c0 17.67 14.33 32 31.1 32L32 392C32 405.3 42.75 416 56 416h48C117.3 416 128 405.3 128 392v-272C128 106.8 117.3 96 104 96zM456 32h-48C394.8 32 384 42.75 384 56V224H256V56C256 42.75 245.3 32 232 32h-48C170.8 32 160 42.75 160 56v400C160 469.3 170.8 480 184 480h48C245.3 480 256 469.3 256 456V288h128v168c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56C480 42.75 469.3 32 456 32zM608 224V120C608 106.8 597.3 96 584 96h-48C522.8 96 512 106.8 512 120v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288c17.67 0 32-14.33 32-32C640 238.3 625.7 224 608 224z" />
              </svg>
              <span>Exercises</span>
            </button>
          </RouterLink>
        </nav>
        <div class="flex-shrink-0 px-4 py-2">
          <RouterLink to="/">
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Logout
            </button>
          </RouterLink>
        </div>
      </div>
    </aside>
    <main class="flex-grow">
      <header class="p-4 bg-white">
        <h1 class="text-xl">DASHBOARD</h1>
      </header>
      <section class="p-4 space-y-4">
        <div class="grid rounded-lg border bg-card text-card-foreground shadow-sm bg-white" data-v0-t="card">
          <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
            <h3 class="tracking-tight text-lg font-semibold">Next exercise</h3>
          </div>
          <div class="p-6">
            <p class="text-gray-600 ">wrist vertical rotation</p>
            <p class="text-gray-600 ">Duration: 10 minutes</p>
            <p class="text-gray-600 ">Repetitions: 10</p>
            <p class="text-gray-600 ">Sets: 3</p>
          </div>
          <RouterLink to="/patient/exercises/bs" class="place-self-center">
            <button
              class="w-40 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mx-2">START
              EXERCISE</button>
          </RouterLink>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm bg-white" data-v0-t="card">
          <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
            <h3 class="tracking-tight text-lg font-semibold">Exercise Statistics</h3>
          </div>
          <div class="p-6">
            <div class="w-full h-[300px]">
              <div style="width: 100%; height: 100%;">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import LineChart from '../components/LineChart.vue'
</script>