import { Query, Resolver, Int, Args } from '@nestjs/graphql';
import { CardService } from './card.service';
import { Card, Project, Skill } from './models';

@Resolver()
export class CardResolver {
  constructor(private readonly cards: CardService) {}

  @Query(() => Card)
  card() {
    return this.cards.getCard();
  }

  @Query(() => Int)
  skillCount() {
    return this.cards.getCountSkills();
  }

  @Query(() => [Skill])
  topSkills() {
    return this.cards.getTopSkills();
  }
  @Query(() => [Project])
  projectByStack(@Args('stack') stack: string) {
    return this.cards.getProjectByStack(stack);
  }
} 
