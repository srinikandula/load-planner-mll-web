import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiUrls {

  mainUrl= 'http://192.168.29.126:3000/';
  // mainUrl= 'http://localhost:3000/';




  userRegistration = 'api/v1/users/register';
  downloadTemplate = 'api/v1/orders/template';
  uploadCsv = 'api/v1/orders/uploadCsv';
  getAllOrders = 'api/v1/orders/getAllOrders';
  plannedTrips = 'api/v1/orders/plannedTrips';
  createOrder = 'api/v1/orders/createOrder';

}
