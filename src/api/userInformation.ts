import axios from 'axios';
import { url, headers } from '../shared/variable.shared';



function getInformation(user: any){
    return {
        email: user.email,
        password: "",
        provider:"google"
        // name: user.name ?? "",
        // picture: user.picture ?? ""
    }
}


async function sendUserInformation(user: any){
    const information = getInformation(user);
    let result = ''
    if (url) 
        await axios.post(url+'/users', information, { headers })
        .then((res) => {
            result = res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

export { sendUserInformation };