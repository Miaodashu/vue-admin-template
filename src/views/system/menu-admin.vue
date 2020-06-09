<template>
  <Card :bordered="false" class="content">
    <div class="button-box mb-15">
      <Button type="primary" icon="md-add">新建菜单</Button>
      <Button class="ml-15" type="primary">编辑</Button>
      <Button class="ml-15" type="error">删除</Button>
    </div>
    <Row :gutter="15">
      <Col span="8">
        <Card>
          <Tree :data="treeList"></Tree>
        </Card>
      </Col>
      <Col span="16">
        <Card>
          <Form
            class="detail-form"
            :model="formItem"
            :label-width="80"
            label-colon
          >
            <FormItem label="父级ID">
              <Input v-model="formItem.input"></Input>
            </FormItem>
            <FormItem label="父级ID">
              <Input v-model="formItem.input"></Input>
            </FormItem>
            <FormItem label="菜单名称">
              <Input v-model="formItem.input"></Input>
            </FormItem>
            <FormItem label="菜单路由">
              <Input v-model="formItem.input"></Input>
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>
  </Card>
</template>

<script>
// 菜单管理

import { asyncRouters } from "@/router/module/asyncRouters";

export default {
  name: "MenuAdmin",
  computed: {
    dataObjById() {
      let dataObjById = {};
      this.dataArr.map((item, index) => {
        dataObjById[item["node_id"]] = item;
      });
      return dataObjById;
    },
    routes() {
      return asyncRouters;
    },
  },
  data() {
    return {
      treeList: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1",
                },
                {
                  title: "leaf 1-1-2",
                },
              ],
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1",
                },
                {
                  title: "leaf 1-2-1",
                },
              ],
            },
          ],
        },
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1",
                },
                {
                  title: "leaf 1-1-2",
                },
              ],
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1",
                },
                {
                  title: "leaf 1-2-1",
                },
              ],
            },
          ],
        },
      ],
      formItem: {},
      dataArr: [
        {
          node_id: 1,
          parent_id: 0,
          name: "实例",
        },
        {
          node_id: 2,
          parent_id: 0,
          name: "一级1.0.2",
        },
        {
          node_id: 3,
          parent_id: 1,
          name: "表单",
        },
        {
          node_id: 7,
          parent_id: 1,
          name: "发发发",
        },
        {
          node_id: 6,
          parent_id: 7,
          name: "三级3.7.6",
        },
        {
          node_id: 5,
          parent_id: 7,
          name: "三级3.7.5",
        },
      ],
      routeList:[
        {
          name:'Example',
          path:'/example',
          children:[
            {
              name:'Tree',
              path:'tree'
            }
          ]
        },
        {
          name:'table',
          path:'/table',
          children:[
            {
              name:'baseTable',
              path:'baseTable'
            }
          ]
        },
      ]
    };
  },
  methods: {
    // 将一维数组转为树状结构
    getTreeData(dataArr) {
      if (dataArr instanceof Array) {
        if (dataArr.length == 0) {
          alert("数组长度为0");
          return;
        }
      } else {
        alert("请传入数组");
        return;
      }
      let result = [];

      // 遍历dataArr
      dataArr.map((item, index) => {
        // 根据每一个对象的parent_id，获取父节点对象
        var parentNode = this.dataObjById[item["parent_id"]];

        // 如果父节点对象不存在，就是根节点
        if (parentNode) {
          // 父节点对象存在，则插入子节点对象
          if (!parentNode["children"]) {
            parentNode["children"] = [];
          }
          parentNode["children"].push(item);

          // 最后一级数据处理
          let childrenArr = parentNode["children"];
          childrenArr.map((item2, index2) => {
            if (!item2.children) {
              item2.children = [];
              let { node_id, name, parent_id } = parentNode;
              item2.parent = { node_id, name, parent_id };
            }
          });

          // 插入parentNode的父节点对象
          if (this.dataObjById[parentNode["parent_id"]]) {
            let { node_id, name, parent_id } = this.dataObjById[
              parentNode["parent_id"]
            ];
            parentNode.parent = { node_id, name, parent_id };
          } else {
            parentNode.parent = {};
          }
        } else {
          result.push(item);
        }
      });

      // 仅一个一级节点，加children = []，parent = {}
      result.map((item3, index3) => {
        if (!item3.children) {
          item3.children = [];
          item3.parent = {};
        }
      });
      return result;
    },
    getRouter(routes, arr) {
      let routeArr = [];
      // console.log(routes);
      // return
      arr.forEach((el) => {
        routes.forEach((val) => {
          if (el.name === val.name) {
            if (val.children && val.children.length > 0) {
              let obj = JSON.parse(JSON.stringify(val))
              delete obj.children
              // delete obj.component
              el = Object.assign(el,obj)
              this.getRouter(val.children, el.children);
            }else{
              //  el = Object.assign({},el,val)
               console.log('el',el);
               console.log('val',val);
              //  delete val.component
               el = Object.assign(el,val)
               console.log('el22',el);
            }
          }
        });
      });
      let newList = arr
      console.log(newList);
    },
  },
  mounted() {
    // let arr = this.getTreeData(this.dataArr);
    this.getRouter(this.routes, this.routeList);
  },
};
</script>
<style lang="less">
.mb-15 {
  margin-bottom: 15px;
}
.ml-15 {
  margin-left: 15px;
}
</style>
