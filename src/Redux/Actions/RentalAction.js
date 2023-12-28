import { notification } from 'antd';
import { RentalService } from '../../Services/RentalService';
import { GetAllCar } from './ManagerAction';


let listUser = localStorage.getItem("list_user");
listUser = listUser && JSON.parse(listUser);
if (!listUser) listUser = [];

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

export const CreateNewRental = (_data) => {
  return async (dispatch) => {
    try {
        let {data} = await RentalService.CreateNewRental(_data);
        successNotification("Đăng ký thành công", "Bạn đã đăng ký thuê xe thành công!!");
        dispatch({type:'CLOSE_MODAL'})
        dispatch(GetAllCar());
        console.log(data);
    } catch (error) {
       errorNotification("Đăng ký thất bại", "Kiểm tra lại thông tin đăng ký!")
       console.log(error); 
    }
  }
}

export const GetRentalByUserID = (_id) => {
  return async (dispatch) => {
    try {
        let {data} = await RentalService.GetRentalUser(_id);
        dispatch({
            type: "GET_RENTALS",
            content: data
        })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  }
}

export const DeleteRental = (_id, _userId) => {
  return async (dispatch) => {
    try {
        await RentalService.DeleteRental(_id);
        successNotification("Hủy đăng kí thuê thành công", "Bạn đã hủy thuê thành công")
        if(_userId)
            dispatch(GetRentalByUserID(_userId))
        else    
            dispatch(GetAllRental());
    } catch (error) {
        console.log(error);
        errorNotification("Hủy không thành công", "Kiểm tra lại đường truyền")
    }
  }
}

export const GetAllRental = () => {
  return async (dispatch) => {
    try {
        const {data} = await RentalService.GetAllRental();
        dispatch({
            type: "GET_RENTALS",
            content: data
        })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  }
}

export const ConfirmCheck = (_id) => {
  return async (dispatch) => {
    try {
        await RentalService.ConfirmCheck(_id);
        dispatch(GetAllRental());
        successNotification("Xác nhận thành công", "Bạn xác nhận thuê xe thành công")
        
    } catch (error) {
        console.log(error);
        errorNotification("Xác nhận không thành công", "Kiểm tra lại đường truyền")

    }
  }
}