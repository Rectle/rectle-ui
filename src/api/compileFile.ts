import { api } from 'boot/axios'
import { url } from '../shared/variable.shared';

const compileFile = async (id: number): Promise<boolean> => {
    try{
        return (await api.put(url+'/projects/'+id)).data
    }
    catch(err: any) {
        console.error(err);
        return false;
    }
}

export { compileFile };