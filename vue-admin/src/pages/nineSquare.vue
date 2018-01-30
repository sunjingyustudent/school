<template>
    <nine-square :type="type" :nineSquare="nineSquare" :gift="gift" :count="count" v-on:getReward="getReward" v-on:showReward="showReward"></nine-square>
</template>
<style>
    /*抽奖格子里图片的样式*/
    .flower1{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
<script>
    import NineSquare from '../components/nineSquare';

    export default {
        data() {
            return {
                //九宫格转速(fast为快速，slow为慢速，time为转一格需要的时间，1000为1秒，round为转多少圈)
                nineSquare:{
                    fast:{
                        time:100,round:4
                    },
                    slow:{
                        time:200,round:1
                    },
                },
                type:0,//转动后要停留的格子
                count:1,//抽奖次数
                gift:[
                {img:'../static/img/flower1.png',class:''},
                {img:'../static/img/flower1.png'},
                {img:'../static/img/flower1.png'},
                {img:'../static/img/flower1.png'},
                {img:'../static/img/button.png'},
                {img:'../static/img/flower1.png'},
                {img:'../static/img/flower1.png'},
                {img:'../static/img/flower1.png'},
                {img:'../static/img/flower1.png'},
                ],//九宫格礼物图片及样式，img:格子里的图片，class样式(未设置则使用默认样式，从左到右，从上到下设置)
            }
        },
        components: {
            NineSquare
        },
        mounted() {
        },
        methods: {
            //获取奖励，点击抽奖调用的方法
            getReward(){
                this.count = this.count - 1;
                this.type = Math.round(Math.random()*7+1);
                console.log(this.type);
            },
            //展示奖品，格子停止转动时调用的方法
            showReward(){
                this.type = 0;
                console.log("中奖啦!!!!");
            }
        },

    }
</script>
