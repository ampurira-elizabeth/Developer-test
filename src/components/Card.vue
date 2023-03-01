
<template>
    <div class=" bg-white p-4 m-8 text-left rounded-lg shadow-lg">
        <div class="flex mb-4">
            <div class="flex">
                <UserCircleIcon class="h-8 w-8 rounded-full bg-gray-300" />
                <UserCircleIcon class="h-8 w-8 -ml-4 bg-gray-300 border border-white rounded-full" />
                <UserCircleIcon class="h-8 w-8 -ml-4 bg-gray-300 border border-white rounded-full" />
                
            </div>
            <div class=" font-bold text-sm my-3 ml-40 text-sm bg-yellow-100 text-red-500  p-1 rounded-lg">
                <p>{{ task?.priority }}</p>
            </div>
            <div>
                <!-- <TrashIcon class="h-7 w-2 ml-6 " @click.prevent="deleteTask" />   -->
                 
            </div>
        </div>
        <p class="font-bold text-sm my-3">{{ task?.projectNam }}</p>
        <span class="text-sm flex mt-3  ">
            <h6 class="w-auto px-2 bg-blue-200 text-blue-600 py-0.5 rounded-full font-bold captalise"> {{ task?.category1 }}</h6>
            <h6 class="w-auto px-2 bg-pink-200 text-pink-600 py-0.5 rounded-full font-bold captalise">{{ task?.category2 }}</h6>
        </span>
        <div class="flex mt-2">
            <div>
                <CalendarIcon class="h-4 w-4 opacity-25" />
            </div>
            <h6 class="text-sm text-blue-600/25">{{ task?.startDate }} - {{ task?.endDate }}</h6>
            <div>
                <EditPopup :task="task" />
            </div>

        </div>
    </div>
</template>


<script >
import { UserCircleIcon } from "@heroicons/vue/20/solid";
import { CalendarIcon } from "@heroicons/vue/20/solid";
import {TrashIcon} from "@heroicons/vue/20/solid";
import EditPopup from './EditPopup.vue'
import { doc, deleteDoc }
    from 'firebase/firestore';
import db_tasks from '../../server/server.js'
export default {
    components: {
        UserCircleIcon,
        CalendarIcon,
        TrashIcon,
        EditPopup,
    },
    data() {
        return {
             db_tasks,deleteDoc,doc, 
            selectedtask: {},
            taskId: null,
            docRef: null,
            isOpen: false,
            priority: "",
            projectName: "",
            startDate: "",
            endDate: "",
            category1: "",
            category2: "",
        }
    },
   
props:{
    task:Object
},

methods:{

        

}

}

</script>
 
<style scoped></style>
