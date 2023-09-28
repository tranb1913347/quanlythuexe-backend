const stateDefault = {
    isShow: false,
    content: '',
    title: '',
    
}

export const ModalReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SHOW_MODAL_WITH_CONTENT":
        state.isShow = true;
        state.content = action.content;
        state.title = action.title;
        return {...state}  
        
    case "CLOSE_MODAL":
        state.isShow = false;
        return {...state}
    default:
        return {...state}
  }
}