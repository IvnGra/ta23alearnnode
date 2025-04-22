<script setup>
import { ref } from 'vue';
let message = ref([]);
let input = ref('');

async function send(){
   let res = await axios.post('http://localhost:3000', {
    message: input.value
   })
   console.log()
   input.value = ' '
}
</script>

<template>
  <div class="field has-addons">
            <div class="control">
                <input class="input" v-model="input" @keypress.enter="send">
            </div>
            <div class="control">
                <button class="button is-info" @click="send">
                    Add Item
                </button>
            </div>
        </div>
</template>