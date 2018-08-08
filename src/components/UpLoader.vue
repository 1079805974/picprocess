<template>
    <div>
      <el-upload
          ref="upload"
          :file-list='filelist'
          :on-change="change"
          :action="uploadUrl"
          :limit="limit"
          list-type="picture-card"
          :data="otherData"
          :on-exceed="onExceed"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :auto-upload="autoUpload">
          <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
</template>

<script>

export default {
  name:'UpLoader',
  props:['otherData', 'uploadUrl' ,'filelist','limit','onExceed','autoUpload'],
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      this.$emit('remove', file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    change(file,fileList){
      this.$emit('update:filelist', fileList)
    }
  }
};
</script>