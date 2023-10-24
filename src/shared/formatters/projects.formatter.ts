import axios from 'axios';
import {
  IFormattedLeaderboard,
  ILeaderboard,
  IProject,
  IWorkspace,
} from 'src/types/project.type';

export const formatProjectsListData = (projects: any): IProject[] => {
  return projects.map((project: any) => {
    return {
      title: project.name,
      avatar: project.team.logoUrl,
      image: project.logoUrl,
      team: project.team.name,
      date: project.createDate,
      description: project.description,
      active: true,
      finished: false,
      id: project.id,
      technologies: project.tags ? project.tags.split(',') : [],
    };
  });
};

export const formatWorkspaceListData = (projects: any): IWorkspace[] => {
  return projects.map((project: any) => {
    return {
      title: project.name,
      avatar: project.team.logoUrl,
      image: project.logoUrl,
      team: project.team.name,
      date: project.createDate,
      description: project.description,
      active: true,
      finished: false,
      id: project.id,
      technologies: project.tags ? project.tags.split(',') : [],
      type: project.type ? project.type : 'Creator', // TODO: decide of project type
    };
  });
};

export const formatLeaderboardWithSorting = (
  data: ILeaderboard[]
): IFormattedLeaderboard[] => {
  const result = data.map((el) => {
    return {
      name: el.name,
      resourceUrl: el.resourceUrl,
      score: el.compilations.length ? el.compilations[0].score : 0,
      createDate: el.createDate,
      userId: el.user.id,
      userName: el.user.name,
    };
  });
  return result.sort((a, b) => b.score - a.score);
};
