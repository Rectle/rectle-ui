import { defineStore } from 'pinia';
import jwt_decode from 'jwt-decode';
import { type CredentialResponse } from 'vue3-google-signin';
import { sendUserInformation } from 'src/api/userInformation';
import { useSessionStorage } from '@vueuse/core';
import { getAllTeams } from 'src/api/getAllTeamsByUserId';
import { getTeamByName } from 'src/api/getTeamByName';

interface IResponseData {
  id: number;
  provider: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: useSessionStorage('user', {} as IUser),
  }),
  getters: {
    getUser: (state) => state.user,
    isSignedIn: (state) => !!Object.keys(state.user).length,
    getAllTeams: (state) => state.user.teams,
    getUserId: (state) => state.user.id,
  },
  actions: {
    async signIn(data: CredentialResponse) {
      const _user: object = jwt_decode(data.credential!);
      this.user = {
        client_id: data.clientId,
        jwt: data.credential,
        ..._user,
      };
      const details = await sendUserInformation(_user);
      if (details) this.setUserDetails(details);
    },
    setUserDetails(details: IResponseData) {
      this.user.id = details.id;
      this.user.provider = details.provider;
      this.user.email = details.email;
    },
    signOut() {
      this.user = {} as IUser;
    },
    async loadTeams(id: number) {
      const teams = (await getAllTeams(id)) as ITeam[];
      this.user.teams = teams;
    },
    async loadTeam(email: string) {
      const res = (await getTeamByName(email)) as ITeam;
      return res.id;
    },
  },
});
