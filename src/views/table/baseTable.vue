<template>
  <Card :bordered="false" class="content">
    <table-search></table-search>
    <Table border :columns="columns12" :data="data6">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
          >View</Button
        >
        <Button type="error" size="small" @click="remove(index)">Delete</Button>
      </template>
    </Table>
    <div class="pagination">
      <Page :total="40" show-elevator show-sizer />
    </div>
  </Card>
</template>

<script>
import tableSearch from "./components/tableSearch";
export default {
  name: "baseTable",
  components: {
    tableSearch,
  },
  data() {
    return {
      columns12: [
        {
          type: "index",
          title: "序号",
          align: "center",
          width: 80,
        },
        {
          title: "Name",
          key: "name",
          minWidth: 100,
        },
        {
          title: "Age",
          key: "age",
          minWidth: 100,
        },
        {
          title: "Province",
          key: "province",
          minWidth: 100,
        },
        {
          title: "City",
          key: "city",
          minWidth: 100,
        },
        {
          title: "Address",
          key: "address",
          minWidth: 200,
        },
        {
          title: "Postcode",
          key: "zip",
          minWidth: 100,
        },
        {
          title: "Action",
          slot: "action",
          fixed: "right",
          width: 200,
        },
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000,
        },
        {
          name: "Jim Green",
          age: 24,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000,
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000,
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000,
        },
      ],
    };
  },
  methods: {
    show(index) {
      this.$router.push({ path: "/table/detail", query: { id: index } });
    },
    remove(index) {
      this.data6.splice(index, 1);
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
