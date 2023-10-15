import { axios } from 'boot/axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const leaveTheTeam = async (teamId: number) => {
  const userStore = useUserStore();
  const userId = userStore.getUserId;

  try {
    await axios.delete(`${url}/teams/${teamId}/user/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer${userStore.user.jwt}`,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export { leaveTheTeam };
