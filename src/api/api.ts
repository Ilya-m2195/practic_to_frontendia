import axios from 'axios';
import { IUserData } from '../app/App';
import { IReposData } from '../components/RepositoriesList/RepositoriesList';

const instance = axios.create({
  baseURL: 'https://api.github.com/users/'
});

export const getUserData = async (name: string): Promise<IUserData> => {
  const resp = await instance.get(name);
  return resp.data;
};

export const getRepos = async (
  name: string,
  page: number,
  pageLimit: number
): Promise<Array<IReposData>> => {
  const resp = await instance.get(`${name}/repos?page=${page}&per_page=${pageLimit}`);
  return resp.data;
};
