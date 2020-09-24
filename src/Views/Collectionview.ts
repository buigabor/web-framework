import { User, UserProps } from './../Models/User';
import { Collection } from './../Models/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  render(): void {}
}
