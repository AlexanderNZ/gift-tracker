import { Component, OnInit } from '@angular/core';
import * as fileSaver from 'file-saver';
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

  savePretty(){

    let fileContent = "";
    for (let i = 0; i <= this.trackedPeopleService.person.length; i++){
      console.log(this.trackedPeopleService.person[i].toString());
      fileContent =+ "" + this.trackedPeopleService.person[i].toString();
    }

    let blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
    fileSaver.saveAs(blob, "christmas-list.txt");
  }

  saveUgly(){
    let blob = new Blob(["Hello, ugly!"], {type: "text/plain;charset=utf-8"});
    fileSaver.saveAs(blob, "encoded-christmas-list.txt");
  }

}
