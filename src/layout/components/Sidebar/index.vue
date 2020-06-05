<template>
  <div>
    <Logo :collapse="isCollapsed" v-if="hasLogo"></Logo>
    <Menu
      :active-name="activeMenu"
      theme="dark"
      width="auto"
      :class="menuitemClasses"
      v-show="!isCollapsed"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </Menu>
    <collapsed-menu v-show="isCollapsed"></collapsed-menu>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
import CollapsedMenu from './collapsedMenu'
import Logo from './Logo'
export default {
  name: "slidebar",
  components: { SidebarItem, CollapsedMenu,Logo },
  props: {
    // 菜单是否收起
    isCollapsed: {
      type: Boolean,
      default: false,
    },
    // 是否显示logo
    hasLogo:{
      type:Boolean,
      default:true
    }
  },
  computed: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    // 获取路由表
    routes() {
      return this.$router.options.routes;
    },
    // 菜单选中项
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
  data() {
    return {
      onlyOneChild: null,
    };
  },
  methods: {
    // 返回路由名称，用于侧边栏展示
    showTitle(item) {
      if (item.meta && item.meta.title) {
        return item.meta.title;
      } else {
        if (item.name) {
          return item.name;
        } else {
          return;
        }
      }
    },
    // 根据路由规则，显示没有子路由或者只有一个子路由的路由
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
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
  },
};
</script>

<style lang="less" scoped>
.ivu-menu {
  text-align: left;
  /deep/ .ivu-menu-item > i {
    margin-right: 12px;
  }
}

.menu-title {
  padding-left: 6px;
}
</style>
