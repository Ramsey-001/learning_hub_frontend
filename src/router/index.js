import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Posts from '../views/Posts.vue'
import NewPost from '../views/NewPost.vue'
import PostDetail from '../views/PostDetail.vue'
import Register from '../views/Register.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { 
      path: '/login',
      name: 'login', 
      component: Login 
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    { 
      path: '/posts/new',
      name: 'new-post',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'post-detail',
      component: PostDetail,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
