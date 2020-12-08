export class Person {

  protected age = 20;

  constructor(private $firstName: string, private $lastName: string, private $active: boolean = true) {
  }

  get nom(): string {
      return this.$firstName + '' + this.$lastName;
  }

  get firstName(): string {
    return this.$firstName;
  }

  set firstName(value: string) {
    this.$firstName = value;
  }

  get lastName(): string {
    return this.$lastName;
  }

  set lastName(value: string) {
    this.$lastName = value;
  }

  get active(): boolean {
    return this.$active;
  }

  set active(value: boolean) {
    this.$active = value;
  }

}
