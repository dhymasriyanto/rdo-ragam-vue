<template>
  <div class="container">
    <Header title="Todo List"/>
    <Todos
      @delete-todo="deleteTodo"
      :todos="todos" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Todos from './components/Todos.vue';

export default {
  name: 'App',
  components:{
    Header,
    Todos
  },
  data(){
    return{
      todos : []
    }
  },
  methods:{
    deleteTodo(id){
      if(confirm('Apakah anda yakin?'))
        this.todos = this.todos.filter((todo)=>todo.id != id)
    }
  },
  created(){
    this.todos = [
      {
        id: '1',
        text: 'Ngoding with RDO',
        date: '2023-03-26',
        isDone: true
      },
      {
        id: '2',
        text: 'Membeli takjil',
        date: '2023-03-27',
        isDone: false
      },
      {
        id: '3',
        text: 'Sahur on the road',
        date: '2023-03-28',
        isDone: false
      },
    ]
  }
}
</script>

<style>

</style>
