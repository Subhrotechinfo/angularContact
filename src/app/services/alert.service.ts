import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  toast: any;
  constructor() {
    this.toast = swal.mixin({
      toast: true,
      showConfirmButton: false,
      position: 'top-end',
      timer: 3000
    });
  }
  successToast(message) {
    this.toast.fire({
      type: 'success',
      title: message
    });
  }
  errorToast(message) {
    this.toast.fire({
      type: 'error',
      title: message
    });
  }
  confirmAlert() { }
}
