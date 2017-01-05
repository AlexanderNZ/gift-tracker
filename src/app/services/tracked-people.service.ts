import {Injectable} from "@angular/core";
import { Person } from "./data/person";

@Injectable()
export class TrackedPeopleService {

  person: [Person];

  constructor() {
  }

}
