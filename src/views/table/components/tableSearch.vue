<template>
  <div class="search-box">
    <Row type="flex" class="tf-search-group" justify="space-between">
      <div>
        <div class="tf-search-widget">
          <span class="label">商品编码：</span>
          <Input v-model="searchForm.count" clearable class="input-width" />
        </div>
        <div class="tf-search-widget">
          <span class="label">户号：</span>
          <Input v-model="searchForm.count" clearable class="input-width" />
        </div>
        <div class="tf-search-widget">
          <span class="label">订单编号：</span>
          <Input v-model="searchForm.count" clearable class="input-width" />
        </div>
        <span v-show="isMore">
          <div class="tf-search-widget">
            <span class="label">商品编码：</span>
            <Input v-model="searchForm.count" clearable class="input-width" />
          </div>
          <div class="tf-search-widget">
            <span class="label">户号：</span>
            <Input v-model="searchForm.count" clearable class="input-width" />
          </div>
          <div class="tf-search-widget">
            <span class="label">订单编号：</span>
            <Input v-model="searchForm.count" clearable class="input-width" />
          </div>
        </span>
        <div class="tf-search-widget">
          <Button type="primary">查询</Button>
          <Button class="margin-left">重置</Button>
          <Button type="text" class="margin-left more-search" @click="handleMore">{{isMore?'收起':'更多搜索条件'}}</Button>
        </div>
      </div>
      <div class="tf-search-widget">
        <Button type="primary" icon="md-add">添加商品 </Button>
        <Button icon="ios-download-outline" type="primary" class="margin-left"
          >导出</Button
        >
      </div>
    </Row>
  </div>
</template>

<script>
export default {
  name: "tableSearch",
  data() {
    return {
      searchForm: {
        user: "",
        password: "",
      },
      formInline: {},
      isMore: false,
    };
  },
  methods: {
    handleMore() {
      this.isMore= !this.isMore
    },
  },
};
</script>
<style lang="less" scoped>
@ml-10: 10px;
.ml-10 {
  margin-left: @ml-10;
}
</style>
