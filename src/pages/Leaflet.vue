<script setup>
import { ref } from 'vue';
import LeafleatMap from '../components/LeafletMap.vue';


let center = ref([59.4269, 24.7438])
let zoom = ref(19)
</script>
<template>
    <button class="button is-primary" @click="center = [59.4269, 24.7438]">Go To Home</button>
    <button class="button is-primary" @click="center = [59.4219, 24.7935]">Go To ülemiste</button>
    <input type="range" min="1" max="19" v-model="zoom">
    <LeafleatMap :center="center" :zoom="zoom"></LeafleatMap>
    <LeafleatMap :center="[24.4269, 59.7438]" :zoom="19"></LeafleatMap>
</template>