import { LoginService } from './login/login.service';
import { Peopl } from './personas/people/people.model';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class DataServices {

  constructor(private httpClient: HttpClient, private loginService: LoginService) {
  }

  getPeople() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://personapp-de58c-default-rtdb.firebaseio.com/data.json?auth='+token);
  }

  savePeople(people: Peopl[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://personapp-de58c-default-rtdb.firebaseio.com/data.json?auth='+token, people)
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
    const token = this.loginService.getIdToken();
    let url: string = 'https://personapp-de58c-default-rtdb.firebaseio.com/data/' + index + '.json?auth='+token;
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
    const token = this.loginService.getIdToken();
    let url: string = 'https://personapp-de58c-default-rtdb.firebaseio.com/data/' + index + '.json?auth='+token;
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
