import {Component, OnInit} from "@angular/core";
import {TrackedPeopleService} from "../services/tracked-people.service";
import {Person} from "../data/person";

@Component({
  selector: 'app-person-generator',
  templateUrl: './person-generator.component.html',
  styleUrls: ['./person-generator.component.css'],
})
export class PersonGeneratorComponent implements OnInit {

  constructor(private trackedPeopleService: TrackedPeopleService) {
  }

  ngOnInit() {

  }

  addNewPerson(firstName, lastName, gift) {
    let status = 0;
    if(gift){
      status = 1;
    }
    this.trackedPeopleService.person.push(new Person(firstName, lastName, gift, status))
  }

}
