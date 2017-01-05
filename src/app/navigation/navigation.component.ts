import {Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, ViewContainerRef} from "@angular/core";
import {Overlay} from "angular2-modal";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  onClick() {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Save your list for later here')
      .body(`
            <div>
              <p>There are two ways to save, Private or Pretty.</p>
              <table class="table table-hover">
  <thead>
  <tr>
    <th>Method</th>
    <th>Description</th>
    <th>Example</th>
    <th>Link</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Pretty</td>
    <td>Pretty is easy to read, you can print it out and it will make some kind of sense. 
    Obviously that means nosy parkers trying to find out what you're getting them could read this though - 
    with great power comes great responsibility!</td>
    <td></td>
    <td>
        <a href="#" class="btn btn-info btn-xs" data-toggle="dropdown">Download</a>
    </td>
  </tr>
  <tr>
  <td>Private</td>
  <td>Private lists are not readable by humans. They're encoded so that comuters can read them, but if someone got their hands
  on your list, they'd need to do some work on it before they could read it in any way that made sense</td>
  <td></td>
  <td>
        <a href="#" class="btn btn-info btn-xs" data-toggle="dropdown">Download</a>
  </td>
</tr>
  </tbody>
</table>
            </div>`)
      .open();
  }

  ngOnInit() {
  }

}
