<template>
    <div>
        <span>{{user.username}}</span>
    </div>
</template>
<script setup>
const props=defineProps({
    user:{
        type:Object,
        required:true,
        default:()=>{}
    }
})
</script>