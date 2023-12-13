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
                                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="w-6 h-6">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span>Dashboard</span>
                        </button>
                    </RouterLink>
                    <RouterLink to="/patient/exercises">
                        <button class="flex items-center space-x-2 text-gray-600 mb-8" href="#">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                    d="M104 96h-48C42.75 96 32 106.8 32 120V224C14.33 224 0 238.3 0 256c0 17.67 14.33 32 31.1 32L32 392C32 405.3 42.75 416 56 416h48C117.3 416 128 405.3 128 392v-272C128 106.8 117.3 96 104 96zM456 32h-48C394.8 32 384 42.75 384 56V224H256V56C256 42.75 245.3 32 232 32h-48C170.8 32 160 42.75 160 56v400C160 469.3 170.8 480 184 480h48C245.3 480 256 469.3 256 456V288h128v168c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56C480 42.75 469.3 32 456 32zM608 224V120C608 106.8 597.3 96 584 96h-48C522.8 96 512 106.8 512 120v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288c17.67 0 32-14.33 32-32C640 238.3 625.7 224 608 224z" />
                            </svg>
                            <span>Exercises</span>
                        </button>
                    </RouterLink>
                    <BLEcomponent />
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
        <div v-if="getId == 'wvr'" class="w-full">
            <div class="p-4 bg-white grid justify-items-center">
                <h1 class="text-3xl">Wrist vertical rotation</h1>
            </div>
            <div class="grid grid-cols-2">
                <div class="mt-64 ml-16">
                    <p class="text-4xl">repetitions: 10</p>
                    <p class="text-4xl">sets: 3</p>
                </div>
                <div v-if="up" class="mt-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="currentColor"
                        class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                    </svg>
                </div>
                <div v-if="upgood" class="mt-40">
                    <svg style="color: rgb(61, 243, 57);" xmlns="http://www.w3.org/2000/svg" width="240" height="240"
                        fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                            fill="#3df339"></path>
                    </svg>
                </div>
                <div v-if="down" class="mt-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="currentColor"
                        class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                    </svg>
                </div>
                <div v-if="downgood" class="mt-40">
                    <svg style="color: rgb(57, 243, 88);" xmlns="http://www.w3.org/2000/svg" width="240" height="240"
                        fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                            fill="#39f358"></path>
                    </svg>
                </div>
                <div v-if="done" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </div>
                <div v-if="start" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </div>
                <div v-if="rightgood" class="mt-40">
                    <svg style="color: rgb(61, 243, 57);" xmlns="http://www.w3.org/2000/svg" width="240" height="240"
                        fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </div>
                <div v-if="left" class="mt-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </div>
                <div v-if="leftgood" class="mt-40">
                    <svg style="color: rgb(57, 243, 88);" xmlns="http://www.w3.org/2000/svg" width="240" height="240"
                        fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </div>
                <div v-if="done" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </div>
                <div v-if="start" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </div>
                <div v-if="rightgood" class="mt-40">
                    <svg style="color: rgb(61, 243, 57);" xmlns="http://www.w3.org/2000/svg" width="240" height="240"
                        fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </div>
                <div v-if="left" class="mt-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </div>
                <div v-if="leftgood" class="mt-40">
                    <svg style="color: rgb(57, 243, 88);" xmlns="http://www.w3.org/2000/svg" width="240" height="240"
                        fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </div>
                <div v-if="ingood" class="flex mt-56">
                    <svg style="color: rgb(57, 243, 88);" xmlns="http://www.w3.org/2000/svg" width="160" height="160"
                        fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <svg style="color: rgb(57, 243, 88);" xmlns="http://www.w3.org/2000/svg" width="160" height="160"
                        fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </div>
                <div v-if="done" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </div>
                <div v-if="start" class="flex mt-56">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                        class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import BLEcomponent from '../components/generic/BLEcomponent.vue';


export default {
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
        const ingood = ref(false);
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
        };
    },
    computed: {
        getId() {
            return this.$route.params.id;
        }
    },
    components: { BLEcomponent }
}
</script>