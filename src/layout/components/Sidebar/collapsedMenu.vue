<template>
  <div class="menu-collapsed">
    <template v-for="item in menuList">
      <collapsed-menu-item v-if="item.children && item.children.length > 1" hide-title :icon-size="16" theme="dark" :parent-item="item" :key="`drop-menu-${item.name}`"></collapsed-menu-item>
      <Tooltip
        transfer
        v-else
        :content="
          showTitle(
            item.children && item.children[0] ? item.children[0] : item
          )
        "
        placement="right"
        :key="`drop-menu-${item.name}`"
      >
        <app-link class="drop-menu-a" :to="comPath(item)">
          <Icon
            color="#fff"
            size="22"
            :type="
              (item.children && item.children[0].meta.icon) || item.meta.icon
            "
          />
        </app-link>
      </Tooltip>
    </template>
  </div>
</template>
<script>
import CollapsedMenuItem from "./collapsedMenuItem";
import AppLink from "./Link";
import path from "path";
import { isExternal } from "@/utils/validate";
export default {
  name: "CollapsedMenu",
  components: { AppLink,CollapsedMenuItem },
  computed: {
    // 获取路由表
    menuList() {
      return this.$store.state.app.menuList
    },
  },
  data() {
    return {
      basePath: "",
    };
  },
  mounted() {
  },
  methods: {
    // 返回展示的路由名称
    showTitle(item) {
      let { title } = item.meta;
      if (!title) {
        return;
      } else {
        title = item.meta && item.meta.title ? item.meta.title : item.name;
      }
      return title;
    },
    // 获取跳转路由
    comPath(item) {
      if (item.children && item.children.length !== 0) {
        if (isExternal(item.path)) {
          return item.path;
        }
        if (isExternal(item.children[0].path)) {
          return item.children[0].path;
        }

        return path.resolve(item.path, item.children[0].path);
      } else {
        return item.path;
      }
    },
  },
};
</script>
<style lang="less" scoped>

.menu-collapsed {
  padding-top: 10px;

  .ivu-dropdown {
    width: 100%;
    .ivu-dropdown-rel a {
      width: 100%;
    }
  }
  .ivu-tooltip {
    width: 100%;
    .ivu-tooltip-rel {
      width: 100%;
    }
    .ivu-tooltip-popper .ivu-tooltip-content {
      .ivu-tooltip-arrow {
        border-right-color: #fff;
      }
      .ivu-tooltip-inner {
        background: #fff;
        color: #495060;
      }
    }
  }
}
.drop-menu-a {
  display: inline-block;
  padding: 6px 15px;
  width: 100%;
  text-align: center;
  color: #495060;
}
a.drop-menu-a {
  display: inline-block;
  padding: 6px 15px;
  width: 100%;
  text-align: center;
  color: #495060;
}
.side-menu-wrapper {
  user-select: none;
}
</style>
