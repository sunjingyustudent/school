<template>
    <div class="upload-box">
        <input type="file" name="file" @change="upload" class="file" />
        <img src="../assets/images/add.png" class="tip-img" />
        <span class="tip-span">
            请上传图片
        </span>
    </div>
</template>
<style lang="less">
    .upload-box{
        width: 12rem;
        height: 5rem;
        border:1px dashed #999;
        border-radius: 5/20rem;
        overflow: hidden;
        position: relative;
        .file{
            width: 12rem;
            height: 5rem;
            border-radius: 5/20rem;
            opacity:0;
            cursor:pointer;
            z-index: 99;
            position: absolute;
            top:0;
        }
        .tip-img{
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            margin: 1.5rem auto;
        }
        .tip-span{
           display: block;
           width: 100%;
           height: 1rem;
           line-height: 1rem;
           position: absolute;
           font-size: .6rem;
           text-align: center;
           bottom: .5rem;
       }
   }
</style>
<script>
    import testPost from '../service/test';
    export default {
        data() {
            return {
                token:'',
            }
        },
        components: {

        },
        mounted() {
        },
        methods: {
            //获取token
            upload(e){
                //从后端获取上传token
                testPost.getToken().then(res=>{
                    this.token = res.data.token;
                    this.uploadImg(e);
                }).catch(error=>{
                });
            },
            //上传图片
            uploadImg(e){
                var file = e.target.files[0];
                var f = new FormData();
                f.append('file',file);
                f.append('token',this.token);
                var config = {
                    header:{'Content-Type':'multipart/from-data'}
                }
                //上传图片到七牛
                testPost.uploadImgToQiniu(f,config).then(res=>{
                    this.$emit('imgUrl',res);
                }).catch(error=>{
                });
            }
        },
    }
</script>
