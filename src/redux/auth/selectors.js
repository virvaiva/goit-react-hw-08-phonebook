export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectLogInError = state => state.auth.authErrorLogIn;

export const selectRegisterError = state => state.auth.authErrorRegister;
