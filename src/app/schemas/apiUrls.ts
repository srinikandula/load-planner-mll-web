import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiUrls {

  // mainUrl= 'http://192.168.29.126:3000/';
  mainUrl= 'http://localhost:3000/';




  userRegistration = 'api/v1/auth/register';
  downloadTemplate = 'api/v1/orders/orderTemplate';
  uploadCsv = 'api/v1/orders/uploadCsv';
  uploadCsvLoad = 'api/v1/orders/uploadCsvLoad';
  getAllOrders = 'api/v1/orders/getAllOrders';
  plannedTrips = 'api/v1/orders/plannedTrips';
  createOrder = 'api/v1/orders/orderProceed';
  pendingUsers = 'api/v1/users/pendingUsers';
  activateUsers = 'api/v1/users/activateUsers';

}
