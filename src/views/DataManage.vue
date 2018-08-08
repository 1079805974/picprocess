<template>
  <el-row style="height:100%">
    <el-col :span="6" class="class-picker">
      <div>
        <choose-list :data="classes" :currentRow.sync="currentClassIndex" :name="'图片类别'" @delete="deleteClass"></choose-list>
        <el-button type="success" class="add-button">New Type<em>(Not Implement)</em></el-button>
      </div>
    </el-col>
    <el-col :span="6" class="img-picker">
      <div>
        <choose-list :data="pictures" :currentRow.sync="currentPicIndex" :name="'图片列表'" @delete="deletePic"></choose-list>
        <el-button type="success" class="add-button" @click="handleNewPicture">New Picture</el-button>
      </div> 
    </el-col> 
    <el-col :span="12" class="preview">
      <transition name="el-fade-in-linear">
        <div style="height:100%;" v-if="preview">
          <preview  :activeIndex.sync="currentPicIndex" class="preview-inner" :data="picUrls" /> 
          <div style="margin-top:50px;">
            <el-button type="success" icon="el-icon-edit">Rename<em>(Not Implement)</em></el-button>
            <el-button type="danger" @click="deletePic(currentPicIndex)" icon="el-icon-delete">Delete</el-button>
          </div>
        </div>
      </transition>   
      <transition name="el-fade-in-linear"> 
        <div v-if="uploading"> 
          <h2>点击"+"以上传{{classes[currentClassIndex]}}的图片</h2> 
          <up-loader :auto-upload="false" :filelist.sync="uploadList" @remove="handleRemove" :upload-url="uploadUrl" class="uploader" /> 
          <el-button type="success" class="add-button" icon="el-icon-upload" @click="upload">Upload</el-button>
          <el-button type="danger" class="add-button" icon="el-icon-cancle" @click="handleCancleUpload">Cancle</el-button>
        </div>
      </transition>
    </el-col>
  </el-row>
</template>

<script>
import ChooseList from "../components/ChooseList.vue";
import Preview from "../components/Preview.vue";
import UpLoader from "../components/UpLoader.vue";
import bus from "../bus.js"

export default {
  name: "DataManage",
  components: {
    ChooseList,
    Preview,
    UpLoader
  },
  mounted(){
    this.getListData()
  },
  data() {
    return {
      uploadList:[],
      uploadUrl: bus.host + '/upload',
      preview: true,
      uploading: false,
      data:{
      'dog':[
        {name:'dog1',url:'./static/dataset/puppy/2bddefa2-1687-38e2-9fd1-733cacdf1b93.jpg'},
        {url:'./static/dataset/puppy/2bddefa2-1687-38e2-9fd1-733cacdf1b93.jpg'},
        {name:'dog3',url:'./static/dataset/puppy/2bddefa2-1687-38e2-9fd1-733cacdf1b93.jpg'},
        {name:'dog4',url:'./static/dataset/puppy/2bddefa2-1687-38e2-9fd1-733cacdf1b93.jpg'}
      ],
      'cat':[],
      'bird':[],
      'tiger':[]
      },
      currentClassIndex: 0,
      currentPicIndex: 0
    };
  },
  watch:{
    currentPicIndex(val){
        this.preview = true
        this.uploading = false
    },
    currentClassIndex(val){
      this.uploadList = []
    }
  },
  computed:{
    currentClass(){
     return this.classes[this.currentClassIndex]
    },
    classes(){
      return Object.keys(this.data)
    },
    pictures(){
      let result = this.data[this.currentClass]
      return result.map(ele=>{
        let url = ele.url
        let lastSplit = url.lastIndexOf('/')
        let picName = url.substring(lastSplit+1)
        return ele.name ? ele.name : picName
      })
    },
    picUrls(){
       let result = this.data[this.currentClass]
      return result.map(ele=>{
        return ele.url
      })
    }
  },
  methods: {
    upload(){
      this.uploadList.forEach(ele=>{
        let param = new FormData()
        param.append('file', ele.raw, ele.name)
        param.append('class', this.currentClass)
        this.$axios.post(bus.host + '/upload',param, {
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(()=>{
          this.$message({
              type: 'success',
              message: '上传成功!'
            });
            this.getListData()
            this.uploadList = []
        })
      })
    },
    getListData(){
      this.$axios.get(bus.host + '/piclist')
      .then(res => {
        this.data = res.data
      })
      .catch(console.log)
    },
    handleRemove(file){
      let index = this.pictures.indexOf(file.name)
      //this.$axios.delete(bus.host + '/pic?url='+this.picUrls[index])
    },
    onChangePreview(index){
      this.currentPicIndex = index
    },
    handleNewPicture() {
      this.uploading = true
      this.preview = false
    },
    handleCancleUpload() {
      this.uploading = false
      this.preview = true
    },
    selectPic(index){
      this.currentPicIndex = index
    },
    selectClass(index){
      this.currentClassIndex = index
    },
    deletePic(index){
        this.$confirm('此操作将永久删除该图片, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.delete(bus.host + '/pic?url='+this.picUrls[index])
          .then(()=>{
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getListData()
          })
          .catch(err=>{
            this.$message({
              type: 'error',
              message: '删除失败!'
            });
            this.getListData()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    deleteClass(index){
      this.$confirm('此操作将永久删除该类所有图片, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.delete(bus.host + '/class?class='+this.classes[index])
          .then(()=>{
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getListData()
          })
          .catch(err=>{
            this.$message({
              type: 'error',
              message: '删除失败!'
            });
            this.getListData()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>

<style>
.class-picker {
  border-right: 1px solid #e6e6e6;
  height: 100%;
}

.img-picker {
  border-right: 1px solid #e6e6e6;
  height: 100%;
}

.preview {
  height: 100%;
}

.preview-inner {
  height: 60%;
  overflow: hidden;
}

.add-button {
  margin-top: 22px !important;
}
</style>