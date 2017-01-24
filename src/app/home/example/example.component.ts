import {Component, OnInit} from "@angular/core";
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

  }

  updateStatus(index, newStatus) {
    this.trackedPeopleService.person[index].status = newStatus;
  }

  removeItem(index) {
    this.trackedPeopleService.person.splice(index, 1);
  }

  viewMode = 0;

  toggleView(){
    if (this.viewMode === 0){
      this.viewMode = 1
    } else {
      this.viewMode = 0
    }
  }
}
