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
          >编辑</Button
        >
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
    <div class="pagination">
      <Page :total="40" show-elevator show-sizer />
    </div>
    <Modal v-model="modal1" title="详情">
      <Form :model="formItem" :label-width="80">
        <FormItem label="Input">
          <Input
            v-model="formItem.input"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
        <FormItem label="Select">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="DatePicker">
          <Row>
            <Col span="11">
              <DatePicker
                type="date"
                placeholder="Select date"
                v-model="formItem.date"
              ></DatePicker>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
              <TimePicker
                type="time"
                placeholder="Select time"
                v-model="formItem.time"
              ></TimePicker>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="Radio">
          <RadioGroup v-model="formItem.radio">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox">
          <CheckboxGroup v-model="formItem.checkbox">
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Switch">
          <i-switch v-model="formItem.switch" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
          </i-switch>
        </FormItem>
        <FormItem label="Slider">
          <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="Text">
          <Input
            v-model="formItem.textarea"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
      </Form>
    </Modal>
    <del-model key="delModel" :is-del.sync="isDel" :delLoading="delLoading" @handleDel="handleDel"></del-model>
  </Card>
</template>

<script>
import tableSearch from "./components/tableSearch";
import delModel from '@/components/delModel'
export default {
  name: "baseTable",
  components: {
    tableSearch,delModel
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
          title: "操作",
          slot: "action",
          fixed: "right",
          width: 180,
        },
      ],
      data6: [
        {
          name: "假如这条信息内容很多很多",
          age: 18,
          address: "假如这条信息n内容很多很多",
          province: "America",
          city: "New York",
          zip: 100000,
        },
        {
          name: "假如这条信息内容一般",
          age: 24,
          address: "假如这条信息内容一般",
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
      formItem: {},
      modal1: false,
      isDel:false,
      delLoading:false
    };
  },
  methods: {
    show(index) {
      if (index === 1) {
        this.modal1 = true;
        return;
      }
      this.$router.push({ path: "/table/detail", query: { id: index } });
    },
    remove(index) {
      this.isDel = true
      this.index = index
      // this.data6.splice(index, 1);
    },
    handleDel(){
      this.delLoading = true
      setTimeout(()=>{
        this.delLoading = false
        this.isDel = false
        this.data6.splice(this.index, 1);

      },1000)
    }
  },
};
</script>
<style lang="less" scoped>
@ml-10: 10px;
.ml-10 {
  margin-left: @ml-10;
}
</style>
