<template>
    <el-carousel @change="onChange" indicator-position="outside" :autoplay="false" height="100%" ref="preview">
        <el-carousel-item v-for="item,index in data" :key="item+index">
            <img width="100%" height="100%" :src="item" alt="ERROR!" />
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name:'PreviewWindow',
    props:{
        data:{
            type:Array,
            default:() => {return [
                './static/dataset/puppy/2bddefa2-1687-38e2-9fd1-733cacdf1b93.jpg',
                './static/dataset/bird/3ab7163b-9578-3fa2-bcd0-d8eb4899.jpg',
                './static/dataset/car/7cacafca-b776-39c0-894e-ff97fba67190.jpg'
                ]}
        },
        activeIndex:{
            type:Number,
            default:0
        }
    },
    data(){
        return {

        }
    },
    watch:{
        activeIndex(val){
            this.$refs.preview.setActiveItem(val)
        }
    },
    methods:{
        onChange(index){
            this.$emit('update:activeIndex', index)
        }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
