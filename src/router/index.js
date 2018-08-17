import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/phonelist/phonelist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'phonelist',
      component: HelloWorld
    }
  ]
})
