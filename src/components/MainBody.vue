<template>
    <div class="flex gap-4  flex-wrap ">
        <div class="bg-gray-50  flex-1 text-sm ">
            <P class="text-left mx-8">To do
                <span class="p-2"> :</span>
            </P>
            <div>
                <Card />

            </div>
        </div>
        <div class="bg-gray-50 flex-1 text-sm">
            <p class="mx-10 text-left">In progress
                <span class="p-2"> :</span>
            </p>
            <div>

                <Card />
            </div>
            <div>
                <Card />
            </div>

        </div>
        <div class="bg-gray-50  flex-1 text-sm">
            <P class="mx-10 text-left">Done
                <span class="p-2"> :</span>
            </P>
            <div>
                <Card />
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./Card.vue"
// import db_tasks from "../../server/server.js"
// import { getDocs, doc, deleteDoc } from "firebase/firestore"
// import axios from "axios"
export default {
    components: {
        Card,
    },


}
</script>

<style></style>