import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Add from '@/components/Add';
import Detail from '@/components/Detail';
import List from '@/components/List';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/add',
      component:Add,
    },
    {
      path:'/detail/:id',//this.$route.params.id 取id的方式
      // /detail/1  这样取到的就是1
      name:'detail',//遇到文件的path路径较长时，可以用name起别名
      component:Detail,
    },
    {
      path:'/list',
      component:List,
    },

  ]
})
