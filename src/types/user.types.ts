interface ITeam {
  id: string;
  name: string;
  createDate?: string;
}


interface IUser {
  id?: number;
  provider?: string;
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
  teams?: ITeam[];
}
