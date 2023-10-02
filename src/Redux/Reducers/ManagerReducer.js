const stateDefault = {
    menuListCurrent: [],
    typeId: 0,
    initContent: {},
    userList: [],
    rootList: [],
    camnangList: [],
    carList: [],
}

export const ManagerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_MENU_LIST":
        state.menuListCurrent = action.content;
        return {...state}
    case "SWITCH_TYPEID":
        state.typeId = action.content;
        console.log(action.content)
        return {...state}
    case "SET_INIT_CONTENT":
        state.initContent = action.content
        return {...state} 
    case "GET_USER_LIST":
        state.userList = action.content;
        return {...state}    
    case "GET_LIST_ROOTUSER":{
        state.rootList = action.content;
        return {...state}
    }
    case "GET_CAM_NANG_LIST":{
        state.camnangList = action.content;
        return {...state}
    }
    case "GET_CAR_OWNER":{
        state.carList = action.content;
        return {...state}
    }
    default:
        return {...state}
}
}
