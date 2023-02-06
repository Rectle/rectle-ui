import axios from 'axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const changeFileToFormData = (file: File)=> {
    const formData = new FormData();
    // const userStore = useUserStore();
    // formData.append('email', userStore.getUser.email ?? '');
    formData.append('file', file, file.name);
    return formData
}

const sendFile = async (file: File): Promise<number> => {
    const formData = changeFileToFormData(file);
    const userStore = useUserStore();
    try{
        let result = 0;
        await axios.post(url+'/projects/'+userStore.getUser.id, formData, { headers: {
            'Content-Type': `multipart/form-data`,
            'Authorization': `Bearer${userStore.user.jwt}` 
        } }).then((res: any)=> {
            result = res.data.id;
        })
        return result;
    }
    catch(err: any) {
        console.error(err);
        return 0;
    }
}

export { sendFile };