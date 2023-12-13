<template>
  <div class="flex flex-col w-full min-h-screen bg-gray-100">
    <header class="flex items-center h-16 px-4 border-b bg-white md:px-6">
      <nav
        class="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <router-link
          class="flex items-center gap-2 text-lg font-semibold md:text-base"
          to="/doctor"
        >
          <span>Doctor's Dashboard</span>
        </router-link>
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
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
        <PatientCard
          v-for="(patient, index) in patients"
          :key="index"
          :patient="patient"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import PatientCard from '../components/PatientCard.vue'

export default {
  components: { PatientCard },
  data() {
    return {
      patients: [
        {
          name: 'Patient 1',
          activity: 'Running',
          duration: 'Duration: 30 minutes',
          frequency: 'Frequency: 3 times a week',
          profileLink: '#',
        },
        {
          name: 'Patient 2',
          activity: 'Swimming',
          duration: 'Duration: 1 hour',
          frequency: 'Frequency: 2 times a week',
          profileLink: '#',
        },
        {
          name: 'Patient 3',
          activity: 'Cycling',
          duration: 'Duration: 45 minutes',
          frequency: 'Frequency: 4 times a week',
          profileLink: '#',
        },
      ],
    }
  },
  setup() {
    const received = ref()
    const data = fetch('http://localhost:3000/exercises/')
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
        received.value = data
        return data
      })

    console.log(received)
    return { data, received }
  },
}
</script>

<style scoped>
/* Add your styles here */
</style>
