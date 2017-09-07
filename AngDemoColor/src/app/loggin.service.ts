import {Injectable} from '@angular/core';

@Injectable()
export class LogginService {

  log() {
    console.log('Iam logging tis msg');
  }

  constructor() {
  }

}
