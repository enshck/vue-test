import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "./login";
import SignUp from "./signUp";
import ItemsPage from "./itemsPage";
import { getAuthStatus } from "../../api";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: {
      routeType: "ONLY_NOT_AUTH_USERS",
    },
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: SignUp,
    meta: {
      routeType: "ONLY_NOT_AUTH_USERS",
    },
  },
  {
    path: "/itemsPage",
    name: "ItemsPage",
    component: ItemsPage,
    meta: {
      routeType: "ONLY_AUTH_USERS",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("token");
  const isAuth = await getAuthStatus(token);

  if (
    to.matched.some((record) => record.meta.routeType === "ONLY_AUTH_USERS")
  ) {
    // only auth routes
    if (!isAuth) {
      next({
        name: "Login",
      });
    } else {
      next();
    }
  } else if (
    to.matched.some((record) => record.meta.routeType === "ONLY_NOT_AUTH_USERS")
  ) {
    // only not auth routes
    if (isAuth) {
      next({
        name: "ItemsPage",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
