<template>
  <div>
    <Modal v-model="isShow" width="360" :mask-closable="false">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>删除提醒</span>
      </p>
      <div style="text-align:center">
        <p>{{ delMsg }}</p>
        <p>你确定要删除吗?</p>
      </div>
      <div slot="footer">
        <Button
          type="error"
          size="large"
          long
          :loading="delLoading"
          @click="del"
          >删除</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script>
// 全局删除模态框提示组件
export default {
  name: "delModel",
  props: {
    // 模态框显隐
    isDel: {
      type: Boolean,
      default: false,
    },
    // 删除按钮的loading状态
    delLoading: {
      type: Boolean,
      default: false,
    },
    // 删除提示语
    delMsg: {
      type: String,
      default: "数据一旦删除，将不可恢复.",
    },
  },
  watch: {
    isDel(newVal) {
      this.isShow = newVal;
    },
    isShow(newVal) {
      this.$emit("update:isDel", newVal);
    },
  },
  data() {
    return {
      isShow: this.isDel,
    };
  },
  methods: {
    del() {
      this.$emit("handleDel");
    },
  },
};
</script>

<style></style>
