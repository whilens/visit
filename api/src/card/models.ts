import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  nameEn: string;

  @Field()
  role: string;

  @Field()
  roleEn: string;

  @Field()
  tagline: string;

  @Field()
  taglineEn: string;

  @Field()
  bio: string;

  @Field()
  bioEn: string;

  @Field()
  email: string;

  @Field()
  telegram: string;

  @Field(() => String, { nullable: true })
  github?: string | null;

  @Field(() => String, { nullable: true })
  photoUrl?: string | null;

  @Field()
  education: string;

  @Field()
  educationEn: string;

  @Field(() => Float)
  yearsExperience: number;
}

@ObjectType()
export class Skill {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  category: string;

  @Field()
  categoryEn: string;

  @Field(() => Int)
  level: number;

  @Field(() => Int)
  sort: number;
}

@ObjectType()
export class Project {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  titleEn: string;

  @Field()
  summary: string;

  @Field()
  summaryEn: string;

  @Field(() => String, { nullable: true })
  url?: string | null;

  @Field(() => [String])
  highlights: string[];

  @Field(() => [String])
  highlightsEn: string[];

  @Field(() => [String])
  stack: string[];

  @Field(() => Int)
  sort: number;
}

@ObjectType()
export class Experience {
  @Field(() => Int)
  id: number;

  @Field()
  company: string;

  @Field()
  companyEn: string;

  @Field()
  role: string;

  @Field()
  roleEn: string;

  @Field()
  period: string;

  @Field()
  periodEn: string;

  @Field(() => [String])
  items: string[];

  @Field(() => [String])
  itemsEn: string[];

  @Field(() => Int)
  sort: number;
}

@ObjectType()
export class Card {
  @Field(() => Profile)
  profile: Profile;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Project])
  projects: Project[];

  @Field(() => [Experience])
  experiences: Experience[];
}
