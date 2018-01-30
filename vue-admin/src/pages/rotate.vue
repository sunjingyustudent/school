<template>
<rotate-plate v-on:getReward="getReward" v-on:showReward="showReward" :angle="angle" :count="count" :bg="bg" :time="time"></rotate-plate>
</template>
<style>
</style>
<script>
    import RotatePlate from '../components/rotate';

    export default {
        data() {
            return {
                angle:0,//旋转角度----(根据后端返回的中奖类型计算的旋转角度)
                count:2,//抽奖次数
                bg:{
                    rotatePlateBg:'../static/img/rotate.png',
                    point:'../static/img/point.png'
                },//rotatePlateBg：背景转盘，point：指针
                time:4,//转盘转动的秒数，不得少于3秒
            }
        },
        components: {
            RotatePlate
        },
        mounted() {
        },
        methods: {
            //获取奖励
            getReward(){
                let _this = this;
                _this.count = _this.count - 1;
                //angle角度要根据后端的返回类型，计算旋转角度后传入子组件
                _this.angle = Math.round(Math.random()*359+1);
            },
            //展示奖励
            showReward(){
               let _this = this;
               console.log("展示中奖纪录"+ _this.angle);
               _this.angle = 0;
            }
        },
    }
</script>
