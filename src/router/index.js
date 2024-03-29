import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/awards",
		name: "Awards",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/Awards.vue"
			);
		},
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(/* webpackChunkName: "about" */ "../views/About.vue");
		},
	},
	{
		path: "/project/:slug",
		name: "Project",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/Project.vue"
			);
		},
		props: true,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
