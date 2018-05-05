import Vue from 'vue'
import Router from 'vue-router'
import flow from 'views/flow/flow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'flow',
      component: flow
    }
  ]
})
