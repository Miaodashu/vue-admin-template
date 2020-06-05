import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const modulesFiles = require.context('./module', true, /\.js$/)

// 此处配置是为了解决module过多引入麻烦，此处配置会自动化导入所有./module/**下所有的模块
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})


export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules
})
