
<template>
    <div class=" bg-white p-5 m-8 text-left rounded-lg shadow-lg">
        <div class="flex mb-4">
            <div>
                <UserCircleIcon class="h-7 w-4" />
            </div>
            <div class=" ml-40 text-sm bg-yellow-100 text-red-500  p-1 rounded-lg">
                <p>{{ task?.priority }}</p>
            </div>
        </div>
        <p>{{ task?.projectNam }}</p>
        <span class="text-sm flex mt-3  ">
            <h6 class="text-blue-800 bg-slate-400 "> {{ task?.category1 }}</h6>
            <h6 class="ml-7 text-pink-800 bg-pink-200 ">{{ task?.category2 }}</h6>
        </span>
        <div class="flex mt-2">
            <div>
                <CalendarIcon class="h-4 w-4 opacity-25 " />
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
import EditPopup from './EditPopup.vue'
export default {
    components: {
        UserCircleIcon,
        CalendarIcon,
        EditPopup,
    },
   
props:{
    task:Object
}

}
</script>
 
<style scoped></style>
