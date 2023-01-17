import { api } from 'boot/axios'

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
    try{
        return (await api.post('/users', information)).data
    }catch(err) {
        console.error(err);
        return null
    }
}

export { sendUserInformation };