import axios from 'axios';
import { IReposData } from '../components/RepositoriesList/RepositoriesList';
import { IUserData } from '../app/App';

const instance = axios.create({
  baseURL: 'https://api.github.com/users/'
});

export const getUserData = async (name: string): Promise<IUserData | unknown> => {
  try {
    const resp = await instance.get(name);
    const data: IUserData = resp.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const getRepos = async (
  name: string,
  page: number,
  pageLimit: number
): Promise<IReposData[] | unknown> => {
  try {
    const resp = await instance.get(`${name}/repos?page=${page}&per_page=${pageLimit}`);
    const data = resp.data;
    return data;
  } catch (error) {
    return error;
  }
};
