<template>
<div>
    <el-row style="text-align:left;">
        <h1 class="hint">0.0</h1>
    </el-row>
    <el-row>
    <el-col :span="10" style="height:100%; border-right:solid 1px #e6e6e6;">
        <div class="upload-likepic">
            <up-loader :filelist.sync="fileList" :auto-upload="false" :limit="1" :on-exceed="onExceed" :upload-url="searchUrl"/>
            <el-button type="success" class="add-button" icon="el-icon-upload" @click="upload" >Upload</el-button>
        </div>
    </el-col>
    <el-col :span="14">
        <div class="show-like">
            <h2 v-if="result==''" class="hint">此处显示识别结果</h2>
            <h2 v-else>这张图片是一个{{result}}</h2>
        </div>
    </el-col>
    </el-row>   
</div>
</template>

<script>
import ChooseTree from "@/components/ChooseTree.vue";
import PicWall from "@/components/PicWall.vue";
import UpLoader from "../components/UpLoader.vue";

export default {
  name: "SearchLike",
  components: {
    ChooseTree,
    PicWall,
    UpLoader
  },
  data() {
    return {
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      searchUrl: bus.host + "/searchlike",
      result:''
    };
  },
  methods: {
    onExceed() {
      this.$message({
        type: "error",
        message: "只能查找一个图片!"
      });
    },
    upload() {
      this.fileList.forEach(ele => {
        let param = new FormData();
        param.append("file", ele.raw, ele.name);
        param.append("class", this.currentClass);
        this.$axios
          .post(bus.host + "/searchlike", param, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then((res) => {
            this.$message({
              type: "success",
              message: "上传成功!"
            });
            let resultStr = res.data[0]
            console.log(resultStr)
            this.fileList = []
            this.result = resultStr.split('/')[2]
          });
      });
    }
  }
};
</script>

<style>
.upload-likepic {
  padding-top: 50px;
}
.show-like {
  margin-top: 50px;
}
</style>
