import { User } from './Models/User';

const user = new User({ name: 'a', age: 3 });
console.log(user.get('name'));
