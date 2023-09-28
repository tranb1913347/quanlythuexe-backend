const stateDefault = {
        isLogin: false,
}

export const AccountReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "IS_LOGIN":
        state.isLogin = !state.isLogin;
        return {...state}
  
    default:
        return {...state}
  }
}