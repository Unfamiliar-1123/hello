import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from '../views/movie.vue'
import music from '../views/music.vue'
import book from '../views/book.vue'
import picture from '../views/picture.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',name: 'movie',component:movie
  },
  {
    path: '/music',name: 'music',component:music
  },
  {
    path: '/book',name: 'book',component:book
  },
  {
    path: '/picture',name: 'picture',component:Chat
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
