<template>
  <div class=" my-component overflow-hidden" >
  <div class="flex w-screen ">
    <aside class="w-3/20 border-r-2 border-gray-300 drop-shadow-xl">
      <Sidebar class="md:w-32 lg:w-48   md:shrink-0" />
    </aside>
    <main class="w-17/20 bg-gray-50 p-5    ">
      <Navbar class="" />
      <MainBody class="mt-3  md:shrink-0"/>
    </main>
  </div>
</div>
</template>

<script>
import {ref} from "vue";
import  * as Vue from "vue";
import MainBody from "./components/MainBody.vue"
import Navbar from "./components/Navbar.vue"
import Sidebar from "./components/Sidebar.vue"
import {reactive, computed} from "vue"
import VueMq from "vue3-mq";
import Card from "./components/Card.vue"

export default {
  components: {
    Navbar,
    Sidebar,
    Card,
    MainBody,
  },
  setup(){
    const windowSize= reactive({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    const isSmallScreen = computed(() => {
      return windowSize.width < 600
    })
    window.addEventListener('resize', () => {
      windowSize.width = window.innerWidth
      windowSize.height = window.innerHeight
    })
    return{
      isSmallScreen
    }
  }
}

</script>

<style >
</style>
