import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {Overlay} from "angular2-modal";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({
  selector: 'app-export-file-generator',
  templateUrl: './export-file-generator.component.html',
  styleUrls: ['./export-file-generator.component.css']
})
export class ExportFileGeneratorComponent implements OnInit {

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
  }

  onClick() {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <app-export-file-generator></app-export-file-generator>`)
      .open();
  }
}
