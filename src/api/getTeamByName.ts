import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const getTeamByName = async (email: string) => {
  const userStore = useUserStore();
  try {
    return (
      await axios.get(`${url}/teams`, {
        params: { name: email },
        headers: {
          Authorization: `Bearer${userStore.user.jwt}`,
        },
      })
    ).data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export { getTeamByName };
