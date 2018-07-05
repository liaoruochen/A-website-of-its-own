<template>
    <div class="container">
        <linkel></linkel>
        <photo></photo>
        <p class="title">
            不特别的你
        </p>
        <list></list>
    </div>
</template>

<script>
    // import top from '@/components/top-navigation/top-navigation'
    import photo from '@/components/index/photo'
    import list from "@/components/index/list"
    import linkel from '@/components/index/linkel'
    export default {
        components:{
            list,
            photo,
            linkel
        }
    };
</script>

<style scoped>

    .title {
        font-size: 28px;
        text-align: center;
        margin-top: 30px;
    }

</style>