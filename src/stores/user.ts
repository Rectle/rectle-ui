import { defineStore } from 'pinia';
import jwt_decode from "jwt-decode";
import {
  type CredentialResponse,
} from "vue3-google-signin";
import { sendUserInformation } from 'src/api/userInformation';
import { useSessionStorage } from '@vueuse/core';

interface IUser {
  aud?: string;
  azp?:string;
  client_id: string | undefined;
  email?: string;
  email_verified?: string;
  exp?: string;
  family_name?: string;
  given_name?: string;
  iat?: string;
  iss?: string;
  jti?: string;
  jwt: string | undefined;
  name?: string;
  nbf?: string;
  picture?: string;
  sub?: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: useSessionStorage('user', {} as IUser)
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
      this.user = {} as IUser
    }
  },
  
});
