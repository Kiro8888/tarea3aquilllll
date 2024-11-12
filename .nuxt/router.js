import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d532c23 = () => interopDefault(import('..\\pages\\artistas.vue' /* webpackChunkName: "pages/artistas" */))
const _211db28a = () => interopDefault(import('..\\pages\\museo.vue' /* webpackChunkName: "pages/museo" */))
const _7fdf9578 = () => interopDefault(import('..\\pages\\pinturas.vue' /* webpackChunkName: "pages/pinturas" */))
const _a38ee950 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _232efe3a = () => interopDefault(import('..\\pages\\artista\\_slug.vue' /* webpackChunkName: "pages/artista/_slug" */))
const _670b5f1c = () => interopDefault(import('..\\pages\\museos\\_slug.vue' /* webpackChunkName: "pages/museos/_slug" */))
const _4b7a53cf = () => interopDefault(import('..\\pages\\pintura\\_slug.vue' /* webpackChunkName: "pages/pintura/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/artistas",
    component: _3d532c23,
    name: "artistas"
  }, {
    path: "/museo",
    component: _211db28a,
    name: "museo"
  }, {
    path: "/pinturas",
    component: _7fdf9578,
    name: "pinturas"
  }, {
    path: "/",
    component: _a38ee950,
    name: "index"
  }, {
    path: "/artista/:slug?",
    component: _232efe3a,
    name: "artista-slug"
  }, {
    path: "/museos/:slug?",
    component: _670b5f1c,
    name: "museos-slug"
  }, {
    path: "/pintura/:slug?",
    component: _4b7a53cf,
    name: "pintura-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
