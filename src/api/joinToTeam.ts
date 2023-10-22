import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const joinToTeam = async (teamId: number) => {
  const userStore = useUserStore();
  const userId = userStore.getUserId;

  try {
    await axios.put(`${url}/teams/${teamId}/user/${userId}`, null, {
      headers: {
        Authorization: `Bearer${userStore.user.jwt}`,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export { joinToTeam };
