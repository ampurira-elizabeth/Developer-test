<template>
  <div class="w-full h-20 flex items-center justify-between px-4">
    <!-- <button class="bg-green-300 p-2 rounded-md" @click="storeData">Store</button> -->
  </div>
  <div class="w-screen h-full flex">
    <div class="w-1/4 " v-for="column in columns" :key="column">
      <div class="m-2 p-5 bg-white rounded-lg h-auto border shadow" draggable="true" @dragstart="changeStatus(card.id)"
        :id="card.id" v-for="card in cards.filter((el) => el.status === column)" :key="card">
        <div class="flex items-center justify-between">
          <div class="flex -space-x-4">
            <div class="h-10 w-10 rounded-full border-2 border-slate-500 bg-black" v-for="member in card.members"
              :key="member">
            </div>
          </div>
          <div class="w-auto px-2 bg-rose-200 text-rose-600  rounded-full font-bold">{{ card.priority }}</div>
        </div>
        <div class="font-bold my-3">
          {{ card.title }}
          <!-- {{ editedTask }} -->
          <!-- <input type="text" class="border-2 p-2" v-model="inputValue" v-if="isEditOpen === true"> -->
        </div>
        <div class="flex items-center space-x-1 my-1 text-[10px]">
          <div class="w-auto px-2 bg-blue-200 text-blue-600 py-0.5 rounded-full font-bold ">
            {{ editedPriority }}
            <!-- <input type="text" v-model="inputValue" v-if="isEditedOpen === true"> -->
          </div>
          <div class="w-auto px-2 bg-pink-200 text-pink-600 py-0.5 rounded-full font-bold">
            {{ editedPriority2 }}
            <!-- <input type="text" v-model="inputValue" v-if="isEditedOpen2 === true"> -->
          </div>
          <div class="flex">
            <div title="edit">
              <EditPopup />
              <!-- <PencilIcon  class="h-7 w-4 cursor-pointer" @click=edit(card) /> -->
            </div>
            <div title="delete">
              <TrashIcon class="h-7 w-4 ml-2 cursor-pointer" @click="deleteTask(card.id)" />
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-2 text-slate-500 mt-4 text-[10px]">
          <CalendarIcon class="h-5 stroke-2" />
          <span>{{ card.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { PencilIcon } from "@heroicons/vue/20/solid"
import { useLocalStorage } from '@vueuse/core'
import { TrashIcon } from "@heroicons/vue/20/solid";
import EditPopup from "./EditPopup.vue"
const cards = ref([
  { id: 1, title: "testing", status: 'In progress', priority: 'high', date: '01-03-2023 - 08-05-2024', members: [1, 2] },
  { id: 2, title: "Documentation", status: 'done', priority: 'high', date: '02-03-2023 - 08-05-2024  ', members: [1] },
  { id: 3, title: "API Documentation", status: 'to-do', priority: 'low', date: '10-06-2023 - 08-06-2024', members: [1, 2, 3] },
  { id: 4, title: "Backend implementation", status: 'to-do', priority: 'high', date: '01-02-2023 - 08-05-2024', members: [1, 4] },
  { id: 5, title: "UI Design", status: 'done', priority: 'low', date: '11-05-2023 - 20-06-2024', members: [1, 5,] },
  { id: 6, title: "AB testing", status: 'done', priority: 'high', date: '01-04-2023 - 26-04-2024', members: [1, 2, 5,] },
])
const columns = ref(['to-do', 'In progress', 'done'])
const editedTask = ref('Documentation')
const editedPriority = ref('prototype')
const editedPriority2 = ref('Design')
const inputValue = ref('')
const isEditOpen = ref(false)
const isEditedOpen = ref(false)
const isEditedOpen2 = ref(false)
// store data.

localStorage.setItem( 'mydata', JSON.stringify(cards.value))
const storedData = JSON.parse( localStorage.getItem('mydata') )
console.log('the data', storedData)

const changeStatus = (id) => {
  setTimeout(() => {
    document.getElementById(id).style.display = 'none';
  }, 0)
}
const deleteTask = (id) => {
  localStorage.removeItem(cards.value.id)
  const filteredArray = cards.value.filter(card => card.id !== id);
  localStorage.setItem('mydata', JSON.stringify(filteredArray))
  console.log('filtered', filteredArray);
  cards.value = filteredArray;
}
// const toggleInput = () => {
//   isEditOpen.value = !isEditOpen.value
// }
// const toggleInputs = () => {
//   isEditedOpen.value = !isEditedOpen.value
// }
// const toggleInputs2 = () => {
//   isEditedOpen2.value = !isEditedOpen2.value
// }
// const edit = (card) => {
//   if (isEditOpen.value == true) {
//     toggleInput();
//     editedTask.value = inputValue.value
//     inputValue.value = card.title
//     cards.value.push(editedTask.value)
//     console.log('edited', editedTask.value);
//   } else toggleInput()
// }
// const editP = () => {
//   if (isEditedOpen.value == true) {
//     toggleInputs();
//     editedPriority.value = inputValue.value
//     cards.value.push(editedPriority.value)
//   } else toggleInputs()
// }
// const editPriority = () => {
//   if (isEditedOpen2.value == true) {
//     toggleInputs2();
//     editedPriority2.value = inputValue.value
//     cards.value.push(editedPriority2.value)
//     console.log('edited', editedPriority2.value);
//   } else toggleInputs2()
// }
</script>

<style scoped></style>