<script setup>
import { ref } from 'vue';
import ItemList from './ItemList.vue';
 
let message = ref('Hello World!');
let i = 1;
let items = ref([
    { id: i++, name:'piim', isDone: false},
    { id: i++, name:'viin', isDone: false},
    { id: i++, name:'õlu', isDone: true},
    { id: i++, name:'krõpsud', isDone: false},
])

function addItem(){
    if(message.value !== ""){
        items.value.push({id: i++, name: message.value.trim(),isDone: false});
    }
    message.value = "";
}
 
 let doneItems = computed(() => items.value.filter(item =>  item.isDone));
 let ToDoItems = computed(() => items.value.filter(item =>  item.isDone));
 
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
        <div class="content">
            <ItemList :items='items' title = "All items"></ItemList>
            <ItemList :items='doneItems' title = "Done items"></ItemList>
            <ItemList :item="ToDoItems" title="ToDoItems"></ItemList>
        </div>
    </div>
</template>
 
<style></style>