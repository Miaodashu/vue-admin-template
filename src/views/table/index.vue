<template>
  <Card :bordered="false" class="content">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username"/>
      </FormItem>
      <FormItem prop="password">
        <Input
          type="password"
          v-model="formInline.password"
          placeholder="Password"
        />
      </FormItem>
      <FormItem>
        <Button type="primary">查询</Button>
      </FormItem>
    </Form>
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
export default {
  name: "tableList",
  data() {
    return {
      columns12: [
        {
          title: "Name",
          slot: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
        },
      ],
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    show(index) {
      this.$router.push({path:"/table/detail",query:{id:index}})
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
  },
};
</script>
