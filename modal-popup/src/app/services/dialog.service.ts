import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private ngbModalRef!: NgbModalRef

  constructor(private ngbModal: NgbModal) {}

  open(properties: {title: any, message: any, positive: any, negative: any, neutral: any}): Promise<any> {

    this.ngbModalRef = this.ngbModal.open(DialogComponent, {
      size: 'sm',
      backdrop: 'static',
    });

    this.ngbModalRef.componentInstance.setDialogProperties(properties);
    return this.ngbModalRef.result;
  }

}
