import { axios } from 'boot/axios'
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';
const compileModelFile = async (id: number): Promise<number> => {
    const userStore = useUserStore();
    try{
      let result = 0;
        await axios.put(url+'/models/'+id, null,{ headers: {
            'Authorization': `Bearer${userStore.user.jwt}`
        } }).then((res:any)=>{
          result = res.data;
        })
        return result;
    }
    catch(err: any) {
        console.error(err);
        return 0;
    }
}

export { compileModelFile };
