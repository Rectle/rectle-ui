import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const downloadProjectFile = async (projectId: string) => {
  const userStore = useUserStore();

  try {
    const { data } = await axios.get(`${url}/projects/${projectId}/download`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer${userStore.user.jwt}`,
      },
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export { downloadProjectFile };
