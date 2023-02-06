import { axios } from 'boot/axios'
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';
const compileFile = async (id: number): Promise<boolean> => {
    const userStore = useUserStore();
    try{
        return (await axios.put(url+'/projects/'+id, null,{ headers: {
            'Authorization': `Bearer${userStore.user.jwt}` 
        } })).data == 'Request succeeded, file is being compiled'
    }
    catch(err: any) {
        console.error(err);
        return false;
    }
}

export { compileFile };