<template>
  <div class="w-full h-20 flex items-center justify-between px-4">
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
          {{ editedTask }}
          <input type="text" v-model="inputValue" v-if="isEditOpen === true">
         
        </div>
        <div class="flex items-center space-x-1 my-1 text-[10px]">
          <div @click="editP"  class="w-auto px-2 bg-blue-200 text-blue-600 py-0.5 rounded-full font-bold ">
            {{ editedPriority }}
            <input type="text" v-model="inputValue" v-if="isEditOpen === true">
          </div>
          <div   @click="editPriority" class="w-auto px-2 bg-pink-200 text-pink-600 py-0.5 rounded-full font-bold">
            <!-- Design -->
            {{ editedPriority2 }}
            <input type="text" v-model="inputValue" v-if="isEditOpen === true">
          </div>
          <div>
            <PencilIcon class="h-7 w-4"  @click=edit(card.id)  />

            <TrashIcon class="h-7 w-4 ml-2 cursor-pointer" @click="deleteTask(card.id)" />
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
import { TrashIcon } from "@heroicons/vue/20/solid";

const cards = ref([
  { id: 1, status: 'In progress', priority: 'high', date: '01-03-2023 - 08-05-2024', members: [1, 2] },
  { id: 2, status: 'done', priority: 'high', date: '02-03-2023 - 08-05-2024  ', members: [1] },
  { id: 3, status: 'to-do', priority: 'low', date: '01-03-2023 - 08-05-2024', members: [1, 2, 3] },
  { id: 5, status: 'to-do', priority: 'high', date: '01-03-2023 - 08-05-2024', members: [1, 4] },
  { id: 6, status: 'done', priority: 'low', date: '01-03-2023 - 08-05-2024', members: [1, 2, 5,] },
])
const columns = ref(['to-do', 'In progress', 'done'])
const editedTask= ref('Documentation')
 const editedPriority = ref('priority')
 const editedPriority2 = ref('priority')

const inputValue = ref('')
const isEditOpen = ref(false)
const changeStatus = (id) => {
  setTimeout(() => {
    document.getElementById(id).style.display = 'none';
  }, 0)
}

const deleteTask = (id) => {
  const filteredArray = cards.value.filter(card => card.id !== id);
  console.log('filtered',filteredArray);
  cards.value = filteredArray;
}
const toggleInput = () => {
  isEditOpen.value = !isEditOpen.value
}
const edit = ()=>{
  if(isEditOpen.value == true ) {
    toggleInput();
    editedTask.value = inputValue.value
    // editedPriority.value = inputValue.value
    cards.value.push( editedTask.value)  
    // cards.value.push(editedPriority.value)
    console.log('edited', editedTask.value );
  }else toggleInput()
}

const editP = ()=>{
  if(isEditOpen.value == true ) {
    toggleInput();
    editedPriority.value = inputValue.value
    cards.value.push( editedPriority.value)  
    console.log('edited', editedPriority.value );
  }else toggleInput()
}

const editPriority = ()=>{
  if(isEditOpen.value == true ) {
    toggleInput();
    editedPriority2.value = inputValue.value
    cards.value.push( editedPriority2.value)  
    console.log('edited', editedPriority2.value );
  }else toggleInput()
}

</script>

<style scoped></style>