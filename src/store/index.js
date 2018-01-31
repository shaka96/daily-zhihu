import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        num:1,
        drawer:false,
        circleFlag:false,
        theme:{},
        article:{},
        before:''
    }
})