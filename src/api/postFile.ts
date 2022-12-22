import axios from 'axios';
import { url } from '../shared/variable.shared';



const  getFile = (file: any) => {
    console.log(file)
    return {
        file: file
    }
}


const sendFile = async (file: any): Promise<boolean> => {
    const information = getFile(file);
    let result = ''
    if (url)
    try{
        await axios.post(url+'/files', information, { headers: {
            'content-type': 'multipart/form-data'
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