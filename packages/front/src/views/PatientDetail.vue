<template>
  <div class="flex flex-col w-full min-h-screen bg-gray-100">
    <header class="flex items-center h-16 px-4 border-b bg-white md:px-6">
      <nav
        class="flex-col justify-between hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <router-link
          class="flex items-center gap-2 text-lg font-semibold md:text-base"
          to="/doctor/dashboard"
        >
          <span>Doctor's Dashboard</span>
        </router-link>
        <span class="flex items-center text-lg font-extrabold md:text-base"
          >></span
        >
        <span class="flex items-center text-lg font-semibold md:text-base"
          >Profile</span
        >
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
                <h4 class="font-semibold">Bella White</h4>
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
            <div>
              <h4 class="font-semibold">Ball squeeze</h4>
              <p class="text-xs text-gray-500">15 minutes, 3 times a week</p>
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
            <div>
              <h4 class="font-semibold">John Doe</h4>
              <p class="text-xs text-gray-500">
                Completed 30 minutes of ball squeeze
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

export default {
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Avatar,
    LineChart,
  },
}
</script>

<style>
/* Add your styles here */
</style>
