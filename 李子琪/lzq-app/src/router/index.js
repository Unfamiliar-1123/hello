import Vue from 'vue'
import VueRouter from 'vue-router'
import TV from '../views/TV.vue'
import Music from '../views/Music.vue'
import Book from '../views/Book.vue'
import Chat from '../views/Chat.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',name: 'TV',component:TV
  },
  {
    path: '/music',name: 'Music',component:Music
  },
  {
    path: '/book',name: 'Book',component:Book
  },
  {
    path: '/chat',name: 'Chat',component:Chat
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
