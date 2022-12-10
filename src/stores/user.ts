import { defineStore } from 'pinia';
import jwt_decode from "jwt-decode";
import {
  type CredentialResponse,
} from "vue3-google-signin";
import { sendUserInformation } from 'src/api/userInformation';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
  }),
  getters: {
    getUser: (state) => state.user,
    isSignedIn: (state) => !!Object.keys(state.user).length
  },
  actions: {
    signIn(data: CredentialResponse) {
      const _user: object = jwt_decode(data.credential!);
      this.user = {
        client_id: data.clientId,
        jwt: data.credential,
        ..._user
      }
      sendUserInformation(_user);
    },
    signOut() {
      this.user = {}
    }
  },
  
});
