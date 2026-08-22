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
}
