import { axios } from 'boot/axios'
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';


const getInformation = (user: IUser, projectId: number, projectName: string) => {
    return {
      userId: user.id,
      projectId: projectId,
      name: projectName,
    }
}


const createModelByName = async (projectId: number, projectName: string): Promise<number>  => {
    const userStore = useUserStore();
    const information = getInformation(userStore.user, projectId, projectName);
    try{
        let result = 0;
        await axios.post(url+'/models', information, { headers: {
            'Authorization': `Bearer${userStore.user.jwt}`
        }}).then((res:any) => {
          result = res.data.id;
        })
        return result;
    }
    catch(err) {
        console.error(err);
        return 0;
    }
  }

  export {createModelByName};
