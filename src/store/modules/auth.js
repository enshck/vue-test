export default {
  state: {
    isAuth: false,
    isFetching: true,
  },
  mutations: {
    setAuthStatus: (state, status) => {
      state.isAuth = status;
      state.isFetching = false;
    },
  },
};
