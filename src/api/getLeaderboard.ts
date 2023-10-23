import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';
import { ILeaderboard } from 'src/types/project.type';
const getLeaderboard = async (
  projectId: string
): Promise<ILeaderboard[] | null> => {
  const userStore = useUserStore();
  try {
    const { data } = await axios.get(`${url}/models/projects/${projectId}`, {
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

export { getLeaderboard };
