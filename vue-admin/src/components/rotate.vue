<template>
  <div class="rotate-box">
    <div class="rotate-plate">
      <img :src="bg.rotatePlateBg" class="rotatePlateBg" id="Plate" />
      <img :src="bg.point" class="point" @click="getReward"/>
    </div>
  </div>
</template>
<style lang="less">
  .rotate-box{
    width: 320/20rem;
    .rotate-plate{
      width: 320/20rem;
      height: 320/20rem;
      margin: 0 auto;
      border-radius: 160/20rem;
      position: relative;
      .rotatePlateBg{
        position: absolute;
        width: 100%;
      }
      .point{
        width: 1rem;
        position: absolute;
        border-radius: 1rem;
        top: 120/20rem;
        left: 300/40rem;
        z-index: 999;
      }
    }
  }
</style>
<script>
  import { Toast } from 'mint-ui';
  export default {
    props:['angle','count','bg','time'],
    data() {
      return {
        clickFlag:true,//是否能点击标识
        secondSpace:10,//转动间隔
      }
    },
    components: {
    },
    mounted() {
    },
    methods: {
      //点击抽奖
      getReward(){
        let _this = this;
        if(_this.clickFlag){
          if(_this.count == 0){
            let instance = Toast('您还没有抽奖机会');
            setTimeout(() => {
              instance.close();
            }, 2000);
            return ;
          }else{
            _this.clickFlag = false;
            _this.$emit('getReward');
          }
        }
      },
      //抽奖开始
      rotateStart(round){
        this.rotatePlate(round);
      },
      //旋转方法
      rotatePlate(round){
        let _this = this;
        var num = 0;
        var Plate = document.getElementById('Plate');
        
        var myInterval = setInterval(function () 
        {
          if(round>0){
            if(num == 360){
              num = 0;
              round -= 1;
              clearInterval(myInterval);
              _this.rotatePlate(round);
            }
            //5圈之前属于快速转动，最后5圈开始慢下来
            if(round>=5){
              //快速转动，每个时间间隔转动60度
              num += 60;
              Plate.style.transform = 'rotate('+num+'deg)';
            } else {
              //慢下来时，每个时间间隔转动40、30、20、10，以每圈递减
              if(round == 1){
                num += 10;
                if(num<_this.angle){
                  Plate.style.transform = 'rotate('+num+'deg)';
                }else{
                  Plate.style.transform = 'rotate('+_this.angle+'deg)';
                  num = 360;
                  _this.rotateEnd();
                  _this.clickFlag = true;
                  clearInterval(myInterval);
                }
              }else{
                num +=round*10;
                Plate.style.transform = 'rotate('+num+'deg)';
              }

            }
          }else{
            clearInterval(myInterval);
          }
        },_this.secondSpace);
      },
      //旋转结束
      rotateEnd(){
        let _this = this;
        _this.$emit('showReward');
      }
    },
    watch:{
      //监听角度
      angle(newValue,old){
        if(newValue != 0){
          var baseRound = 4;//慢下来要转动的圈数
          var times = this.time < 3 ? 3 :this.time;//传过来的时间不能小于3秒

          this.secondSpace = times * 1000 * 4/ 10 / 75 ;//计算时间间隔
          //如果时间间隔小于10毫秒，则时间间隔为10毫秒，因为setInterval执行的最小时间间隔为10毫秒
          if(this.secondSpace < 10){
            this.secondSpace = 10;
          }
           
          var time2 = this.secondSpace * 75;
          var time1 = times * 1000 - time2;
          //计算快动画执行的圈数
          var round = parseInt(time1/(this.secondSpace * 6))+1;

          this.rotateStart(round + baseRound);
        }
      }
    }


  }

</script>
