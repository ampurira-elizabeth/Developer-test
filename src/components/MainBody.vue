<template>
    <div>
        <div>

            <div class=" text-sm cursor-pointer  " v-for="task in tasks" :key="task.id">
                <div @click="setTask(task)" class="p-1 w-full">
                    {{ task.category1 }}
                </div>

            </div>
            <div v-for="task in tasks" :key="task.id">
            <label class="text-sm cursor-pointer bg-gray-50" @click="setDate(task)">
            {{ task.startDate }}
            </label>
        </div>
        </div>
        <div class="flex gap-4  flex-wrap ">
            <div class="bg-gray-50  flex-1 text-bold " >
                <P class="text-left mx-8 text-xl">To do 
                    <span class="p-2"> :</span>
                </P>
                <draggable v-model="tasks" @start="drag = true" @end="drag = false"  >
                    <div v-for="task in tasks" :key="task.id"   >
                        <Card :task="task" :item="item" />
                    </div>
                </draggable>
            </div>

            <div class="bg-gray-50 flex-1 text-bold">
                <p class="mx-10 text-left  text-xl ">In progress
                    <span class="p-2"> :</span>
                </p>
                <draggable v-model="tasks" @start="drag = true" @end="drag = false">
                    <div v-for="task in tasks" :key="task.id">
                        <Card :task="task" />
                    </div>
                </draggable>
            </div>
            <div class="bg-gray-50  flex-1 text-bold  text-xl">
                <P class="mx-10 text-left">Done
                    <span class="p-2"> :</span>
                </P>
                <draggable v-model="tasks" @start="drag = true" @end="drag = false">
                    <div v-for="task in tasks" :key="task.id">

                        <Card :task="task" />
                    </div>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./Card.vue"
import db_tasks from "../../server/server.js"
import { VueDraggableNext } from "vue-draggable-next"
import { getDocs, doc, deleteDoc } from "firebase/firestore"
export default {
    components: {
        Card,
        draggable: VueDraggableNext,
    },
    data() {
        return {
            tasks: [],
            selectedCategory: null,
            startDates: null,
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
                console.log('data fetched', Docdata);
            })
            this.tasks = tasks
        },

    // async groupedCards() {
    //   const groups = {}
    //   Card.value.forEach((card) => {
    //     if (!groups[card.status]) {
    //       groups[card.status] = []
    //     }
    //     groups[card.status].push(card)
    //   })
    //   return groups
    // },
        
        setTask(task) {
            this.selectedCategory = task.category1;
            console.log('selected category', this.selectedCategory);
            let filtered = this.tasks.filter((item) =>
                item.category1 == this.selectedCategory
            )
            this.tasks = []
            this.tasks.push(...filtered)
            console.log('filtered tasks', typeof (filtered))
        },
        setDate(task){
               this.startDates= task.startDate;
            console.log('sdate', this.startDates);
            let filtered = this.tasks.filter((item) =>
            item.startDate == this.startDates
            )
            this.tasks=[]
            this.tasks.push(...filtered)

        }
    },
    created() {
        this.getTasks();
    },

}
</script>
<style ></style>