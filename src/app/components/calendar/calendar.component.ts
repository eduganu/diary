import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  date: string;
  type: 'string';
  options: CalendarComponentOptions = {
    color: 'secondary',
    weekStart: 1
  }

  constructor() { }

  ngOnInit() {}

  onSelect(event: any) {
    var parsedDate = new Date(event.time).toLocaleDateString();
    console.log(event);
    console.log(parsedDate)
  }

}
