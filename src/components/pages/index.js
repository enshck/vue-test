import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "./login";
import SignUp from "./signUp";
import MessagesPage from "./messagesPage";
import { onAuthStateChanged } from "../../utils";

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
    path: "/messages",
    name: "MessagesPage",
    component: MessagesPage,
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
  const isAuth = await onAuthStateChanged();

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
        name: "MessagesPage",
      });
    } else {
      next();
    }
  } else {
    // all others routes
    next();
  }
});

export default router;
