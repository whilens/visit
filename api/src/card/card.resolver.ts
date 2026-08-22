import { Query, Resolver } from '@nestjs/graphql';
import { CardService } from './card.service';
import { Card } from './models';

@Resolver()
export class CardResolver {
  constructor(private readonly cards: CardService) {}

  @Query(() => Card)
  card() {
    return this.cards.getCard();
  }
}
