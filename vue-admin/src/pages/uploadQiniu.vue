<template>
    <div class="upload">
        <div class="upload-img">
            <img :src="img" class="img" v-if="imgFlag"/>
        </div>
        <div class="upload-qiniu">
            <upload-qiniu v-on:imgUrl="imgUrl"></upload-qiniu>
        </div>
    </div>
</template>
<style lang="less">
    .upload{
        .upload-img{
            width: 12rem;
            height: 8rem;
            border-radius: 1rem;
            border:1px dashed #999;
            margin: 1rem auto;
            .img{
                width: 100%;
                height: 100%;
            }
        }
        .upload-qiniu{
            width: 12rem;
            margin: 1rem auto;
        }
    }
</style>
<script>
    import UploadQiniu from '../components/uploadQiniu';
    import Env from '../api/env';
    
    export default {
        data() {
            return {
                img:'',
                imgFlag:false,
            }
        },
        components: {
            UploadQiniu
        },
        mounted() {
        },
        methods: {
            imgUrl(res){
                this.img = Env.link.testBucketDomain +res.key;
                this.imgFlag = true;
            },
        },
    }
</script>
