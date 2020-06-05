import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";
import parentView from "@/components/parentView";
Vue.use(VueRouter);

/**
 * 路由表配置规则，必读

 * hidden: true                   如果设置为true，项目将不会显示在侧边栏(默认为false)
 * alwaysShow: true               如果设置为true，将始终显示根菜单,默认为false
 * redirect: noRedirect           如果设置noRedirect将不会在面包屑中重定向
 * name:'router-name'             路由名称，keep-alive会用到
 * meta : {
    roles: ['admin','editor']    权限角色列表
    title: 'title'               显示中文名称，面包屑中使用
    noCache: true                如果设置为true，页面将不会被缓存(默认为false)
    icon: 'svg-name'             icon
    affix: true                  如果设置为true，则会固定在tag-view中
    breadcrumb: false            如果设置为false，项目将隐藏在breadcrumb中(默认为true)
    activeMenu: '/example/list'  如果设置路径，侧边栏将突出显示您设置的路径，一般用于详情页的时候，菜单选中项显示列表页，增强用户体验
  }
 */
// 基础页面
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  { path: "*", redirect: "/404", hidden: true },
];
// 设计后期权限页面
const asyncRouters = [
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "index",
        component: () => import("@/views/home/index"),
        meta: {
          title: "首页",
          icon: "md-home",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "实例", icon: "md-bug" },
    children: [
      {
        path: "form",
        name: "form",
        component: () => import("@/views/form/index"),
        meta: { title: "表单", icon: "md-aperture" },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index"),
        meta: { title: "树", icon: "md-archive" },
      },
    ],
  },

  {
    path: "/table",
    name: "table",
    meta: { title: "表格实例", icon: "md-bug" },
    component: Layout,
    children: [
      {
        path: "index",
        name: "tableList",
        component: () => import("@/views/table/index"),
        meta: { title: "表格", icon: "logo-apple" },
      },
      {
        path: "baseTable",
        name: "baseTable",
        component: () => import("@/views/table/baseTable"),
        meta: { title: "基础表格", icon: "logo-apple" },
      },
      {
        path: "detail",
        hidden: true,
        name: "tableDetail",
        component: () => import("@/views/table/detail"),
        meta: { title: "详情", icon: "logo-apple", activeMenu: "/table/index" },
      },
    ],
  },

  {
    path: "/external-link",
    name: "externalLink",
    component: Layout,
    children: [
      {
        path: "https://www.baidu.com",
        meta: { title: "外部链接", icon: "md-analytics" },
      },
    ],
  },
];
const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes.concat(asyncRouters),
  });

const router = createRouter();

// 重置路由
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}
export default router;
