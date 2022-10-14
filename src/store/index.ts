import Vue from "vue";
import Vuex from "vuex";
// import { createStore } from 'vuex';
import JsonPosts from "../assets/posts_home.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: JsonPosts,
  },
  mutations: {},
  actions: {},
  modules: {},
});
