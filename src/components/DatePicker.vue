<template >
    <div class="flex ">
        <p>select timeset</p>
    <VueDatePicker class="ml-3 w-1" v-model="date">
    </VueDatePicker>
    </div>
</template>

<script>
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    
    export default {
        components: { VueDatePicker },
        data() {
            return {
                date: null,
            };
        }
    }
</script>
