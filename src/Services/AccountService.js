import axios from 'axios';
import { BASE_URL } from './configAPI';

export const AccountService = {
    Login: (_dataLogin) => {
      return axios({
        url: `${BASE_URL}/account/login`,
        data: _dataLogin,
        method: 'post'
      })
    },
    Register: (_dataRegister) => {
      return axios({
        url: `${BASE_URL}/account/create`,
        data: _dataRegister,
        method: 'post'
      })
    }
}