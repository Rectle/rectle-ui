import axios from 'axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const changeFileToFormData = (file: File) => {
  const formData = new FormData();
  formData.append('logo', file, file.name);
  return formData;
};

const createProject = async (project: IProjectCreate): Promise<number> => {
  const userStore = useUserStore();
  const teamId =
    userStore.getUser.email &&
    (await userStore.loadTeam(userStore.getUser.email));

  const formData = project.file
    ? changeFileToFormData(project.file)
    : new FormData();
  formData.append('description', project.description ?? '');
  formData.append('name', project.name);
  formData.append('tags', project.tags ?? '');

  if (teamId) {
    formData.append('teamId', teamId);

    try {
      const { data } = await axios.post(`${url}/projects`, formData, {
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
  } else {
    return 0;
  }
};

export { createProject };
