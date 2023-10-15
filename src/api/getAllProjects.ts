import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';
const getAllProjects = async (): Promise<any | null> => {
  const userStore = useUserStore();
  try {
    const { data } = await axios.get(`${url}/projects`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer${userStore.user.jwt}`,
      },
    });

    return data;
  } catch (err: any) {
    console.error(err);
    return null;
  }
};

export { getAllProjects };
