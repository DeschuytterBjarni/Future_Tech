<template>
    <button @click="requestDevice()">
        Request Bluetooth Device
    </button>
</template>
  
<script>
import { useBluetooth } from '@vueuse/core'

const {
    isSupported,
    isConnected,
    device,
    requestDevice,
    server,
} = useBluetooth({
    acceptAllDevices: true,
})
</script>
  