interface UserProps {
  name: string;
  age: number;
};

type Callback = ()=>{};

export class User {
  constructor(private data: UserProps) {}

  get<T extends keyof UserProps>(propName: T): UserProps[T] {
    return this.data[propName];
  }

  set(update: Partial<UserProps>): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback{

  }
}
