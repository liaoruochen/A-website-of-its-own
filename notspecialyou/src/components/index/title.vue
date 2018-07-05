<template>
    <div class="title-container">
        <photo></photo>
        <div class="title-box" :class="biganimation">
            <router-link to="/">
                <span class="index-title" ref="big" @mouseover="mouseoverBig" @mouseout="mouseoutSmall">
                    不特别的你
                </span>
            </router-link>
        </div>
        <list></list>
    </div>
</template>

<script>
    // import top from '@/components/top-navigation/top-navigation'
    import photo from '@/components/index/photo'
    import list from "@/components/index/list"

    export default {
        components: {
            list,
            photo,
        },
        data() {
            return {
                biganimation:null
            }
        },
        methods: {
            mouseoverBig() {
                this.biganimation="big"
            },
            mouseoutSmall(){
                this.biganimation=null
            }
        }
    };
</script>

<style scoped>
    .title-container{
        margin-top: 28vh;
        animation: movedown 1s ease-out forwards ;
    }
    .title-box{
        width: 100%;
        /* height: 40px; */
        text-align: center;
        margin-top: 30px;
        
    }
    .big{
        animation: big 1s ease-out forwards ;
    }
    .index-title{
        font-size: 28px;
    }
    @keyframes big {
        0%{
            transform: scale(1)
        }
        100%{
            transform: scale(1.5)
        }
    }
    @keyframes movedown {
        0%{
            transform: translateY(-30px)
        }
        100%{
            transform: translateY(0)
        }
    }
</style>