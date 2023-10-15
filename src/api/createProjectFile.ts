import axios from 'axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const changeFileToFormData = (file: File) => {
  const formData = new FormData();
  formData.append('file', file, file.name);
  return formData;
};

const createProjectFile = async (file: File): Promise<number> => {
  const formData = changeFileToFormData(file);
  const userStore = useUserStore();
  const teamId =
    userStore.getUser.email &&
    (await userStore.loadTeam(userStore.getUser.email));
  try {
    const { data } = await axios.post(`${url}/projects/${teamId}`, formData, {
      headers: {
        'Content-Type': `multipart/form-data`,
        Authorization: `Bearer${userStore.user.jwt}`,
      },
    });
    return data.id;
  } catch (err: any) {
    console.error(err);
    return 0;
  }
};

export { createProjectFile };
