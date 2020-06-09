<template>
  <Card :bordered="false" class="content">
    <Form class="detail-form" :model="formItem" :label-width="80">
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
    <footer-box>
      <Button type="primary" @click="$router.push('/table/baseTable')">保存</Button>
      <Button class="ml-20" @click="$router.push('/table/baseTable')">返回</Button>
    </footer-box>
  </Card>
</template>

<script>
import footerBox from "@/components/footer";
export default {
  name: "tableDetail",
  components: { footerBox },
  data() {
    return {
      formItem: {},
    };
  },
  methods: {},
};
</script>
<style scoped lang="less">
.ml-20{
  margin-left: 20px;
}
</style>
