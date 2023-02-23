<template>
    <div class="flex gap-4  flex-wrap ">
        <div class="bg-gray-50  flex-1 text-sm ">
            <P class="text-left mx-8">To do
                <span class="p-2"> :</span>
            </P>
           
            <draggable v-model="tasks" @start="drag=true" 
            @end="drag=false" >
           <div v-for="task in tasks" :key="task.id" >
                <Card :task="task" :item="item" />
            </div>
        </draggable>
        </div>

        <div class="bg-gray-50 flex-1 text-sm">
            <p class="mx-10 text-left">In progress
                <span class="p-2"> :</span>
            </p>
            <draggable v-model="tasks" @start="drag=true"
            @end="drag=false" >
            <div v-for="task in tasks" :key="task.id" >

                <Card :task="task"  />
            </div>
        </draggable>
        </div>
        <div class="bg-gray-50  flex-1 text-sm">
            <P class="mx-10 text-left">Done
                <span class="p-2"> :</span>
            </P>
            <draggable v-model="tasks" @start="drag=true"
            @end="drag=false" >
            <div v-for="task in tasks" :key="task.id"  >

                <Card :task="task"  />
            </div>
        </draggable>
        </div>
    </div>
</template>

<script>
import Card from "./Card.vue"
import db_tasks from "../../server/server.js"
import {VueDraggableNext} from "vue-draggable-next"
import { getDocs, doc, deleteDoc } from "firebase/firestore"
export default {
    components: {
        Card,
        draggable:VueDraggableNext,
    },
    data() {
        return {
            tasks: [],
        }
    },

    methods: {
    


        // fetch data from firebase
        async getTasks() {
            console.log('loadind data')
            let db_tasksSnapShot = await getDocs(db_tasks)
            console.log('data', db_tasksSnapShot)

            let tasks = []

            db_tasksSnapShot.forEach((doc) => {
                let Docdata = doc.data()
                Docdata.id = doc.id
                tasks.push(Docdata)
            })

            this.tasks = tasks

        }
    },
    mounted() {
        this.getTasks()
    },
}
</script>
<style >


</style>