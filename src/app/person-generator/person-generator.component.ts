import {Component, OnInit} from "@angular/core";
import {Person} from "../../data/person";
import {TrackedPeopleService} from "../../tracked-people.service";

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
    this.trackedPeopleService.person.push(new Person(firstName, lastName, gift, 0))
  }

}
