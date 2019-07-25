import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  toast: any;

  constructor() {
    this.toast = Swal.mixin({
      toast: true,
      showConfirmButton: false,
      position: 'top-end',
      timer: 3000
    });
  }
  successtoast(message){
    this.toast.fire({
      type: 'success',
      title: message
    });
  }
  errortoast(message){
    this.toast.fire({
      type:'error',
      title: message
    });
  }
  infotoast(message){
    this.toast.fire({
      type: 'info',
      title: message
    });
  }

}
