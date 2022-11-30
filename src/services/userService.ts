import axios from "axios";
import {
  getConfig,
  postConfig,
  onGlobalSuccess,
  onGlobalError,
} from "./serviceUtils";
import {
  IUserSignIn,
  IUserRegister,
} from "../interfaces/users/users.interface";
const rootApi = process.env.REACT_APP_ROOT_API;

export const userSignIn = (payload: IUserSignIn) => {
  const config = {
    ...postConfig,
    url: `${rootApi}/users/login`,
    data: payload,
  };

  return axios(config);
};

export const userRegister = (payload: IUserRegister) => {
  const config = {
    ...postConfig,
    url: `${rootApi}/users/register`,
    data: payload,
  };

  return axios(config);
};

export const userLogOut = () => {
  const config = {
    ...getConfig,
    url: `${rootApi}/users/logout`,
  };

  return axios(config);
};

export const getCurrentUser = () => {
  const config = {
    ...getConfig,
    url: `${rootApi}/users/current`,
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export const getUserById = (userId: number) => {
  const config = {
    ...getConfig,
    url: `${rootApi}/users/${userId}`,
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
