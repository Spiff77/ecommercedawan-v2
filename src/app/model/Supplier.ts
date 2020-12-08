export class Supplier{

  constructor(private _companyName: string, private _bankAccountNumber: string) {
  }

  get companyName(): string {
    return this._companyName;
  }

  set companyName(value: string) {
    this._companyName = value;
  }

  get bankAccountNumber(): string {
    return this._bankAccountNumber;
  }

  set bankAccountNumber(value: string) {
    this._bankAccountNumber = value;
  }
}
