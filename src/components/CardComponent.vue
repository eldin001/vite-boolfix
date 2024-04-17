<template>
    <div class="card">
        <img :src="image" class="card-img-top" :alt="title" >
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
               <span>{{ originalTitle }}</span>
               <br>
               <span> {{ language }}</span>
               <br>
               <span>{{ rating }}</span>
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:['id','title','imge','originalTitle', 'language','rating'],
    }
</script>

<style lang="scss" scoped>

</style>