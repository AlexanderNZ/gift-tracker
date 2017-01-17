import {Injectable} from "@angular/core";
import {Person} from "../data/person";

@Injectable()
export class TrackedPeopleService {

  person: [Person];

  constructor() {
    let troy = new Person("", "Fred", "BMT Sandwich Recipe", 1);
    let alan = new Person("Favourite", "Cousin", "iPad", 1);
    let russell = new Person("Dad", "", "Home Baked Cookies", 1);
    let interns = new Person("Mum", "", "Voucher for 10 hours of family gardening time", 1);
    let kelly = new Person("Cassidy", "Elwood", "Comic Books", 1);
    this.person = [troy, alan, russell, interns, kelly];
  }

}
