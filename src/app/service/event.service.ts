import { Injectable } from '@angular/core';
import { Event } from "../model/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll():Event[] {
    return [
      {
        name: 'Kolbásztöltő verseny',
        date: '2022.01.25.',
        time: '06:00',
        location: {address: 'Harangod', city: 'Nagykálló', country: 'Magyarország'}
      },
      {
        name: 'Böllér verseny',
        date: '2022.02.25.',
        time: '07:00',
        location: {address: 'Harangod', city: 'Nagykálló', country: 'Magyarország'}
      },
      {
        name: 'Tócsni fesztivál',
        date: '2022.03.25.',
        time: '08:00',
        location: {address: 'Főtér', city: 'Biri', country: 'Magyarország'}
      }
    ]
  }
}
