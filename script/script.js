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
                
        removeTask(id){
            for(let i=0;i<this.tasks.length;i++){
                if(id === this.tasks[i].id) {
                    this.tasks.splice(i,1);
                }
            }
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
        done(id){
            for(let i=0;i<this.tasks.length;i++){
                if(id === this.tasks[i].id) {
                    this.tasks[i].done = !this.tasks[i].done
                }
            }
        }
    },
    amounted(){
    }
  }).mount('#app');