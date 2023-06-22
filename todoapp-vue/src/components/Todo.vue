<template>
    <div :class="[todo.isDone?'is-done':'','todo']">
        <h3>
            {{ todo.text }}
            <i @click="deleteTodo(todo.id)" class="fas fa-times"></i>
        </h3>
        <p>{{ todo.date }}</p>
    </div>
</template>

<script>
export default{
    name: 'Todo',
    props: {
        todo: Object
    },
    methods :{
        deleteTodo(id){
            this.$emit('delete-todo', id)
        }
    }
}
</script>

<style scoped>
.fas{
    color: red;
}

.todo {
    background: #f1f1f1;
    margin: 3px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
}

.todo.is-done {
    border-left: 5px solid teal;
}

.todo h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>