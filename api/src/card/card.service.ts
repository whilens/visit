import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CardService {
  constructor(private readonly prisma: PrismaService) {}

  async getCard() {
    const [profile, skills, projects, experiences] = await Promise.all([
      this.prisma.profile.findFirst(),
      this.prisma.skill.findMany({ orderBy: { sort: 'asc' } }),
      this.prisma.project.findMany({ orderBy: { sort: 'asc' } }),
      this.prisma.experience.findMany({ orderBy: { sort: 'asc' } }),
    ]);

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return { profile, skills, projects, experiences };
  }

  async getCountSkills() {
    const count = await this.prisma.skill.count();
    return count;
  }

  async getTopSkills() {
    const skills = await this.prisma.skill.findMany({ where: { level: 5 } });
    return skills;
  }

  async getProjectByStack(stack: string) {
    const projects = await this.prisma.project.findMany({where: {stack: {has: stack}}})
    return projects;
  }
}
