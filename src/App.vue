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
    // Calendar,
    // DatePicker
  },
  data() {
    return {
      tasks: [{
        id: 1,
        title: "A/B Testing"
      }, {
        id: 2,
        title: "Create microinteraction flow "
      }, {
        id: 3,
        title: "Update Support Documentations"
      }
      ],

      priorities: ["High", "Low"],
      categories: ["Design", "Prototype", "Research","Design System"],
      projects: [{
        members:[
         {
          name:"lz",
          photo:""
        },
        {
          name:"lz",
          photo:""
        },

      ], 
      Priority:"High",
      tast:"AB testing",
      startDate:"12-07-2022",
      endDate:"12-07-2023",

      categories:[
        {
          name:"Design",
          color:"Pink"
        },
        {
          name:"Prototype",
          color:"Blue"
        },
        {
          name:"Reseach",
          color:"red"
        },
        { 
          name:"Design System",
          color:"Green"
        }

      ],
      // todo
      status:"To Do"
      },
      {
        members:[
         {
          name:"lz",
          photo:""
        },
        {
          name:"lz",
          photo:""
        },
        {
          name:"lz",
          photo:""
        },
      ],
      priority:"low",
      task:" Update support Documentation",
      startDate:"12-08-2022",
      endDate:"12-09-2022",
      categories:[
        {
          name:"Design",
          color:"blue"
        },
        {
          name:"Prototype",
          color:"pink"
    
        },
        {
          name:"Research",
          color:"green"
        },
        {
          name:"Design System",
          color:"red"
        },
      ],
      // in progress
      status:"In progress"
      },
      {
        members:[
         {
          name:"lz",
          photo:""
        },
        {
          name:"lz",
          photo:""
        },
        {
          name:"lz",
          photo:""
        },
      ],
      Priority:"low",
      task:" Create microinteractive flow",
      startDate:"12-08-2022",
      endDate:"12-09-2022",
      categories:[
        {
          name:"Design",
          color:"blue"
        },
        {
          name:"Prototype",
          color:"pink"
        },
        {
          name:"Research",
          color:"green"
        },
        {
          name:"Design System",
          color:"red"
        }
      ],
      // in progress
      status:"In progress",
      },
      {
        members:[
         {
          name:"lz",
          photo:""
        },
        {
          name:"lz",
          photo:""
        },
        {
          name:"lz",
          photo:""
        },
      ],
      priority:"high",
      task:"create prototype for payments in protopyr",
      startDate:"12-08-2022",
      endDate:"12-09-2022",
      categories:[
      {
          name:"Design",
          color:"blue"
        },
        {
          name:"Prototype",
          color:"pink"
        },
        {
          name:"Research",
          color:"green"
        },
        {
          name:"Design System",
          color:"red"
        }
      ],
      // done
      status:"Done",
      },
      {
        members:[
         {
          name:"lz",
          photo:""
        },
        {
          name:"lz",
          photo:""
        },
        {
          name:"lz",
          photo:""
        },
      ],
      priority:"high",
      task:"create prototype for payments in protopyr",
      startDate:"12-08-2022",
      endDate:"12-09-2022",
      categories:[
        {
          name:"Design",
          color:"blue"
        },
        {
          name:"Prototype",
          color:"pink"
        },
        {
          name:"Research",
          color:"green"
        },
        {
          name:"Design System",
          color:"red"
        }
      ],
      
    }
    ],
    }

  },
methods: {
//   filteredProjects(){
// filterProject= projects.filter(p=>p.status===
//     'In Progress' || p.status==="To Do" || p.status==="Done")
//      && moment(p.endDate,"DD/MM/YYYY").isBefore(moment())
//      ("projects",filterProject)
//   },

    
  },
  created() {
//  this.filteredProjects();
  },
  // mounted() {

  // }




}

</script>

<style >

</style>
