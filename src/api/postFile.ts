import axios from 'axios';
import { url } from '../shared/variable.shared';


const changeFileToFormData = (file: File): FormData => {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return formData
}


const sendFile = async (file: File): Promise<boolean> => {
    const formData = changeFileToFormData(file);
    let result = ''
    if (url)
    try{
        await axios.post(url+'/files', formData, { headers: {
            'Content-Type': `multipart/form-data`
        } })
        .then((res) => {
            result = res.data;
        })
        .catch((err) => {
            console.log(err);
        });
    }
    catch(err: any) {
        console.log(err);
    }
    return result === ''
}

export { sendFile };