import axios from "axios";
import { BASE_URL } from "./configAPI";

export const ManagerService = {
    GetMenuList: (_type) => {
      return axios({
        url: `${BASE_URL}/menus/getmenulist/${_type}`,
        method:'get'
      })
    },

    AddNewMenu: (_data) => {
      return axios({
        url: `${BASE_URL}/menus/addnewmenu`,
        method: 'post',
        data: _data
      })
    },

     UploadImageServer: (_menuId,_dataImg, _nameForm) => {
      let formData = new FormData();
      formData.append(_nameForm, _dataImg);
      return axios({
        url: `${BASE_URL}/menus/uploadimg/${_menuId}`,
        data: formData,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    },

    DeleteMenu: (_menuId) => {
      return axios({
        url: `${BASE_URL}/menus/deletemenu/${_menuId}`,
        method: 'DELETE'
      })
    },

    UpdateMenu: (_dataMenu, _menuId) => {
      return axios({
        url: `${BASE_URL}/menus/updatemenu/${_menuId}`,
        method: 'PUT',
        data: _dataMenu
      })
    },

    GetUserList: () => {
      return axios({
        url: `${BASE_URL}/users/getall`,
        method: "GET"
      })
    },

    DeleteUserById: (_id) => {
      return axios({
        url: `${BASE_URL}/account/deletebyid/${_id}`,
        method: "DELETE"
      })
    },

    UpdateUser: (_id, _data) => {
      return axios({
        url: `${BASE_URL}/account/update/${_id}`,
        method: "POST",
        data: _data
      })
    },

    LoginRootUser: (_data) => {
      return axios({
        url: `${BASE_URL}/account/login`,
        method: 'POST',
        data: _data
      })
    },

    GetAllRootUser: () => {
      return axios({
        url: `${BASE_URL}/users/getallroot`,
        method: "GET"
      })
    },

    getAllAccount: () => {
      return axios({
        url: `${BASE_URL}/account/getall`,
        method: "GET"
      })
    },
    RegisterRootUser: (_data) => {
      return axios({
        url: `${BASE_URL}/users/createrootuser`,
        method: "POST",
        data: _data
      })
    },

    GetCamnangList: () => {
      return axios({
        url: `${BASE_URL}/camnang/getall`,
        method: "GET"
      })
    },

    DeleteCamnang: (_id) => {
      return axios({
        url:  `${BASE_URL}/camnang/delete/${_id}`,
        method: "DELETE"
      })
    }

    , AddNewCamnang: (_data) => {
      return axios({
        url: `${BASE_URL}/camnang/newcamnang`,
        method: 'post',
        data: _data
      })
    },

     UploadImageCamnang: (_menuId,_dataImg, _nameForm) => {
      let formData = new FormData();
      formData.append(_nameForm, _dataImg);
      return axios({
        url: `${BASE_URL}/camnang/uploadimg/${_menuId}`,
        data: formData,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    },

    UpdateCamnang: (_dataMenu, _menuId) => {
      return axios({
        url: `${BASE_URL}/camnang/update/${_menuId}`,
        method: 'PUT',
        data: _dataMenu
      })
    },
}