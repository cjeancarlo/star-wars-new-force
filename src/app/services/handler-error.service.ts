import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HandleErrorService {

  constructor() { }
  handleError(error: any) {

    // console.log(error);
    let errorMessage: any;
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      switch (error.status) {
        case 0:
          errorMessage = {
            status: error.statusText,
            text: `El servidor no Responde`
          };
          break;
        case 200:
          errorMessage = {
            status: error.statusText,
            text: error.error.text
          };
          break;
        case 404:
          errorMessage = {
            status: error.statusText,
            text: 'no l consegui'
          };
          break;
        default:
          errorMessage = {
            status: error.statusText,
            text: `Error Code: ${error.status}\nMessage: ${error.message}`,
            error: error.error
          };
      }
      // Get server-side error
    }
    // Get server-side error (error en la cotizacion)
    /*if (error instanceof Observable) {
      return error;
    }*/

    return throwError(errorMessage);
  }
}
