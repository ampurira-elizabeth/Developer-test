<template>
    <div>
        <!-- <transition> -->
        <select class="static bg-blue-100 cursor-pointer">
            <Chevron-DownIcon class="h-7 w-4 cursor-pointer ... " />
            <option >Projects</option>
            <option>Meridan</option>
            <option>Risen</option>
            <option>Skillex
            </option>
            <option value="audi">Statra Insurance</option>

        </select>
        <!-- </transition> -->
        <div class="flex mt-5">
            <div>
                <PlusIcon class="h-7 w-4 cursor-pointer" />
            </div>
            <div>
                <button class="text-sm" >
                    Add New
                </button>
            </div>
        </div>

    </div>
</template>
<script>
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { PlusIcon } from "@heroicons/vue/20/solid";
// import {Squares2x2Icon} from "@heroicons/vue/20/solid";
export default {
    components: {
        ChevronDownIcon,
        PlusIcon,
        // Squares2x2Icon,
    },
}
</script>