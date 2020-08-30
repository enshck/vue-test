export default {
  state: {
    isAuth: false,
  },
  mutations: {
    setAuthStatus: (state, status) => {
      state.isAuth = status;
    },
  },
};
