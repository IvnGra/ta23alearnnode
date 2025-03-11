<script setup>
    defineProps(['info'])
</script>
<template>
    <div class="buttons">
        <button class="button is-primary" @click ="$emit('prev')" :disble = !info.prev>Prev</button>
        <button class="button is-primary" @click ="$emit('next')" :disble = !info.next>Next</button>
    </div>
</template>