import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const BlogHeader = () => import('../components/layout/BlogHeader.vue')
const Home = () => import('../views/home.vue')
const Index = () => import('../views/index.vue')
const Skill = () => import('../views/skill.vue')
const Talk = () => import('../views/talk.vue')
const Life = () => import('../views/life.vue')
const Friend = () => import('../views/friend.vue')
const About = () => import('../views/about.vue')

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location: any): any {
  const res: any = originalPush.call(this, location)
  return res.catch((err: any) => err)
}

const routes: RouteConfig[] = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '末将'
    }
  },
  {
    path: '/',
    redirect: '/index',
    component: BlogHeader,
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/skill',
        name: 'Skill',
        component: Skill,
        meta: {
          title: '技术'
        }
      },
      {
        path: '/talk',
        name: 'Talk',
        component: Talk,
        meta: {
          title: '说说'
        }
      },
      {
        path: '/life',
        name: 'Life',
        component: Life,
        meta: {
          title: '生活'
        }
      },
      {
        path: '/friend',
        name: 'Friend',
        component: Friend,
        meta: {
          title: '伙伴'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
          title: '关于'
        }
      },
    ]
  }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next):void => {
  document.title = to.meta.title
  next()
})

export default router;
