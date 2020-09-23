import { ApiSync } from './Models/ApiSync';
import { Collection } from './Models/Collection';
import { User } from './Models/User';

let collection = User.buildUserCollection();
collection.fetch();
console.log(collection);
