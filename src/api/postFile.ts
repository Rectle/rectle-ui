import axios from 'axios';
import { url } from '../shared/variable.shared';



function getFile(file: any){
    console.log(file)
    return {
        file: file
    }
}


async function sendFile(file: any): Promise<boolean>{
    const information = getFile(file);
    console.log('inf', information)
    let result = ''
    if (url) 
        await axios.post(url+'/files', information, { headers: {
            'content-type': 'multipart/form-data'
        } })
        .then((res) => {
            result = res.data;
        })
        .catch((err) => {
            console.log(err);
        });
    return result === ''
}

export { sendFile };