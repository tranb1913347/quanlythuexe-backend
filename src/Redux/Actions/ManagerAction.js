import { ManagerService } from "../../Services/ManagerService"
import { notification } from 'antd';

const successNotification = (_tittle, _content) => {
  notification["success"]({
    message: _tittle,
    description: _content,
  });
};

const errorNotification = (_tittle, _content) => {
  notification["error"]({
    message: _tittle,
    description: _content,
  });
};


export const GetMenuList = (_type) => {
  return async (dispatch) => {
    try {
        let {data} = await ManagerService.GetMenuList(_type);
        dispatch({
            type: 'GET_MENU_LIST',
            content: data
        })
    } catch (error) {
        console.log(error)
    }
  }
}

export const AddNewMenu = (_data, _dataImg) => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.AddNewMenu(_data);
      let dataImage = await ManagerService.UploadImageServer(data.id, _dataImg, "MenuImage")
      console.log(dataImage)
      dispatch({type:'CLOSE_MODAL'})
      dispatch(GetMenuList(data.type))
    } catch (error) {
      console.log(error)
    }
  }
}

export const DeleteMenu = (_menuId, _type) => {
  return async (dispatch) => {
    try {
      await ManagerService.DeleteMenu(_menuId)
      dispatch(GetMenuList(_type))
      successNotification("Xóa thành công", "Bạn đã xóa 1 món ăn thành công!!")

    } catch (error) {
      console.log(error)
      errorNotification("Xóa thất bại", "Vui lòng kiểm tra lại đường truyền!")

    }
  }
}

export const UpdateMenu = (_dataMenu, _menuId, _dataImg) => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.UpdateMenu(_dataMenu, _menuId);
      if(_dataImg){
        let dataImage = await ManagerService.UploadImageServer(data.id, _dataImg, "MenuImage")
      }
      dispatch(GetMenuList(data.type))
      dispatch({type:'CLOSE_MODAL'})

      successNotification("Cập nhật thành công", "Bạn đã cập nhật 1 món ăn thành công!!")

    } catch (error) {
      errorNotification("Cập nhật thất bại", "Vui lòng kiểm tra lại đường truyền!")
      
    }
  }
}

export const GetUserList = () => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.getAllAccount();
      dispatch({
        type: "GET_USER_LIST",
        content: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const DeleteUserById = (_id) => {
  return async (dispatch) => {
   try {
    await ManagerService.DeleteUserById(_id);
    successNotification("Xóa thành công", "Bạn đã xóa 1 USERS thành công!!")
    dispatch(GetUserList());
   } catch (error) {
    console.log(error)
    errorNotification("Xóa thất bại", "Vui lòng kiểm tra lại đường truyền!")
   }

  }
}


export const UpdateUser = (_id, _data) => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.UpdateUser(_id, _data)
      successNotification("Cập nhật thành công", "Bạn đã cập nhật 1 USER thành công!!")
      dispatch({type: "CLOSE_MODAL"});
      dispatch(GetUserList());
    } catch (error) {
      errorNotification("Cập nhật thất bại", "Vui lòng kiểm tra lại đường truyền!")
    }
  }
}

export const LoginRootUser = (_data) => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.LoginRootUser(_data);
      if(data.type == "ADMIN"){
        successNotification("Đăng nhập thành công", "Bạn đã truy cập tài khoản ADMIN thành công!!")
        dispatch({type: "CLOSE_MODAL"})
        console.log(data);
      }
      else 
      errorNotification("Đăng nhập thất bại", "Vui lòng kiểm tra tài khoản và mật khẩu!")
    } catch (error) {
      console.log(error)
      errorNotification("Đăng nhập thất bại", "Vui lòng kiểm tra tài khoản và mật khẩu!")

    }
  }
}

export const GetAllRootUser = () => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.getAllAccount();
      console.log(data);
      data = data.filter((item) => {
        return item.type == "ADMIN"
      })
      console.log(data);
      dispatch({
        type: "GET_LIST_ROOTUSER",
        content: data
      })
    } catch (error) {
      console.log(error)      
    }
  }
}

export const RegisterRootUserAction = (_data) => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.RegisterRootUser(_data)
      successNotification("Đăng ký thành công", "Hệ thống đã lưu tài khoản admin của bạn!!")
      dispatch({type: "CLOSE_MODAL"})
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export const GetAllCamnang = () => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.GetCamnangList();
      dispatch({
        type: "GET_CAM_NANG_LIST",
        content: data
      })
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
}

export const DeleteCamnang = (_id) => {
  return async (dispatch) => {
   try {
    await ManagerService.DeleteCamnang(_id);
    successNotification("Xóa thành công", "Bạn đã xóa 1 Cẩm nang thành công!!")
    dispatch(GetAllCamnang());
   } catch (error) {
    console.log(error)
    errorNotification("Xóa thất bại", "Vui lòng kiểm tra lại đường truyền!")
   }

  }
}


export const AddNewCamnang = (_data, _dataImg) => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.AddNewCamnang(_data);
      let dataImage = await ManagerService.UploadImageCamnang(data.id, _dataImg, "CamnangImage")
      dispatch({type:'CLOSE_MODAL'})
      dispatch(GetAllCamnang())
    } catch (error) {
      console.log(error)
    }
  }
}

export const UpdateCamnang = (_dataMenu, _menuId, _dataImg) => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.UpdateCamnang(_dataMenu, _menuId);
      if(_dataImg){
        let dataImage = await ManagerService.UploadImageCamnang(data.id, _dataImg, "CamnangImage")
      }
      dispatch(GetAllCamnang())
      dispatch({type:'CLOSE_MODAL'})

      successNotification("Cập nhật thành công", "Bạn đã cập nhật 1 Cẩm nang thành công!!")

    } catch (error) {
      errorNotification("Cập nhật thất bại", "Vui lòng kiểm tra lại đường truyền!")
      
    }
  }
}