import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';
const setOverview = async (
  projectId: string,
  overview: string
): Promise<any | null> => {
  const userStore = useUserStore();
  try {
    const { data } = await axios.put(
      `${url}/projects/${projectId}/overview`,
      null,
      {
        params: { newOverview: overview },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer${userStore.user.jwt}`,
        },
      }
    );

    return data;
  } catch (err: any) {
    console.error(err);
    return null;
  }
};

export { setOverview };
