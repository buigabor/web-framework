import { UserShow } from './UserShow';
import { User, UserProps } from './../Models/User';
import { CollectionView } from './Collectionview';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element) {
    new UserShow(itemParent, model).render();
  }
}
