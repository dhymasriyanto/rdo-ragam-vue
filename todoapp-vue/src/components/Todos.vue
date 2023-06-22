<template>
    <div v-for="todo in todos" :key="todo.id">
        <Todo 
            @delete-todo="$emit('delete-todo', todo.id)" 
            :todo="todo" />
    </div>
</template>

<script>
import Todo from './Todo.vue';

export default{
    name: 'Todos',
    props: {
        todos: Array
    },
    emits: ['delete-todo'],
    components:{
        Todo
    }
}
</script>

<style scoped>

</style>