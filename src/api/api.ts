import axios from 'axios';

export const getUserData = async (name: string) => {
  try {
    const resp = await axios.get(`https://api.github.com/users/${name}`);
    const data = await resp.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const getRepos = async (name: string, page: number, pageLimit: number) => {
  try {
    const resp = await axios.get(
      `https://api.github.com/users/${name}/repos?page=${page}&per_page=${pageLimit}`
    );
    const data = await resp.data;
    return data;
  } catch (error) {
    return error;
  }
};
