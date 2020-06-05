import router from '@/router'
const hasChild = (item)=> {
  return item.children && item.children.length !== 0;
}
/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
const getMenuByRouter=(list)=>{
  let res = [];

  list.forEach((el) => {
    if (!el.hidden) {
      let obj = el;
      if (hasChild(el) || el.alwaysShow) {
        obj.children = getMenuByRouter(el.children);
      }
      res.push(obj);
    }
  });
  return res;
}
export default {
  namespaced: true,
  state: {
    // 收缩菜单栏路由
    menuList:getMenuByRouter(router.options.routes)
  },
  getters:{},
  mutations: {
    //
  },
  actions: {
    //
  },
};
