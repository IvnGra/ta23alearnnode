<script setup>
defineProps(['items', 'title']);
</script>

<h3>{{ title }}</h3>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
                <input type="checkbox" v-model = "item.isDone">
            </li>
        </ul>
<template>
    <h1>hello component</h1>
</template>