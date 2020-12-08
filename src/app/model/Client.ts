import {Person} from './Person';
import {IClient} from './IClient';
import {Product} from './Product';

export class Client extends Person implements IClient<number>{

    public ca = 20000;
    public productList: Array<Product>;

    getCa(): number {
        return 0;
    }

  constructor(firstName: string, lastName: string, active?: boolean, ca?: number) {
    super(firstName, lastName, active);
    this.ca = ca || this.ca;
  }

}

