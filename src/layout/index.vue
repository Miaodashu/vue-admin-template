<template>
  <Layout class="layout">
    <Sider
      ref="side1"
      class="sider-box"
      hide-trigger
      collapsible
      :width="defaultSettings.silderWidth"
      :collapsed-width="defaultSettings.silderCollapsedWidth"
      v-model="isCollapsed"
    >
      <slide-bar :isCollapsed="isCollapsed"  :hasLogo="defaultSettings.hasLogo"></slide-bar>
    </Sider>
    <Layout>
      <Header :style="{ padding: 0 }" class="layout-header-bar">
        <div class="header-left">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{ margin: '0 20px' }"
            type="md-menu"
            size="24"
          ></Icon>
          <Breadcrumb v-if="defaultSettings.BreadcrumbShow"></Breadcrumb>
        </div>
        <div class="header-left">
          <user></user>
        </div>
      </Header>
      <div class="tag-nav-wrapper">
        <tags></tags>
      </div>
      <Content class="content-box">
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import SlideBar from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";
import tags from "./components/TagsView";
import user from "./components/User";
import defaultSettings from '@/settings'
export default {
  data() {
    return {
      isCollapsed: false, // 菜单是否收起
    };
  },
  components: {
    SlideBar,
    Breadcrumb,
    tags,
    user,
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return this.$route.path;
    },
    // 全局配置文件信息
    defaultSettings(){
      return defaultSettings
    }
  },

  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
  },
};
</script>
<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .sider-box {
    height: 100%;
    overflow: scroll;
    &::-webkit-scrollbar-track-piece {
      background: #d3dce6;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #99a9bf;
      border-radius: 20px;
    }
  }
  .content-box {
    width: 100%;
    height: ~"calc(100vh - 104px)";
    padding: 10px;
    overflow: auto;
    background-color: #f0f0f0;
  }
}
.layout-header-bar {
  background: #fff;
  // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-left {
    display: flex;
    align-items: center;
  }
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
