import { IProject } from 'src/types/project.type';

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
