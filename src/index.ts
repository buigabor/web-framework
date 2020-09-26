import { Collection } from './Models/Collection';
import { UserList } from './Views/UserList';
import { User, UserProps } from './Models/User';
import { CollectionView } from './Views/Collectionview';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users);
  } else {
    throw new Error('Root not found!');
  }
});

users.fetch();
