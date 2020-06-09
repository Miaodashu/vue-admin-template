<template>
  <div v-if="!item.hidden">
    <template
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow"
    >
      <template v-if="!onlyOneChild.meta.hideInMenu">
        <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
          <MenuItem :name="resolvePath(onlyOneChild.path)">
            <Icon v-if="onlyOneChild.meta.icon" :type="onlyOneChild.meta.icon" />
            <span>{{onlyOneChild.meta.title}}</span>
          </MenuItem>
        </app-link>
      </template>
    </template>
  
    <Submenu v-else ref="subMenu" :name="resolvePath(item.path)">
      <template slot="title">
        <Icon v-if="item.meta.icon" :type="item.meta.icon" />
        <span>{{item.meta.title}}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </Submenu>
  </div>
</template>

<script>
import mixin from './mixin'
import AppLink from "./Link";

export default {
  name: "SidebarItem",
  components: { AppLink },
  mixins:[mixin],
  props: {
    // 路由对象
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // 如果只有一个显示子元素，则使用
          this.onlyOneChild = item;
          return true;
        }
      });

      // 当只有一个子路由器时，默认显示子路由器，如果需要显示根路由，可参考路由配置说明
      if (showingChildren.length === 1) {
        return true;
      }

      // 如果没有要显示的子路由器，则显示父路由器
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
  }
};
</script>
