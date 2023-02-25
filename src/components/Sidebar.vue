<template>
  <div class="h-screen px-2 bg-gray-50 pt-2 space-y-5">
    <div>
      <h3 class="text-xl font-medium p-3">Flows list</h3>
    </div>
    <div class="bg-yellow-200 ... flex rounded-lg ">
      <div>
        <PlusIcon class="h-6 w-4" />
      </div>
      <div>
        <button>
          <h5 class="ml-2 ">Add New Task</h5>
        </button>
      </div>
    </div>

    <div class="sidebar top-0 bottom-0 left-0 w-full font-medium indent-1 text-left ... ">
      <div class="flex">
        <div>
          <BriefcaseIcon class="h-5 w-5 p-1" />
        </div>
        <div>
          <p> Plan</p>
        </div>
      </div>
      <div class="flex">
        <div>
          <BriefcaseIcon class="h-5 w-5 p-1" />
        </div>
        <div>
          <p> Task List</p>
        </div>
      </div>
      <div class="flex">
        <div>
          <BriefcaseIcon class="h-5 w-5 p-1" />
        </div>
        <div>
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
      <div class="flex">
        <div>
          <TagIcon class="h-5 w-4" />
        </div>
        <div>
          <p> Tags</p>
        </div>
      </div>
      <div class="flex mt-48">
        <div>
          <InboxIcon class="h-5 w-4 " />
        </div>
        <div>
          <p> Free Plan</p>
        </div>
      </div>
      <div class="mt-10">
        <p>Projects <span class="text-sm ml-9"> 4/10</span> </p>
        <ProgressBar />
        <p>Tasks <span class="text-sm ml-9">unlimited</span> </p>

      </div>
    </div>

</div>
</template>

<script lang="ts">
import { PlusIcon } from "@heroicons/vue/20/solid";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { InboxIcon } from "@heroicons/vue/20/solid";
import { TagIcon } from "@heroicons/vue/20/solid";
import { BriefcaseIcon } from "@heroicons/vue/20/solid";
import Dropdown from "./Dropdown.vue";
import ProgressBar from "./ProgressBar.vue";



export default {
  components: {
    PlusIcon, Dropdown,
    ProgressBar,
    ChevronDownIcon, InboxIcon, TagIcon, BriefcaseIcon
  },

}
</script>