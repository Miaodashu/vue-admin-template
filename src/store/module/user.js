import Cookies from "js-cookie";
import router, { resetRouter } from '@/router'
const TokenKey = "token";
const state = {
  token: Cookies.get(TokenKey),
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    commit("SET_TOKEN", "88sdsdsdsdsd");
    Cookies.set(TokenKey, '88sdsdsdsdsd');
    // return new Promise((resolve, reject) => {
      // login({ username: username.trim(), password: password }).then(response => {
      //   const { data } = response
      //   commit('SET_TOKEN', data.token)
      //   setToken(data.token)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    // });
  },
  logout({ commit, state, dispatch }) {
    commit("SET_TOKEN", "");
    Cookies.remove(TokenKey);
    resetRouter();
    dispatch("tagsView/delAllViews", null, { root: true });
    // return new Promise((resolve, reject) => {
      // logout(state.token).then(() => {
      //   commit('SET_TOKEN', '')
      //   resetRouter()
      //   dispatch('tagsView/delAllViews', null, { root: true })
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    // });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
