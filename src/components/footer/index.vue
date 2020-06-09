<template>
  <div class="footer-box">
    <slot></slot>
  </div>
</template>

<script>
// 详情页面地步操作按钮组件
export default {
  name: "footerBox",
};
</script>

<style scoped lang="less">
.footer-box {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e8eaec;
  box-shadow: 0 -5px 30px 0 rgba(0, 0, 0, 0.12);
}
</style>
