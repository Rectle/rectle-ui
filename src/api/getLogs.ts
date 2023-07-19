import { axios } from 'boot/axios'
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';
const getLogs = async (id: number): Promise<string[] | null> => {
    const userStore = useUserStore();
    try{
        const {data} = await axios.get(`${url}/compilations/${id}/logs`, { headers: {
            'Authorization': `Bearer${userStore.user.jwt}`
        } })
        return data;
    }
    catch(err: any) {
        console.error(err);
        return null;
    }
}

export { getLogs };
