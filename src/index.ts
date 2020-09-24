import { User } from './Models/User';
import { UserEdit } from './Views/UserEdit';

const user = User.buildUser({ name: 'NAME', age: 20 });
const root = document.getElementById('root');

if (root) {
  const useredit = new UserEdit(root, user);
  useredit.render();
  console.log(useredit);
} else {
  throw new Error('Root not found!');
}
