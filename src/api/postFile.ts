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

const sendFile = async (file: File): Promise<boolean> => {
    const formData = changeFileToFormData(file);
    const userStore = useUserStore();
    try{
        await axios.post(url+'/files', formData, { params: {email: userStore.getUser.email ?? ''}, headers: {
            'Content-Type': `multipart/form-data`
        } })
        return true;
    }
    catch(err: any) {
        console.error(err);
        return false;
    }
}

export { sendFile };