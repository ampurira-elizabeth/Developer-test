<template>
  <div class=" overflow-hidden">
  <div class="flex w-screen ">
    <aside class="w-3/20 border-r-2 border-gray-300 drop-shadow-xl">
      <Sidebar />
    </aside>
    <main class="w-17/20 bg-gray-50 p-5    ">
      <Navbar class="" />
      <MainBody class="mt-3"/>
    </main>
  </div>
</div>
</template>

<script>
import {ref} from "vue";
import MainBody from "./components/MainBody.vue"
import Navbar from "./components/Navbar.vue"
import Sidebar from "./components/Sidebar.vue"
import Card from "./components/Card.vue"

export default {
  components: {
    Navbar,
    Sidebar,
    Card,
    MainBody,

  },




}

</script>

<style >

</style>
