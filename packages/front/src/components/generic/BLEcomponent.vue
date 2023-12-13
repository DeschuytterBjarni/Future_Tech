<template>
    <div class="grid grid-cols-1 gap-x-4 gap-y-4">
        <div>{{ isSupported ? 'Bluetooth Web API Supported' : 'Your browser does not support the Bluetooth Web API' }}</div>

        <div v-if="isSupported">
            <button @click="requestDevice()">
                Request Bluetooth Device {{ characteristicData }}
            </button>
        </div>

        <div v-if="device">
            <p>Device Name: {{ device.name }}</p>
        </div>

        <div v-if="isConnected" class="bg-green-500 text-white p-3 rounded-md">
            <p>Connected</p>
        </div>

        <div v-if="!isConnected" class="bg-orange-800 text-white p-3 rounded-md">
            <p>Not Connected</p>
        </div>

        <div v-if="error">
            <div>Errors:</div>
            <pre>
                <code class="block p-5 whitespace-pre">{{ error }}</code>
            </pre>
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

  