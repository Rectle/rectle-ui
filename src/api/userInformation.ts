import { axios } from 'boot/axios'
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';

const getInformation = (user: any) => {
    return {
        email: user.email,
        password: "",
        provider:"google"
        // name: user.name ?? "",
        // picture: user.picture ?? ""
    }
}


const sendUserInformation = async (user: any) => {
    const userStore = useUserStore();
    const information = getInformation(user);
    try{
        return (await axios.post(url+'/users', information,{ headers: {
            'Authorization': `Bearer${userStore.user.jwt}`
        } })).data
    }catch(err) {
        console.error(err);
        return null
    }
}

export { sendUserInformation };
