// 后期权限页面,需动态加载的
import Layout from "@/layout";
import parentView from "@/components/parentView";
export const asyncRouters = [
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
      meta: { title: "外部链接", icon: "md-analytics" },
      component: Layout,
      children: [
        {
          path: "https://www.baidu.com",
          meta: { title: "外部链接", icon: "md-analytics" },
        },
      ],
    },
    {
      path: "/system",
      component: Layout,
      alwaysShow:true,
      name: "system",
      meta: { title: "系统设置", icon: "md-bug" },
      children: [
        {
          path: "menu-admin",
          name: "MenuAdmin",
          component: () => import("@/views/system/menu-admin"),
          meta: { title: "菜单管理", icon: "md-aperture" },
        },
        {
          path: "role-admin",
          name: "roleAdmin",
          component: () => import("@/views/system/role-admin"),
          meta: { title: "角色管理", icon: "md-aperture" },
        },
      ],
    },
  ];