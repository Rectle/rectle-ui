import { api } from 'boot/axios'
import { url } from '../shared/variable.shared';



const getInformation = (user: any) =>{
    return {
        email: user.email,
        password: "",
        provider:"google"
        // name: user.name ?? "",
        // picture: user.picture ?? ""
    }
}


const sendUserInformation = async (user: any) => {
    const information = getInformation(user);
    if (url) 
        try{
        await api.post('/users', information)
        .then((res) => {
           return res.data;
        })
    }catch(err) {
        console.log(err);
        return err
    }
    
}

export { sendUserInformation };