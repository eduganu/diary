import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar';
import * as moment from 'moment';
import { DayEntry } from 'src/app/interfaces/DayEntry';

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
  daysConfig: DayConfig[] = [];

  dayEntries: DayEntry[];

  constructor() { 
    this.daysConfig.push({
      date: new Date(1609196400000),
      subTitle: "\u2713",
      cssClass: 'filledDay'
    })
    this.options.daysConfig = this.daysConfig;

    this.dayEntries = [{
        date: '27/12/2020',
        textEntry: 'Avui ha fet molt bon dia'
      },
      {
        date: '28/12/2020',
        textEntry: 'Avui ha fet aire'
      },
      {
        date: '29/12/2020',
        textEntry: 'Dema fará dia per anar amb bus'
      }
    ].sort((a, b) => (a.date < b.date) ? 1 : -1) // parsejar les strings a Dates i comparar-les
  }

  ngOnInit() {
    
  }

  onSelect(event: any) {
    var parsedDate = new Date(event.time).toLocaleDateString(); // selected Date from calendar
    var parsedTime = new Date().toLocaleString(); // current time 
    console.log(event);
    console.log(parsedDate)
    console.log(parsedTime)

    console.log(moment(parsedDate, "DD/MM/YYYY").format('dddd DD'))
  }

  

}
