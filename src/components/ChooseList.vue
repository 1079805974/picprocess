<template>
<div>
  <div class="cell title">
    {{name}}
  </div>
  <div class="cell item" 
    v-for="item,index in data" :key="item"
    :class="{deep: isSelected(index)}"
    @click="handleCurrentChange(index)"
    @mouseover="handleMouseEnter(index)" 
    @mouseout="handleMouseLeave(index)">
    <div>
      {{item}}
      <i class="el-icon-arrow-right" style="float:right;" v-show="index == currentRow"></i>
    </div>
    <transition name="el-zoom-in-top">
    <el-button class="del-button" v-show="index == currentHoverRow && index != currentRow"
          size="mini"
          type="danger"
          icon="el-icon-delete" circle
          @click="handleDelete(index, item)" ></el-button>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "姓名"
    },
    data: {
      type: Array,
      default: () => {
        return ["Tom", "Amy", "Jerry", "Katalina"];
      }
    },
    currentRow:{
      type:Number
    }
  },
  data() {
    return {
      currentHoverRow: null,
      deleting: false
    };
  },
  methods: {
    isSelected(index){
      return index == this.currentRow
    },
    handleCurrentChange(val) {
      if(!this.deleting){
        this.$emit('update:currentRow', val)
      }else
        this.deleting = false
    },
    handleDelete(index, row) {
      this.deleting = true
      this.$emit('delete', index)
    },
    handleMouseEnter(index) {
      this.currentHoverRow = index
    },
    handleMouseLeave(index) {
      this.currentHoverRow = null
    }
  }
};
</script>

<style>
.cell {
  font-size: 14px;
  color: #606266;
}

.title {
  font-weight: bold;
  position: relative;
  word-wrap: normal;
  text-overflow: ellipsis;
  vertical-align: middle;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 12px 0;
  border-bottom: 1px solid #ebeef5;
}
.item {
  position: relative;
  word-wrap: normal;
  text-overflow: ellipsis;
  vertical-align: middle;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 15px 7px;
  border-bottom: 1px solid #ebeef5;
}
.del-button{
    position: absolute;
    right: 10px;
    top: 10px;
    float:right;
}
.deep{
  background: #f8f8f8;
}
</style>
