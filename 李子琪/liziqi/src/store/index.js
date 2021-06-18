import { createStore } from 'vuex'

export default createStore({
  state: {
    color:"",
    title:""
  },
  mutations: {
    change(state,{color,title}){
      state.color = color;
      state.title = title;
    }
  },
  actions: {
  },
  modules: {
  }
})
