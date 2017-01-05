import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  christmas_message = getDaysUntilXmas();
}

function getDaysUntilXmas() {
  let oneMinute = 60 * 1000;
  let oneHour = oneMinute * 60;
  let oneDay = oneHour * 24;
  let today = new Date();
  let nextXmas = new Date();
  nextXmas.setMonth(11);
  nextXmas.setDate(25);
  if (today.getMonth() == 11 && today.getDate() > 25) {
    nextXmas.setFullYear(nextXmas.getFullYear() + 1)
  }
  let diff = nextXmas.getTime() - today.getTime();
  diff = Math.floor(diff / oneDay);

  if (diff === 0) {
    return "Today is Christmas! We hope you have a great day shared with the people who matter to you! Thank you for using this service, I sincerely hope that it's helped you focus on what you find important."
  }

  return "Only " + diff + " days left until Christmas!"
}
