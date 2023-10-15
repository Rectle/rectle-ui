import axios from 'axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const changeFileToFormData = (file: File) => {
  const formData = new FormData();
  formData.append('logo', file, file.name);
  return formData;
};

const createTeam = async (
  teamName: string,
  file: File | undefined
): Promise<number> => {
  const formData = file ? changeFileToFormData(file) : new FormData();
  formData.append('name', teamName);
  const userStore = useUserStore();

  try {
    const { data } = await axios.post(`${url}/teams`, formData, {
      headers: {
        'Content-Type': `multipart/form-data`,
        Authorization: `Bearer${userStore.user.jwt}`,
      },
    });

    await axios.put(
      `${url}/teams/${data.id}/user/${userStore.getUserId}`,
      null,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer${userStore.user.jwt}`,
        },
      }
    );

    return data.id;
  } catch (err: any) {
    console.error(err);
    return 0;
  }
};

export { createTeam };
