interface ITeamCard {
  logoUrl: string;
  name: string;
  createDate: string;
  users: string[];
  id?: string;
}

export interface ITeamJoin {
  createDate: string;
  id: number;
  logoUrl: string | null;
  name: string;
}
