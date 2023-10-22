export interface IProjectCard {
  image: string;
  author: string;
  avatar: string;
  title: string;
  date: string;
  users: string;
  id: string;
  technologies: string[];
}

export interface IProjectDetails {
  // response project data from backend
  createDate: Date;
  description: string;
  id: number;
  logoUrl: string | null;
  models: {
    id: number;
    name: string;
    createDate: Date;
  }[];
  name: string;
  overview: string | null;
  tags: string | null;
  team: {
    createDate: Date;
    id: number;
    joinRequests: string | null;
    logoUrl: string | null;
    name: string;
    pendingInvites: string | null;
  };
}

export interface IApproache {
  id: number;
  points: number;
  score: number;
  status: string;
}

export interface IProjectCreate {
  name: string;
  description?: string;
  tags?: string;
  file?: File;
  teamId: string;
}

export interface IProject {
  title: string;
  avatar: string;
  image: string;
  team: string;
  date: string;
  description: string;
  active: boolean;
  finished: boolean;
  id: string;
  technologies: string[];
}

export interface IWorkspace {
  image: string;
  team: string;
  avatar: string;
  title: string;
  date: string;
  id: string;
  technologies: string[];
  active: boolean;
  finished: boolean;
  type: string;
}
