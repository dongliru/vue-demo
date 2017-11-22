import Vue from 'vue'
import App from './App.vue'
import Loading from './components/loading'
import jQuery from 'jquery'
import VueRouter from 'vue-router'
import jquery from 'jquery'
// import myDatepicker from 'vue-datepicker-simple'

//使用路由
Vue.use(VueRouter);
// const datepicker ={
//     install:function(Vue){
//         Vue.component('datepicker',myDatepicker)
//     }
// }
// Vue.use(datepicker);
window.Event = new Vue();

//当然如果需要有组件进来的时候也是需要引入的
import Ru from './components/ru.vue';
import Yang from './components/yang.vue';
import Total from './components/total.vue';

//创建路由实例
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path:'/ru',component:Ru},
    //path:路径 component:把你需要的组件挂载进来
    {path:'/yang',component:Yang},
    {path:'/total',component:Total},
    {path:'*',redirect:'/ru'} //404
    //当路径错误或没有这个路径的时候我们会给予一个默认路径
  ]
});

var Event = new Vue();

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})


