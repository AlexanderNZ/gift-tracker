import {Component, OnInit} from "@angular/core";
import * as fileSaver from "file-saver";
import {TrackedPeopleService} from "../services/tracked-people.service";

@Component({
  selector: 'app-export-file-generator',
  templateUrl: './export-file-generator.component.html',
  styleUrls: ['./export-file-generator.component.css']
})
export class ExportFileGeneratorComponent implements OnInit {

  constructor(private trackedPeopleService: TrackedPeopleService) {
  }

  ngOnInit() {

  }

  savePretty() {

    let fileContent = "My Christmas List \n\n";
    for (let i = 0; i < this.trackedPeopleService.person.length; i++) {
      fileContent += "" + this.trackedPeopleService.person[i].toString() + "\n";
    }

    let blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
    fileSaver.saveAs(blob, "christmas-list.txt");
  }

  saveUgly() {

    let fileContent = "My Christmas List \n\n";
    for (let i = 0; i < this.trackedPeopleService.person.length; i++) {
      fileContent += "" + this.trackedPeopleService.person[i].toString() + "\n";
    }

    let encodedString = btoa(fileContent);
    let blob = new Blob([encodedString], {type: "text/plain;charset=utf-8"});
    fileSaver.saveAs(blob, "christmas-list.txt");
  }

}
