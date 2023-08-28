import axios from 'axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const createProject = async (project: IProjectCreate): Promise<number> => {
  const userStore = useUserStore();
  const teamID =
    userStore.getUser.email &&
    (await userStore.loadTeam(userStore.getUser.email));

  const res = { ...project, teamID };
  try {
    const { data } = await axios.post(`${url}/projects`, res, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer${userStore.user.jwt}`,
      },
    });
    return data.id;
  } catch (err: any) {
    console.error(err);
    return 0;
  }
};

export { createProject };
