import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const createModelByName = async (
  projectId: number,
  projectName: string
): Promise<number> => {
  const userStore = useUserStore();

  const information = {
    userId: userStore.user.id ?? null,
    projectId: projectId,
    name: projectName,
  };
  try {
    const { data } = await axios.post(`${url}/models`, information, {
      headers: {
        Authorization: `Bearer${userStore.user.jwt}`,
      },
    });
    return data.id;
  } catch (err) {
    console.error(err);
    return 0;
  }
};

export { createModelByName };
