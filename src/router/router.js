export default [
  {
    path: '',
    name: 'index',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/',
        name: 'personalCenter',
        component: () => import('@/views/personalCenter/index.vue')
      },
      {
        path: '/meetingList',
        name: 'meetingList',
        component: () => import('@/views/meeting/index.vue')
      }
    ]
  },
  {
    path: '/meeting/userInfo',
    name: 'userInfo',
    component: () => import('@/views/meeting/userInfo.vue')
  }
]
