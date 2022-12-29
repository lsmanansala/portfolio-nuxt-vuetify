import projects from '~/assets/data/projects.json'
import { Project } from '~~/interfaces/project.interface';

export default class ProjectService {
  constructor() {}

  async getList(): Promise<Project[]> {
    return projects;
  }
}