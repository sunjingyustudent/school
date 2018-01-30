<template>
  <div class="nine-square">
    <div v-for="(item,index) in giftList" class="award-item" :class="{'award-item-light':LightFlag==item.flagNum}" @click="getGift(item)">
      <img :src="item.img" :class="item.class" />
    </div>
  </div>
</template>
<style lang="less">
  .nine-square{
    width: 300/20rem;
    height: 300/20rem;
    margin: 1rem auto;
    display: flex;
    flex-wrap:wrap;
    .award-item{
      width: 100/20rem;
      height: 100/20rem;
      line-height: 100/20rem;
      text-align: center;
      border: 1px solid #ccc;
      display: inline-block;
      background-color: #eee;
      position: relative;
      .flower{
       position: absolute;
       width: 30/20rem;
       height: 40/20rem;
       top: 30/20rem;
       left: 35/20rem;
     }
     .button{
      width: 100%;
      height: 100%;
    }
  }
  .award-item-light{
   background-color: yellow;
 }
}
</style>
<script>
  export default {
    props:['type','nineSquare','gift','count'],
    data() {
      return {
        LightFlag:0,
        clickFlag:0,//是否可以点击抽奖，不能重复点击
        giftList:[
        {class:'flower',flagNum:1,img:'../static/img/flower.png'},
        {class:'flower',flagNum:2,img:'../static/img/flower.png'},
        {class:'flower',flagNum:3,img:'../static/img/flower.png'},
        {class:'flower',flagNum:8,img:'../static/img/flower.png'},
        {class:'button',flagNum:-1,img:'../static/img/flower.png'},
        {class:'flower',flagNum:4,img:'../static/img/flower.png'},
        {class:'flower',flagNum:7,img:'../static/img/flower.png'},
        {class:'flower',flagNum:6,img:'../static/img/flower.png'},
        {class:'flower',flagNum:5,img:'../static/img/flower.png'},
        ],
      }
    },
    components: {
    },
    mounted() {
      this.giftAssign();
    },
    methods: {
      //礼物赋值
      giftAssign(){
        let _this = this;
        for(var i = 0;i<=8;i++){
          _this.giftList[i].img = _this.gift[i].img;
          _this.giftList[i].class = _this.gift[i].class == '' || _this.gift[i].class == undefined ?_this.giftList[i].class : _this.gift[i].class;
        }
      },
      //获取礼物
      getGift(item){
        let _this = this;
        if(item.class!='button'){
          return ;
        }

        //是否可以抽奖
        if(_this.clickFlag==0){
          //判断有无抽奖机会
          if(_this.count == 0){
            alert("没有抽奖机会");
            return ;
          }
          _this.clickFlag = 1;
          this.$emit('getReward');
        }
      },
      //执行快速转动
      rotateStart(){
        this.rotate(this.nineSquare.fast.round,this.nineSquare.fast.time,0);
      },
      //执行慢转动
      rotateEnd(){
        this.rotate(this.nineSquare.slow.round,this.nineSquare.slow.time,1);
      },
      rotate(round,time,ci){
        let _this = this;
        _this.LightFlag = 1;
        let num = 0;
        let flag = ci==0?round*8:round*8+_this.type;

        var my_interval = setInterval(function () 
        {
          num += 1;
          if (num < flag) {
            _this.LightFlag = _this.LightFlag == 8?1:_this.LightFlag += 1;
          } else {
            clearInterval(my_interval);
            if(ci == 0){
              _this.rotateEnd();
            } else{
              _this.showGift();
            }
          } 
        }, time);
      },
      showGift(){
        this.$emit('showReward');
      }
    },
    watch:{
      type(newValue,old){
        if(newValue != 0){
          this.rotateStart();
        }else{
          this.clickFlag = 0;
        }
      }
    }
  }
</script>
