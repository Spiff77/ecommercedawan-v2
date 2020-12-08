import {Supplier} from './Supplier';

export class Product {
  private $supplier: Supplier;

  constructor(private $name: string, private $description: string,
              private $category: string, private $price: number, private $promo?: number ) {
  }

  get category(): string {
    return this.$category;
  }

  set category(value: string) {
    this.$category = value;
  }

  get promo(): number {
    return this.$promo;
  }

  set promo(value: number) {
    this.$promo = value;
  }


  get name(): string {
    return this.$name;
  }

  set name(value: string) {
    this.$name = value;
  }

  get supplier(): Supplier {
    return this.$supplier;
  }

  set supplier(value: Supplier) {
    this.$supplier = value;
  }

  get description(): string {
    return this.$description;
  }

  set description(value: string) {
    this.$description = value;
  }

  get price(): number {
    return this.$price;
  }

  set price(value: number) {
    this.$price = value;
  }
}
