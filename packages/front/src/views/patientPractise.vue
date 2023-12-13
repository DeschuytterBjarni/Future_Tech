<template>
    <div class="w-full min-h-screen bg-gray-100">
        <div v-if="getId == 'wvr'">
            <div class="p-4 bg-white grid justify-items-center">
                <h1 class="text-3xl">Wrist vertical rotation</h1>
            </div>
            <div class="grid grid-cols-2">
                <div class="mt-64 ml-16">
                    <p class="text-4xl">repetitions: 10</p>
                    <p class="text-4xl">sets: 3</p>
                </div>
                <div v-if="up" class="mt-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/> </svg>
                </div>
                <div v-if="upgood" class="mt-40">
                    <svg style="color: rgb(61, 243, 57);" xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" fill="#3df339"></path> </svg>
                </div>
                <div v-if="down" class="mt-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/> </svg>
                </div>
                <div v-if="downgood" class="mt-40">
                    <svg style="color: rgb(57, 243, 88);" xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" fill="#39f358"></path> </svg>
                </div>
                <div v-if="done" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                </div>
                <div v-if="start" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                </div>
            </div>
        </div>
        <div v-if="getId == 'whr'">
            <div class="p-4 bg-white grid justify-items-center">
                <h1 class="text-3xl">Wrist horizontal rotation</h1>
            </div>
            <div class="grid grid-cols-2">
                <div class="mt-64 ml-16">
                    <p class="text-4xl">repetitions: 10</p>
                    <p class="text-4xl">sets: 3</p>
                </div>
                <div v-if="right" class="mt-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                </div>
                <div v-if="rightgood" class="mt-40">
                    <svg style="color: rgb(61, 243, 57);" xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                </div>
                <div v-if="left" class="mt-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                </div>
                <div v-if="leftgood" class="mt-40">
                    <svg style="color: rgb(57, 243, 88);" xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                </div>
                <div v-if="done" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                </div>
                <div v-if="start" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                </div>
            </div>
        </div>
        <div v-if="getId == 'bs'">
            <div class="p-4 bg-white grid justify-items-center">
                <h1 class="text-3xl">Ball squeeze</h1>
            </div>
            <div class="grid grid-cols-2">
                <div class="mt-64 ml-16">
                    <p class="text-4xl">repetitions: 8</p>
                    <p class="text-4xl">sets: 3</p>
                </div>
                <div v-if="right" class="mt-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                </div>
                <div v-if="rightgood" class="mt-40">
                    <svg style="color: rgb(61, 243, 57);" xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                </div>
                <div v-if="left" class="mt-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                </div>
                <div v-if="leftgood" class="mt-40">
                    <svg style="color: rgb(57, 243, 88);" xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                </div>
                <div v-if="ingood" class="flex mt-56">
                    <svg style="color: rgb(57, 243, 88);" xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                    <svg style="color: rgb(57, 243, 88);" xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                </div>
                <div v-if="done" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                </div>
                <div v-if="start" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
import { ref } from 'vue';

export default{
    setup() {
        const up = ref(false);
        const down = ref(false);
        const upgood = ref(false);
        const downgood = ref(false);
        const done = ref(false);
        const right = ref(false);
        const left = ref(false);
        const rightgood = ref(false);
        const leftgood = ref(false);
        const start = ref(true);
        const ingood = ref(true);

        return {
            up,
            down,
            upgood,
            downgood,
            done,
            right,
            left,
            rightgood,
            leftgood,
            start,
            ingood,
        }
    },
    computed: {
        getId() {
            return this.$route.params.id;
        }
    }
}
</script>