import { Peopl } from './personas/people/people.model';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class DataServices {

  constructor(private httpClient: HttpClient) {

  }

  getPeople() {
    return this.httpClient.get('https://personapp-de58c-default-rtdb.firebaseio.com/data.json');
  }

  savePeople(people: Peopl[]) {
    this.httpClient.put('https://personapp-de58c-default-rtdb.firebaseio.com/data.json', people)
      .subscribe({
        next(response) {
          console.log('Response is: ' + response);
        },
        error(msg) {
          console.log('Error: ' + msg);
        }
      });
  }

  updatePerson(index: number, person: Peopl) {
    let url: string = 'https://personapp-de58c-default-rtdb.firebaseio.com/data/' + index + '.json';
    this.httpClient.put(url, person).subscribe({
      next(response) {
        console.log('Response updatePerson is: ' + response);
      },
      error(msg) {
        console.log('Error updatePerson: ' + msg);
      }
    });
  }

  deletePerson(index: number) {
    let url: string = 'https://personapp-de58c-default-rtdb.firebaseio.com/data/' + index + '.json';
    this.httpClient.delete(url).subscribe({
      next(response) {
        console.log('Response deletePerson is: ' + response);
      },
      error(msg) {
        console.log('Error deletePerson: ' + msg);
      }
    });
  }
}
