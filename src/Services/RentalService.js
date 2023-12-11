import axios  from "axios";
import { BASE_URL } from "./configAPI";

export const RentalService = {
    CreateNewRental: (_data) => {
      return axios({
        url: `${BASE_URL}/rental/create`,
        data: _data,
        method: 'post'
      })
    },
    GetRentalUser: (_id) => {
      return axios({
        url: `${BASE_URL}/rental/getbyid/${_id}`,
        method: 'get'
      })
    },

    DeleteRental: (_id) => {
      return axios({
        url: `${BASE_URL}/rental/delete/${_id}`,
        method: 'delete'
      })
    },
    GetAllRental: () => {
      return axios({
        url: `${BASE_URL}/rental/getall`,
        method: 'get'
      })
    },

    ConfirmCheck: (_id) => {
      return axios({
        url: `${BASE_URL}/rental/check/${_id}`,
        method: 'put'
      })
    }
}