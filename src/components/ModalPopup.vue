<template>
    <div class="">
        <button type="button" @click="openModal"
            class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Add New Task
        </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">

                                <!-- form -->
                                <form class="align-center p-3 " @submit.prevent="handleSubmit" >
                                    <div class="flex ">
                                        <div class="p-3">
                                            <label> Project </label> <br />
                                            <input class=" w-40 text-center bg-gray-100" type="project" required
                                                v-model="projectName" /> <br />
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

                                            <select class=" bg-gray-100  text-center outline-pink-500 " required v-model="category1" >
                                                <option> Design</option>
                                                <option> Prototype</option>
                                                <option> Design Systems</option>

                                            </select>
                                        </div>
                                        <div class="ml-8">
                                            <label> Category2 </label> <br />

                                            <select class=" bg-gray-100 text-center outline-pink-500  " required v-model="category2" >
                                                <option> Design</option>
                                                <option> Prototype</option>
                                                <option> Design Systems</option>

                                            </select>

                                        </div>
                                    </div>

                                    <div class="flex p-3">
                                        <div>
                                            <label>StartDate </label> <br />
                                            <input class=" text-center bg-gray-100 " type="date" required
                                                v-model="startDate" />

                                        </div>
                                        <div class="ml-8">
                                            <label>EndDate </label> <br />
                                            <input class="text-center bg-gray-100" type="date" required v-model="endDate" />
                                        </div>
                                    </div>
                                    
                            <div class="mt-2 ml-40">
                                <button type="submit" 
                                    class="inline-flex justify-center bg-orange-600 rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    >
                                    Add Task
                                </button>
                            </div>

                                </form>
                            </DialogTitle>

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)
const priority = ref("")
const projectName = ref("")
const startDate = ref("")
const endDate = ref("")
const category1=ref("")
const category2=ref("")
const handleSubmit = () => {
    console.log(`priority ${priority.value}, projectName ${projectName.value}, 
    startDate ${startDate.value}, endDate ${endDate.value}
    category1 ${category1.value}, category2 ${category2.value}`)
}


function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}


</script>
  