<template>
    <div>
        <h2 v-show="pics.length==0" class="hint">此处显示图片墙</h2>
        <div v-for="item,index in pics" @click="preview(index)" class="picwall-wrapper" :key="item">
            <img class="picwall-img" :src="item"/>
        </div>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "PicWall",
  props: {
    pics: {
      type: Array,
      default: () => {
        return [
          ];
      }
    }
  },
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: ""
    };
  },
  methods: {
    preview(index) {
      this.dialogImageUrl = this.pics[index]
      this.dialogVisible = true
    }
  }
};
</script>

<style>
.picwall-img {
  width: 120px;
  height: 120px;
  border-radius: 5%;
  box-shadow: 2px 2px 2px #888888;
}
.picwall-wrapper{
  display: inline-block;
}
.picwall-wrapper + .picwall-wrapper{
  margin-left:20px; 
}
.hint{
  color:#999999;
}
</style>
