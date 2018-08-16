import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Posts from './pages/Posts'
import SinglePost from './pages/SinglePost'
import AddPost from './pages/AddPost'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', name: 'single-post', component: SinglePost },
  { path: '/add', name: 'add-post', component: AddPost },
  { path: '/edit/:id', name: 'edit', component: AddPost },
  { path: '/posts/:id', name: 'delete', component: Posts }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
