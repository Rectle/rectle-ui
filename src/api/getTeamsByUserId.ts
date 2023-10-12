import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const getAllTeams = async (userID: number) => {
  const userStore = useUserStore();
  try {
    return (
      await axios.get(`${url}/teams/users/${userID}`, {
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

export { getAllTeams };
