import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';
const getCompilation = async (modelId: string): Promise<any | null> => {
  const userStore = useUserStore();
  try {
    const { data } = await axios.get(`${url}/compilations/models/${modelId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer${userStore.user.jwt}`,
      },
    });

    return data ? data[0].id : 0;
  } catch (err: any) {
    console.error(err);
    return null;
  }
};

export { getCompilation };
