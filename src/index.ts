import { User } from './Models/User';

const user = new User({ name: 'XDDD', age: 23 });

user.set({ name: 'asd' });

console.log(user);
