
const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/Login.vue'),
        props: { type: 'login' }

      },
      {
        path: '/register',
        name: 'register',
        component: () => import('pages/Login.vue'),
        props: { type: 'register' }
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('pages/Home.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}
export default routes
