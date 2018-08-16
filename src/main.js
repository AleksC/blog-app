import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Posts from './pages/Posts'
import SinglePost from './pages/SinglePost'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', name: 'single-post', component: SinglePost }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
