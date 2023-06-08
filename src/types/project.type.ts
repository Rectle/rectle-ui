
interface IProjectCard {
  image: string;
  author: string;
  avatar: string;
  title: string;
  date: string;
  users: string;
  id: string;
  technologies: string[];
}

interface IWorkspace {
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
  type:string;
}

interface IApproache {
  id: number;
  points: number;
  score: number;
  status: string;
}
