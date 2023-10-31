const { createApp } = Vue;

  createApp({
    data() {
      return {
        tasks : [
            {
                id:1,
                text: 'pippo',
                done: true
            },
            {
                id:2,
                text: 'pluto',
                done: false
            },
            {
                id: 3,
                text: 'topolino',
                done: false
            },
        ],
        lastId : 3,
        todoText:'',
      }
    },
    methods:{
                
        removeTask(i){
            this.tasks.splice(i,1);
        },
        addTask(){
            this.lastId++;
            const newTask={
                id: this.lastId,
                text: this.todoText,
                done: false,
            };
            this.tasks.unshift(newTask);
            this.todoText = '';
        },
    },
    amounted(){
    }
  }).mount('#app');