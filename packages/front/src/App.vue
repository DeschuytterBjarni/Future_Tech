<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
    <Dashboard v-for="(patient, index) in patients" :key="index" :patient="patient" />
  </div>
</template>

<script>
import Dashboard from './views/Dashboard.vue';

export default {
  components: {
    Dashboard,
  },
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
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
