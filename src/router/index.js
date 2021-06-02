
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/login.vue'
import Main from '../components/main/main.vue'
import aaa from '../components/aaa.vue'
import bbb from '../components/bbb.vue'
import find from '../components/find.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:"/login",
    name:"login",
    component:Login,
  },
  {
    path:"/find",
    name:"find",
    component:find
  },
  {
    path:"/",
    name:"main",
    component:Main,
    children:[
      {
        path:"/aaa",
        name:"aaa",
        component:aaa,
        meta:"aaa"
      },
      {
        path:"/bbb",
        name:"bbb",
        component:bbb,
        meta:"bbb"
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to,from,next)=>{
  let navLevel = ["login","main","aaa"];
  let isLogin = sessionStorage.getItem('token');
  if (isLogin) {
    if (navLevel.indexOf(to.name)===-1) {
      if (to.name=="find") {
        next();
      } else {
        next({path:"/find"});
      }
    } else {
      next();
    }
  } else {
    if (to.name=="login") {
      next();
    } else {
      next({path:"/login"});
    }
  }
})

export default router


// let nav = [
//   {
//     name:"首页",
//     path:"main",
//     serial:"1",
//     children:[]
//   },
//   {
//     name:"系统管理",
//     path:"sys",
//     serial:"2",
//     children:[
//       {
//         name:"组织机构管理",
//         path:"org",
//         serial:"2-1",
//       },
//       {
//         name:"功能模块管理",
//         path:"module",
//         serial:"2-2",
//       }
//     ]
//   }
// ];