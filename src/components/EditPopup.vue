<template>
    <div class="flex">
        <p  @click="showEdit(task)" class="rounded-md  ml-8  text-sm font-medium text-black  ">
            <!-- edit -->
            <PencilIcon class="h-7 w-4 "/>
        </p>
        <div>
            <!-- <p >del</p> -->
            <TrashIcon class="h-7 w-4 ml-2" @click="deleteTask(task)"   />

        </div>
    </div>

    <div v-if="isOpen" class=" absolute border border-gray-300 bg-white shadow-lg p-10 w-[500px] h-[500px] z-50">

        <p @click="closeModal" class="text-sm cursor-pointer">X</p>
        <form class="align-center p-3 " @submit.prevent="updateTask">
            <div class="flex ">
                <div class="p-3">
                    <label> Project </label> <br />
                    <!-- <input class=" w-40 text-center bg-gray-100" type="project"  v-model="taskId" /> <br /> -->
                    <input class=" w-40 text-center bg-gray-100" type="project" required v-model="projectName" /> <br />
                </div>
                <div class="ml-2 p-3 ">
                    <label> Priority</label> <br />

                    <select class=" bg-gray-100 text-center outline-pink-500 " required v-model="priority">
                        <option> Low</option>
                        <option> High</option>
                    </select>
                </div>
            </div>
            <div class="flex p-3">
                <div>
                    <label> Category1 </label> <br />

                    <select class=" bg-gray-100  text-center outline-pink-500 " required v-model="category1">
                        <option> Design</option>
                        <option> Prototype</option>
                        <option> Design Systems</option>

                    </select>
                </div>
                <div class="ml-8">
                    <label> Category2 </label> <br />

                    <select class=" bg-gray-100 text-center outline-pink-500  " required v-model="category2">
                        <option> Design</option>
                        <option> Prototype</option>
                        <option> Design Systems</option>

                    </select>

                </div>
            </div>

            <div class="flex p-3">
                <div>
                    <label>StartDate </label> <br />
                    <input class=" text-center bg-gray-100 " type="date" required v-model="startDate" />

                </div>
                <div class="ml-8">
                    <label>EndDate </label> <br />
                    <input class="text-center bg-gray-100" type="date" required v-model="endDate" />
                </div>
            </div>

            <div class="mt-2 ml-40">
                <button type="submit"
                    class="inline-flex justify-center bg-orange-600 rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Edit
                </button>
            </div>

        </form>

    </div>
</template>
  
<script >
import { ref } from 'vue'
import db_tasks from '../../server/server.js'
import { TrashIcon } from "@heroicons/vue/20/solid";
import {PencilIcon} from "@heroicons/vue/20/solid"
import { addDoc, doc, setDoc, updateDoc, deleteDoc }
    from 'firebase/firestore';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

export default {
    components:{
        TrashIcon,
        PencilIcon,
    },
    props: ['task'],
    data() {
        return {
            doc, db_tasks, addDoc, updateDoc, setDoc, deleteDoc,

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

    methods: {

        updateTask() {
            const id = this.taskId;
            let taskData = {
                projectNam: this.projectName,
                startDate: this.startDate,
                endDate: this.endDate,
                category1: this.category1,
                category2: this.category2,
            }
            console.log('task id', this.taskId);

            const docRef = doc(db_tasks, this.taskId);

            updateDoc(docRef, taskData)
                .then(docRef => {
                    console.log("Value of an Existing Document Field has been updated");
                })
                .catch(error => {
                    console.log(error);
                })

        },

        deleteTask(task) {
            let id = task.id;
            const docRefDel = doc(db_tasks, id);
            deleteDoc(docRefDel)
                .then(() => {
                    console.log("doc deleted")
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error);
                });
        },
        showEdit(task) {
            this.isOpen = true
            console.log('task here', task);
            this.projectName = task.projectNam
            this.priority = task.priority
            this.category1 = task.category1
            this.category2 = task.category2
            this.startDate = task.startDate
            this.endDate = task.endDate
            this.taskId = task.id
        },
        closeModal() {
        this.isOpen = false
    },
    openModal() {
        this.isOpen = true
    }
    },


 


}









</script>
  