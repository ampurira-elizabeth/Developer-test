<template> 
<div :class="modelValue ? 'bg-green-550' : 'bg-red-400'" @click="toggle" class="w-11 h-2 flex items-center bg-green-500 transition-all duration-500 p-1 rounded-full justify center pt-5"> 
<div :class="{'translate-x-6':modelValue}" class="w-4 h-4 rounded-full mb-4 transition-all duration-500 transform bg-white ">
  
</div>

</div>
</template>
<script>
 export default{
    name:"Switch",
    props:{
        modelValue:{
            type:Boolean,
        }

    },
    methods:{
        toggle(){
            console.log(this.modelValue)
            this.$emit('update:modelValue', !this.modelValue)
        }
    }
 }
</script>