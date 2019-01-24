import { Injectable } from '@nestjs/common';
import {
  random,
  times,
  sample,
  sampleSize
} from 'lodash';

import { TreeModel } from '../models/TreeModel';

type feature = string | Function;

@Injectable()
export class CreateTreeService {

  private adjectives = ['Majestic', 'Big', 'Exotic', 'Giant', 'Tiny', 'Golden', 'Rich', 'Odd', 'Strange', 'Terrific', 'Fat', 'Hilarious', 'Bald', 'Angry', 'Notorious', 'Sleepy', 'Vintage', 'Brave', 'Modern', 'Magic', 'Cheap', 'Iron', 'Funny', 'Magnetic', 'Superb', 'Deadly', 'Sad', 'Muddy', 'Fantastic', 'Silver', 'Nice Smelling', 'Very Tall', 'Ancient', 'Bizzare', 'Rotary', 'Yugoslavian', 'Wild', 'Iced', 'Vivid', 'Elastic', 'Best Selling', 'Not So Expensive', 'Rare', 'Holy', 'Rough', 'Waterproof', 'Tremendous', 'Mind Blowing', 'Professional', 'Better Than You Think', 'Blessed', 'Secondhand', 'Rubber', 'Intensely Green', 'Fancy', 'Curve', 'Extraordinary', 'Rural', 'Ghost', 'Scandinavian', 'Sweet', 'Nostalgic', 'Family', 'Misantropic', 'Radioactive', 'Diabolic', 'Wasted', 'Nitro', 'Black And White', 'Syntetic'];

  private featuresList: feature[] = [
    'It was created out of love',
    'It will remind you of the special Christmas time',
    'You can have it at home all year round',
    'It expresses more than a thousand words',
    () => `Warranty: ${random(2, 10)} years`,
    () => `It is recommended by ${random(7, 10)} out of 10 experts`,
    'Your friends will go mad with jealousy!',
    () => `It will cost you as much as ${random(3, 300)} cups of coffee`,
    'Friendly for animals',
    'You won\'t be dissapointed',
    'It is one of our best selling products',
    'The delivery is completely free',
    'New on the market',
    'Best choice for everyone',
    'It smells of spruce',
    'A piece of forest in your home',
    'It will give you thrills',
    'Best quality',
    'The product is available only with us',
    () => `It has up to ${random(100 * 1000, 2000 * 1000)} needles`,
    () => `Safe for children from ${random(2, 13)} years`,
    () => `So far, ${random(300, 10 * 1000)} clients have chosen it`,
    'Resistant to fire (a little)',
    'Product appreciated abroad',
    'It shines in the dark',
  ];

  generateProducts(numberOfProducts: number): TreeModel[] {
    return times(
      numberOfProducts,
      this.generateSingleProduct.bind(this)
    );
  }

  generateSingleProduct(id: number): TreeModel {
    return {
      id,
      name: this.randomName(this.adjectives),
      price: this.randomPrice(),
      image: this.randomImage(),
      features: this.createRandomFeatures(),
    };
  }

  randomName(adjectives: string[]) {
    const randomAdjective = () => sample(adjectives);
    return `${randomAdjective()} ${randomAdjective()} Christmas Tree`;
  }

  randomPrice(): number {
    return sample([
      19.90,
      29.90,
      49.90,
      99.90,
      199.90,
      299.90,
    ]);
  }

  randomImage(): string {
    const imageNumber = random(1,5);
    return (`tree${imageNumber}.png`);
  }

  createRandomFeatures(): string[] {
    const featureOutput = (feature: feature) => (typeof feature === 'function') ? feature() : feature;
    const getNumerOfFeatures = () => random(2, 4);
    const randomlySelectedFeatures = sampleSize(this.featuresList, getNumerOfFeatures());
    return [
      'It is a beautiful Christmas tree',
      ...randomlySelectedFeatures.map(featureOutput)
    ];
  }
}
