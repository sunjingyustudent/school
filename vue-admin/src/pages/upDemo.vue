<template>
    <div>
        <up-img @imgVal="imgVal"></up-img>
    </div>
</template>

<script>
    import UpImg from '../components/upImg';
    export default{
        components:{
            UpImg
        },
        methods:{
            imgVal(ops){
                console.log(ops)
            }
        }
    }
</script>