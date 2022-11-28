<template>
    <div class="border-2 rounded-xl bg-white shadow-md">
        <img class="rounded-t-xl" :src='img' alt="">
        <h1 class="p-3 text-lg">{{ judul }}</h1>
        <h1 class="p-3 text-right font-thin hover:text-blue-600"><router-link :to="tourl" >{{ link }}</router-link></h1>
   </div>
   
</template>
<script>
export default {
    props : ['img','judul','link','tourl']
}
</script>