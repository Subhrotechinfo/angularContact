import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {

  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  editRecord(form) {
    this.modalService.open(form, { size: 'lg', centered: true })
  }
  close() {
    console.log('sdvbksfdbvk');

    this.activeModal.close('')
  }

}
