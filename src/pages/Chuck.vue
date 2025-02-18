<script setup>
import {ref} from 'vue';

let joke = ref('')


axios.get('https://api.chucknorris.io/jokes/random').then(ref => {
    joke.value = res.data.value
}).catch(err =>{
    console.log(err)
})


//let response = await fetch('https://api.chucknorris.io/jokes/random')
//joke.value = response.formData.value


</script>

<template>
    {{ joke }}
</template>