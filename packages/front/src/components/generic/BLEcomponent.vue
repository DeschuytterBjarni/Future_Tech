<template>
    <div class="w-full max-w-xs">
        <div class="border text-card-foreground bg-white dark:bg-gray-900 shadow-md rounded-lg" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="h-6 w-6 text-blue-500 dark:text-blue-400">
                        <path d="m7 7 10 10-5 5V2l5 5L7 17"></path>
                    </svg>
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">Bluetooth</h3>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-200">Connect with Squeezy.</p>
            </div>
            <div class="p-6 mt-4">
                <div class="flex flex-col-reverse items-center justify-between">
                    <div v-if="!isConnected" class="flex items-center gap-2">
                        <span class="flex h-3 w-3 rounded-full bg-red-500"></span>
                        <p class="text-sm font-medium text-gray-600 dark:text-gray-300">Status: Disconnected</p>
                    </div>
                    <div v-if="isConnected" class="flex items-center gap-2">
                        <span class="flex h-3 w-3 rounded-full bg-green-500"></span>
                        <p class="text-sm font-medium text-gray-600 dark:text-gray-300">Status: Connected</p>
                    </div>
                    <button @click="requestDevice()"
                        class="mb-8 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-blue-500 border-blue-500 dark:text-blue-400 dark:border-blue-400">
                        Connect
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBluetooth, useInterval } from '@vueuse/core'
import { onMounted, ref } from 'vue';
let ran = ref(0)

interface BluetoothValues {
    isConnected: boolean,
    isSupported: boolean,
    device: any, // Replace 'any' with the actual device type, if known
    error: any, // Replace 'any' with the appropriate error type, if known
    server: any // Define the correct type for 'server'
}

const {
    requestDevice,
    isConnected,
    isSupported,
    device,
    error,
    server,
} = useBluetooth({
    acceptAllDevices: true,
    optionalServices: ['19b10000-0000-537e-4f6c-d104768a1214'], // Replace with the appropriate service UUID(s)
})
async function readCharacteristic() {
    if (server.value) {
        ran.value = 1
        try {
            console.log('Reading characteristic...')
            const service = await server.value.getPrimaryService('19b10000-0000-537e-4f6c-d104768a1214') // Replace with the appropriate service UUID
            const pushCharacteristic = await service.getCharacteristic('19b10000-a001-537e-4f6c-d104768a1214')

            pushCharacteristic.addEventListener('characteristicvaluechanged',
                (event: any) => {
                    console.log(event.target.value.getFloat32(0, true))
                });
            pushCharacteristic.startNotifications()

            // Read the value of the characteristic
            // const pushValue = await pushCharacteristic.readValue()

            // console.log('Received characteristic value:', pushValue)

            // // decode the received data
            // const gyro = ref({ x: 0.0, y: 0.0, z: 0.0 })
            // const acc = ref({ x: 0.0, y: 0.0, z: 0.0 })
            // const mag = ref({ x: 0.0, y: 0.0, z: 0.0 })


            // gyro.value.x = pushValue.getFloat32(0, true)
            // gyro.value.y = pushValue.getFloat32(4, true)
            // gyro.value.z = pushValue.getFloat32(8, true)
            // acc
            // acc.value.x = pushValue.getFloat32(12, true)
            // acc.value.y = pushValue.getFloat32(16, true)
            // acc.value.z = pushValue.getFloat32(20, true)
            // // mag
            // mag.value.x = pushValue.getFloat32(24, true)
            // mag.value.y = pushValue.getFloat32(28, true)
            // mag.value.z = pushValue.getFloat32(32, true)
            // console.log('Decoded characteristic value:', gyro.value.x)

            // Decode the received data according to your specification
            // Parse the bytes to extract the floats and populate your 'physics' array or display the values as needed
            // Example: const data = new DataView(value.buffer)
            //          const float1 = data.getFloat32(0, true) // Read the first float (assuming little endian)
            //          ...

            // Update your UI or perform necessary actions with the retrieved data
        } catch (e) {
            console.error('Error reading characteristic:', e)
        }
    } else {
        setTimeout(readCharacteristic, 100)
    }
}

onMounted(() => {

    readCharacteristic();
    // window.setInterval(() => {

    //  }, 1000);
})


</script>

  