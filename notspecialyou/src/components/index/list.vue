<template>
    <div class="box">
        <ul class="list">
            <li class="title">
                <router-link to="/" class="type">
                    <img src="@/assets/home1.png" alt="">
                    <span>首页</span>
                </router-link>
            </li>
            <li class="title">
                <router-link to="/" class="type">
                    <img src="@/assets/label1.png" alt="">
                    <span>标签</span>
                </router-link>
            </li>
            <li class="title">
                <router-link to="/" class="type">
                    <img src="@/assets/archives1.png" alt="">
                    <span>归档</span>
                </router-link>
            </li>
            <li class="title">
                <router-link to="/" class="type">
                    <img src="@/assets/people1.png" alt="">
                    <span>关于</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .box {
        width: 100%;
    }

    .list {
        max-width: 250px;
        min-width: 230px;
        height: 60px;
        /* background-color: red; */
        margin: 0 auto;
        margin-top: 20px;
        display: flex;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 10px;
    }

    .title {
        display: inline-block;
        flex: 1;
    }

    .type {
        display: block;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .type img {
        width: 20px;
        height: 20px;
    }

    .type span {
        font-size: 12px;
        color: #000;
    }
</style>