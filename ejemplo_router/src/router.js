import { createWebHistory, createRouter } from 'vue-router';


import CourseComponent from './components/Course/CourseComponent.vue';
import CourseAComponent from './components/Course/CourseAComponent.vue';
import CourseBComponent from './components/Course/CourseBComponent.vue';
import CourseCComponent from './components/Course/CourseCComponent.vue';
import HomeComponent from './views/HomeComponent.vue';
import LoginComponent from './components/Login/LoginComponent.vue'
import store from './store/store';

const routes = [
	
		{ 
			path: '/login',
			name: 'Login',
			component: LoginComponent,
		},
		{
		path: '/',
		name: 'Home',
		component: HomeComponent,
		meta: { requiresAuth: true },
		children: [
			
			
			{
				path: '/course',
				name: 'Course',
				component: CourseComponent,
				meta: { requiresAuth: true },
				children: [
					{
						path: 'course_a',
						name: 'coursea',
						component: CourseAComponent,
					},
					{
						path: 'course_b',
						name: 'courseb',
						component: CourseBComponent,
					},
					{
						path: 'course_c',
						name: 'coursec',
						component: CourseCComponent,
					},
				]
			},
		
		],
	}
		
	
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
router.beforeEach((to, from, next) => {
	if (to.matched.some(route => route.meta.requiresAuth)) {

		if (!store.state.isLoggedIn) {
			next('/login')
		} else {
			next();
		}
	} else {

		next();
	}
	next('/login');

})

export default router;