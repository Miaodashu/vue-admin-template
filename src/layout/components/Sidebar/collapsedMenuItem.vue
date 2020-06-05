<template>
  <Dropdown
    ref="dropdown"
    @on-click="(name)=>handleClick(name,placement)"
    :transfer="true"
    :class="hideTitle ? '' : 'collased-menu-dropdown'"
    :placement="placement"
  >
    <a
      class="drop-menu-a"
      type="text"
       @mouseover="handleMousemove($event, children)"
      :style="{ textAlign: !hideTitle ? 'left' : '' }"
    >
      <Icon :color="!hideTitle ? '#515a6e' :'#fff'" :size="iconSize" :type="parentItem.meta.icon"/>
      <span class="menu-title" v-if="!hideTitle">{{ showTitle(parentItem) }}</span>
      <Icon style="float: right;" v-if="!hideTitle" type="ios-arrow-forward" :size="iconSize"/>
      </a>
    <DropdownMenu ref="dropdown" slot="list">
      <template v-for="child in children">
        <collapsed-item
          v-if="showChildren(child)"
          :parent-item="child"
          :key="`drop-${child.name}`"
        ></collapsed-item>
        <DropdownItem v-else :key="`drop-${child.name}`" :name="child.name">
          <Icon color="#515a6e" :size="iconSize" :type="child.meta.icon" />
          <span class="menu-title">{{ showTitle(child) }}</span></DropdownItem
        >
      </template>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
import AppLink from "./Link";
export default {
  name: "collapsedItem",
  components: { AppLink },
  props: {
    parentItem: {
      type: Object,
      default: () => {},
    },
    hideTitle: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    parentName () {
      return this.parentItem.name
    },
    children () {
      return this.parentItem.children
    }
  },
  data() {
    return {
      placement: "right-end",
      iconSize:18
    };
  },
  methods: {
    showTitle(item) {
      let { title } = item.meta;
      if (!title) {
        return;
      } else {
        title = item.meta && item.meta.title ? item.meta.title : item.name;
      }
      return title;
    },
    showChildren (item) {
      return item.children && (item.children.length > 1 || (item.alwaysShow))
    },
    handleClick(name) {
      this.$router.push({
        name
      })
    },
    handleMousemove(event, children) {
      const { pageY } = event;
      const height = children.length * 38;
      const isOverflow = pageY + height < window.innerHeight;
      this.placement = isOverflow ? "right-start" : "right-end";
    },
    findNodeUpperByClasses(ele, classes) {
      let parentNode = ele.parentNode;
      if (parentNode) {
        let classList = parentNode.classList;
        if (
          classList &&
          classes.every((className) => classList.contains(className))
        ) {
          return parentNode;
        } else {
          return this.findNodeUpperByClasses(parentNode, classes);
        }
      }
    },
  },
  mounted() {
    let dropdown = this.findNodeUpperByClasses(this.$refs.dropdown.$el, [
      "ivu-select-dropdown",
      "ivu-dropdown-transfer",
    ]);
    if (dropdown) dropdown.style.overflow = "visible";
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
  display:block;
  padding: 6px 15px;
  width: 100%;
  text-align: center;
  color: #495060;
}

.side-menu-wrapper {
  user-select: none;
}
/deep/ .menu-title{
  padding-left: 6px;
}
/deep/ .ivu-dropdown{
  display: block;
}
</style>