<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
    <div class="flex flex-col space-y-1.5 p-6">
      <div class="flex items-center">
        <span
          class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-300"
        ></span>
        <div class="ml-4">
          <h3 class="text-2xl font-semibold leading-none tracking-tight">
            {{ patient.name }}
          </h3>
          <router-link
          class="flex items-center gap-2 text-lg font-semibold md:text-base"
          to="/doctor/patient"
        >
          <span class="text-sm text-blue-600">View profile</span>
        </router-link>
        </div>
      </div>
    </div>
    <div class="p-6">
      <div class="grid gap-4">
        <div class="flex items-center">
            <PersonStanding class="w-4 h-4 mr-2"/>
            <span>{{ patient.activity }}</span>
        </div>
        <div class="flex items-center">
            <Clock class="w-4 h-4 mr-2"/>
            <span>{{ patient.duration }}</span>
        </div>
        <div class="flex items-center">
            <Calendar class="w-4 h-4 mr-2"/>
          <span>{{ patient.frequency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PersonStanding, Clock, Calendar, } from 'lucide-vue-next'

export default {
  components: { PersonStanding, Clock, Calendar },
  props: ['patient'],
}
</script>

<style scoped>
/* Add your styles here */
</style>
