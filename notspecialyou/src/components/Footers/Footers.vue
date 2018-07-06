<template>
    <div class="footer-msg">
        <footer>
            <div class="footer-msg__top">
                <span>
                    <img src="../../assets/c.png"/>
                    <span>2018-2020 | </span>
                    <img src="../../assets/heart.png"/>
                    <span>敲代码的李某人</span>                    
                </span>
            </div>
            <div class="footer-msg__bottom">
                <span>本站总访问量 9999次 | 您是第 999个来访者 | 浙ICP备案18020724号-1</span>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-msg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    text-align: center;
}
.footer-msg__bottom {
    padding: 10px 0;
}
span {
    color: #ACACAC;
    text-align: center;
    font-size: 16px;
}
img {
    width: 14px;
    height: 14px;
}
</style>
