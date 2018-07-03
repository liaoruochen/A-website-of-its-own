<template>
    <div class="container">
       
            <p class="title">
                不特别的你
            </p>
            <list></list>
    </div>
</template>

<script>
    // import top from '@/components/top-navigation/top-navigation'
    import list from "@/components/index/list"
    export default {
        components:{
            list
        }
    };
</script>

<style scoped>

    .title {
        font-size: 28px;
        text-align: center;
        margin-top: 40vh;
    }

</style>