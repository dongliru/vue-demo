import Vue from 'vue'
import App from './App.vue'
import Loading from './components/loading'
import VueRouter from 'vue-router';
 
//使用路由
Vue.use(VueRouter);
 
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
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})


