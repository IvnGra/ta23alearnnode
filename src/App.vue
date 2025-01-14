<script setup>
import { ref } from 'vue';
 
let message = ref('Hello World!');
let items = ref(('piim','viin', 'õlu', 'krõpsud'))

function addItem(){
    if(message.value !== ""){
        items.value.push(message.value);
    }
    message.value = "";
}
 
 
 
</script>
 
 
 
<template>
    <div class="container">
        <div class="field has-addons">
            <div class="control">
                <input class="input" v-model="message" @keypress.enter="addItem">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Add Item
                </button>
            </div>
        </div>
 
        <ul>
            <li v-for="item in items">{{ item }}</li>
        </ul>
    </div>
</template>
 
<style></style>