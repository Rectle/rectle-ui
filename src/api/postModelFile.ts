import axios from 'axios';
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const changeFileToFormData = (file: File)=> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return formData
}


const sendModelFile = async (id: number, file: File): Promise<number> => {
    const formData = changeFileToFormData(file);
    const userStore = useUserStore();
    try{
        const {data} = await axios.post(`${url}/models/${id}`, formData, { headers: {
            'Content-Type': `multipart/form-data`,
            'Authorization': `Bearer${userStore.user.jwt}`
        }});

        return data.id;
    }
    catch(err: any) {
        console.error(err);
        return 0;
    }
}

export { sendModelFile };
