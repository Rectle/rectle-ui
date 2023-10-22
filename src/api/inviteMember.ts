import { axios } from 'boot/axios'
import { url } from '../shared/variable.shared';
import { useUserStore } from 'src/stores/user';
const inviteMember = async (team: number, id: number): Promise<string[] | null> => {
    const userStore = useUserStore();
    try{
        const {data} = await axios.put(`${url}/teams/${team}/user/${id}/invite`, {}, { headers: {
            'Authorization': `Bearer${userStore.user.jwt}`
        } })
        return data;
    }
    catch(err: any) {
        console.error(err);
        return null;
    }
}

const cancelInvitationMember = async (team: number, id: number): Promise<string[] | null> => {
    const userStore = useUserStore();
    try{
        const {data} = await axios.delete(`${url}/teams/${team}/user/${id}/invite`, { headers: {
            'Authorization': `Bearer${userStore.user.jwt}`
        } })
        return data;
    }
    catch(err: any) {
        console.error(err);
        return null;
    }
}

export { inviteMember, cancelInvitationMember };
