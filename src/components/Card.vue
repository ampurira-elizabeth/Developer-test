
<template>
    <div class=" bg-white p-5 m-8 text-left  ">
        <div class="flex mb-4" >
            <div>
                <UserCircleIcon class="h-7 w-4" />
            </div>
            <div class=" ml-40 text-sm bg-yellow-100 text-red-500  p-1 rounded-lg">
                <p >High</p>
            </div>
        </div>
        <p>AB/testing-Round3</p>
        <span class="text-sm flex mt-3  ">
            <h6 class="text-blue-800 bg-slate-400 "> Prototype</h6>
            <h6 class="ml-7 text-pink-800 bg-pink-200 "> Research</h6>
        </span>
        <div class="flex mt-2"> 
            <div> 
                <CalendarIcon class="h-4 w-4 opacity-25 "/>
            </div>
            <h6 class="text-sm text-blue-600/25">2 sept 2022 -16 sept 2022</h6>
        </div>
    </div>
</template>
<script lang="ts">
import { UserCircleIcon } from "@heroicons/vue/20/solid";
import {CalendarIcon} from "@heroicons/vue/20/solid";
export default {
    components: {
        UserCircleIcon,
        CalendarIcon,
    }
}
</script>
 
<style scoped>

</style>
