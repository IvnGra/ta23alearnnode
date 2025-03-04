<script setup>
defineProps(['character'])
</script>
<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">{{ character.name }}</p>
        </header>
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="character.image" alt="Placeholder image" />
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <table>
                    <tbody>
                        <tr>
                            <th>Status</th>
                            <th>{{ character.status }}</th>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <th>{{ character.gender }}</th>
                        </tr>
                        <tr>
                            <th>Species</th>
                            <th>{{ character.species }}</th>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <th>{{ character.location.name }}</th>
                        </tr>
                        <tr>
                            <th>Origin</th>
                            <th>{{ character.origin.name }}</th>
                        </tr>
                        <tr>
                            <th>Episodes</th>
                            <th>{{ character.episode.length }}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
 min-height: 100%;
}
</style>