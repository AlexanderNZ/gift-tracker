import {Component, OnInit} from "@angular/core";
import {Person} from "../../data/person";
import {TrackedPeopleService} from "../../services/tracked-people.service";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(private trackedPeopleService: TrackedPeopleService) {
  }

  ngOnInit() {
    let troy = new Person("", "Fred", "BMT Sandwich Recipe", 1);
    let alan = new Person("Favourite", "Cousin", "iPad", 1);
    let russell = new Person("Dad", "", "Home Baked Cookies", 1);
    let interns = new Person("Mum", "", "Voucher for 10 hours of family gardening time", 1);
    let kelly = new Person("Cassidy", "Elwood", "Comic Books", 1);
    this.trackedPeopleService.person = [troy, alan, russell, interns, kelly];
  }

  updateStatus(index, newStatus) {
    this.trackedPeopleService.person[index].status = newStatus;
  }
}
