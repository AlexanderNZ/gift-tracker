export class Person {

  constructor(firstName, lastName, gift, status) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gift = gift;
    this._status = this._giftStatus[status];
    this._notesSection = ""
  }

  private _notesSection: string;
  private _firstName: string;
  private _lastName: string;
  private _gift: string;
  private _status: string;

  private _giftStatus = [
    "To Be Decided",
    "To Be Fulfilled",
    "To Be Delivered",
    "Receipt Confirmed"
  ];

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get gift(): string {
    return this._gift;
  }

  set gift(value: string) {
    this._gift = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get notesSection(): string {
    return this._notesSection;
  }

  set notesSection(value: string) {
    this._notesSection = value;
  }

  toString() {
    let name = "Name: " + this.firstName + " " + this.lastName + "\n";
    let gift = "Gift: " + this.gift + "\n";
    let giftStatus = "Gift Status: " + this.status + "\n";
    let notes = "Notes: " + this.notesSection + "\n";
    return name + gift + giftStatus + notes
  }
}
