<template>
  <div class="search-box">
    <Row type="flex" justify="space-between">
      <Form ref="formInline" :model="formInline" inline  class="tf-search-widget">
        <FormItem label="商品编码" :label-width="70">
          <Input type="text" v-model="formInline.user"></Input>
        </FormItem>
        <FormItem label="户号" :label-width="50">
          <Input type="text" v-model="formInline.password"></Input>
        </FormItem>
        <FormItem label="商品编码" :label-width="70">
          <Input type="text" v-model="formInline.user"></Input>
        </FormItem>
        <span v-show="isMore">
          <FormItem label="户号" :label-width="50">
            <Input type="text" v-model="formInline.password"></Input>
          </FormItem>
          <FormItem label="商品编码" :label-width="70">
            <Input type="text" v-model="formInline.user"></Input>
          </FormItem>
          <FormItem label="户号" :label-width="50">
            <Input type="text" v-model="formInline.password"></Input>
          </FormItem>
          <FormItem label="商品编码" :label-width="70">
            <Input type="text" v-model="formInline.user"></Input>
          </FormItem>
          <FormItem label="户号" :label-width="50">
            <Input type="text" v-model="formInline.password"></Input>
          </FormItem>
        </span>
        <FormItem>
          <Button type="primary">查询</Button>
          <Button class="margin-left">重置</Button>
          <Button
            type="text"
            class="margin-left more-search"
            @click="handleMore"
            >{{ isMore ? "收起" : "更多搜索条件" }}</Button
          >
        </FormItem>
      </Form>
      <div class="tf-search-widget margin-bottom">
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
      this.isMore = !this.isMore;
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
