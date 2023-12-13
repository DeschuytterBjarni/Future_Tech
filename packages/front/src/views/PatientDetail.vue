<template>
  <div class="flex flex-col w-full min-h-screen bg-gray-100">
    <header class="flex items-center h-16 px-4 border-b bg-white md:px-6">
      <nav
        class="flex-col justify-between hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <router-link
          class="flex items-center gap-2 text-lg font-semibold md:text-base"
          to="/doctor"
        >
          <span>Doctor's Dashboard</span>
        </router-link>
        <span class="flex items-center text-lg font-extrabold md:text-base"
          >></span
        >
        <span class="flex items-center text-lg font-semibold md:text-base"
          >Profile</span
        >
        <div class="flex-shrink-0 px-4 py-2">
          <RouterLink to="/">
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Logout
            </button>
          </RouterLink>
        </div>
      </nav>
    </header>
    <main
      class="flex min-h-[calc(100vh - theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10"
    >
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader
            class="flex flex-row items-center justify-between pb-2 space-y-0"
          >
            <CardTitle class="text-sm font-medium">Patient Profile</CardTitle>
          </CardHeader>
          <CardContent class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <span
                class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-300"
              ></span>
              <div>
                <h4 class="font-semibold">jos</h4>
                <p class="text-xs text-gray-500">5 exercises this week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="md:col-span-2 lg:col-span-3">
          <CardHeader
            class="flex flex-row items-center justify-between pb-2 space-y-0"
          >
            <CardTitle class="text-sm font-medium">Exercise Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart class="w-full h-[300px]" />
          </CardContent>
        </Card>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader
            class="flex flex-row items-center justify-between pb-2 space-y-0"
          >
            <CardTitle class="text-sm font-medium"
              >Exercise Recommendations</CardTitle
            >
          </CardHeader>
          <CardContent class="flex flex-col gap-4">
            <div v-for="i of received2">
              <h4 class="font-semibold">{{ i.name }}</h4>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            class="flex flex-row items-center justify-between pb-2 space-y-0"
          >
            <CardTitle class="text-sm font-medium">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent class="flex flex-col gap-4">
            <div v-for="i of received">
              <h4 class="font-semibold">jos</h4>
              <p class="text-xs text-gray-500">
                {{ i.exerciseId }}
              </p>
              <p class="text-xs text-gray-500">
                Repetitions: {{ i.repetitions }}
              </p>
              <p class="text-xs text-gray-500">
                Sets: {{ i.sets }}
              </p>
              <p class="text-xs text-gray-500">
                Duration: {{ i.duration }} minutes
              </p>
              <p class="text-xs text-gray-500">
                Done at: {{ i.createdAt }}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Card from '@/components/Card.vue'
import CardHeader from '@/components/CardHeader.vue'
import CardTitle from '@/components/CardTitle.vue'
import CardContent from '@/components/CardContent.vue'
import Avatar from '@/components/Avatar.vue'
import LineChart from '@/components/LineChart.vue'
import { ref } from 'vue'


export default {
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Avatar,
    LineChart,
  },
  setup() {
    const received = ref()
    const received2 = ref ()
    const data = fetch('http://localhost:3000/finished-exercises/')
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
        received.value = data
        return data
      })

    const data2 = fetch('http://localhost:3000/exercises/')
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data2 => {
        console.log(data2)
        received2.value = data2
        return data2
      })

    console.log(received)
    return { data, received, data2, received2 }
  },
}
</script>

<style>
/* Add your styles here */
</style>
