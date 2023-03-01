<template>
  <div class="w-1/4  h-full px-7 pt-7 pb-44 flex flex-col space-y-5 overflow-auto">
      <div class="font-bold text-xl">Flow List</div>
      <div class="flex bg-lime-300 rounded-lg p-1">
        <div> 
        <PlusIcon class="h-6 w-4" />
      </div>
      <div>
      <button class="text-bold" >Add new task</button>
    </div>
    </div>
    
      <div class="space-y-4">
          <NavList :items="navItems"/>
      </div>
      
         <div class="flex mt-28">
        <div>
          <WalletIcon class="h-6 stroke-2" />
        </div>
        <div class="font-bold">
          <p> Free Plan</p>
        </div>
      </div>
      <div class=" font-bold">
        <p>Projects <span class="text-sm ml-4 "> 4/10</span> </p>
        <ProgressBar  class=" sm:w-20 md:shrink-0  "/>
        <p>Tasks <span class="text-sm ml-3">unlimited</span> </p>
      </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  WalletIcon,
} from '@heroicons/vue/24/outline'
import NavList from './NavItem.vue'
import {PlusIcon} from '@heroicons/vue/24/solid'
import ProgressBar from "./ProgressBar.vue";

const navItems = [
  { label: 'Plan', icon: 'CalendarIcon', subList: [] },
  {
      label: 'Task List', name: 'task', icon: 'ClipboardDocumentListIcon', subList: [
          { name: 'Meridian', color: 'bg-rose-600' },
          { name: 'Risen', color: 'bg-blue-600' },
          { name: 'SkillBox', color: 'bg-yellow-400' },
          { name: 'Statra Insurance', color: 'bg-pink-600' },
      ]
  },
  {
      label: 'Projects', name: 'project', icon: 'FolderIcon', subList: [
          { name: 'Meridian', color: 'bg-rose-600' },
          { name: 'Risen', color: 'bg-blue-600' },
          { name: 'SkillBox', color: 'bg-green-600' },
          { name: 'Statra Insurance', color: 'bg-pink-600' },
          { name: '+Add New' },

      ]
  },
  {
      label: 'Tags', name: 'tag', icon: 'TagIcon', subList: []},
];
</script>

<style scoped>

</style>