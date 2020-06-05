<template>
  <div class="user-avatar-dropdown">
    <fullscreen class="fullscreen" v-model="isFullscreen"></fullscreen>
    <Dropdown @on-click="handleClick">
      <Avatar
        src="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"
        >USER</Avatar
      >
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心<Badge
            style="margin-left: 10px"
            :count="messageUnreadCount"
          ></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <msgDrawer :isShow.sync="isShow"></msgDrawer>
  </div>
</template>

<script>
import fullscreen from "./fullscreen/fullscreen";
import msgDrawer from "./msgDrawer";
export default {
  name: "User",
  components: {
    fullscreen,
    msgDrawer,
  },
  data() {
    return {
      messageUnreadCount: 10,
      isFullscreen: false,
      isShow: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
      this.$router.push({ path: "/login" });
    },
    message() {
      this.isShow = true;
    },
    handleClick(name) {
      switch (name) {
        case "logout":
          this.logout();
          break;
        case "message":
          this.message();
          break;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.user-avatar-dropdown {
  height: 64px;
  padding-right: 20px;
  line-height: 64px;
  display: flex;
  align-items: center;
  .fullscreen {
    margin-right: 15px;
  }
}
.ivu-select-dropdown {
  z-index: 990;
}
</style>
