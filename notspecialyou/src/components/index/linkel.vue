<template>
    <div>
        <nav class="linkel">
            <ul class="linkel-ul">
                <li>
                    <a href="https://github.com/liaoruochen" target="view_window">
                    <img src="@/assets/github.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://juejin.im/user/5acd74e0f265da238c3b051b/posts" target="view_window1">
                    <img src="@/assets/juejin.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://segmentfault.com/u/liaoruochen" target="view_window2">
                    <img src="@/assets/segmentfault.png" alt="">
                    </a>
                </li>
                 <li>
                    <a href="https://weibo.com/5517665877/profile?topnav=1&wvr=6&is_all=1" target="view_window3">
                    <img src="@/assets/weibo.png" alt="">
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped>
    .linkel{
        position: absolute;
        top: 0px;
        right: 0px;
    }
    .linkel-ul{
        margin-right: 40px;
    }
    .linkel-ul li{
        display: inline-block;
        margin-top: 20px;
        margin-right: 10px;
    }
    img{
        width: 25px;
        height: 25px;
    }
</style>