<template>
    <div>
        <div class="flex w-full items-center justify-between ">
            <div class="mx-5 ... flex ">
                <div>
                    <StarIcon class="h-6 w-4 fill-white bg-yellow-300 rounded-full" />
                </div>
                <div class="w-full ">
                    <h1 class="font-bold text-xl">Statra Insurance</h1>
                </div>
                <div>
                    <Chevron-DownIcon class="h-8 w-4 cursor-pointer " />
                </div>
            </div>
            <div class="flex">
                <UserCircleIcon class="h-8 w-8 rounded-full bg-gray-300" />
                <UserCircleIcon class="h-8 w-8 -ml-4 bg-gray-300 border border-white rounded-full" />
                <UserCircleIcon class="h-8 w-8 -ml-4 bg-gray-300 border border-white rounded-full" />
            </div>
            <div class="mx-5... font-bold flex border-2 border-gray-300 drop-shadow-lg">
                <div>
                    <BriefcaseIcon class="h-5 w-5 p-1" />
                </div>
                <div>
                    <h1>apps</h1>
                </div>
                <div>
                    <Chevron-DownIcon class="h-6 w-4 cursor-pointer " />
                </div>
            </div>
            <div class="mx-5 ...  bg-black ... rounded-lg flex text-white 300/100 ">
                <div>
                    <PlusIcon class="h-7 w-3" />
                </div>
                <div>
                    <ModalPopup />
                </div>

            </div>

        </div>
        <div class="flex mt-5 p-2  font-bold cursor-pointer drop-shadow-lg border-b-2 border-gray-300  ">
            <div class="flex  hover:text-pink-500 ease-in duration-500 ">
                <div>
                    <NewspaperIcon class="h-6 w-3" />
                </div>
                <div>
                    <h6>Backlog</h6>
                </div>
            </div>
            <div class="flex ml-10  hover:text-orange-400 ease-in duration-500 ">
                <div>
                    <CameraIcon class="h-6 w-3" />
                </div>
                <div>
                    <h6>Priority chart</h6>
                </div>
            </div>
            <div class="flex ml-10  hover:text-yellow-500 ease-in duration-500 ">
                <div>
                    <ChartBarIcon class="h-6 w-3 " />
                </div>
                <div class="underline underline-offset-4 caret-red-500 ">
                    <h6>Kanban Workflow</h6>
                </div>
            </div>
        </div>
        <!-- mainbody -->
        <div class=" font-bold mr-10 p-2 flex border-b-2 border-gray-300   ">
            <div class="flex flex-1">
                <div>
                    <MagnifyingGlassIcon class="h-6 w-4  " />
                </div>
                <div>
                    <input type="text" placeholder="search for something" class="bg-transparent" />
                </div>
            </div>
            <div class=" flex-1 flex ">
                <div>
                    <Switch v-model="switchState" class=" mr-2" />
                </div>
                <div>
                    <DatePicker class="bg-none" />
                </div>
            </div>
            <div>
                <div class="flex flex-1">
                    <div>
                        <FolderArrowDownIcon class="h-6 w-3" />
                    </div>
                    <div>
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script  >
import {
    PlusIcon, StarIcon,
    CameraIcon, MagnifyingGlassIcon,
    FolderArrowDownIcon, ChartBarIcon,
    NewspaperIcon, BriefcaseIcon, ChevronDownIcon,
    ChevronUpIcon, UserCircleIcon
} from "@heroicons/vue/20/solid";
import Switch from "./Switch.vue"
import ModalPopup from './ModalPopup.vue'
import DatePicker from './DatePicker.vue'
export default {
    components: {
        PlusIcon, StarIcon, DatePicker, Switch, ChevronUpIcon, ModalPopup,
        CameraIcon, MagnifyingGlassIcon, FolderArrowDownIcon,
        ChartBarIcon, NewspaperIcon, BriefcaseIcon, ChevronDownIcon, UserCircleIcon,
    },
    data() {
        return {
            switchState: false
        }
    },
    methods: {

    }

}



</script>


<style></style>