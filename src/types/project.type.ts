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

export interface IWorkspace {
  image: string;
  author: string;
  avatar: string;
  title: string;
  date: string;
  users: string;
  id: string;
  technologies: string[];
  active: boolean;
  finished: boolean;
  type: string;
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
