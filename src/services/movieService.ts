import axios from "axios";
import { getConfig, postConfig } from "./serviceUtils";
import { IBaseMovie } from "../interfaces/movies/movies.interface";

const rootApi = process.env.REACT_APP_ROOT_API;

export const addMovie = (payload: IBaseMovie) => {
  const config = {
    ...postConfig,
    data: payload,
    url: `${rootApi}/entities/movies`,
  };

  return axios(config);
};

export const getAllMovies = () => {
  const config = {
    ...getConfig,
    url: `${rootApi}/entities/movies`,
  };

  return axios(config);
};
