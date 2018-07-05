<template>
    <div class="photo-box">
        <img :class="rotate" @click="clickimg" src="@/assets/222.png" alt="">  
    </div>
</template>

<script>
export default {
    data(){
        return{
            rotate:null,
            hasrotate:false
        }
    },
    methods:{
    
        clickimg(){
            if(!this.hasrotate){
                this.rotate = "rotate"
                this.hasrotate = true
            }else{
                this.rotate=null
                this.hasrotate=false
            }
           
        }
    }
}
</script>

<style scoped>
    .photo-box{
        width: 100%;
        text-align: center
    }
    .photo-box img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: inline-block;
    }

    .rotate{
        animation: rotate 1s infinite linear
    }

    @keyframes rotate {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
