import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const getAllTeams = async () => {
  const userStore = useUserStore();
  const userId = userStore.getUserId;

  try {
    return userId
      ? (
          await axios.get(`${url}/teams/users/${userId}`, {
            headers: {
              Authorization: `Bearer${userStore.user.jwt}`,
            },
          })
        ).data
      : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export { getAllTeams };
