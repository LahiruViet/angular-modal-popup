import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public title!: string
  public message!: string
  public positive!: string
  public negative!: string
  public neutral!: string

  constructor(public ngbActiveModal: NgbActiveModal) {}

  ngOnInit() { }

  setDialogProperties(props: any) {

    this.title = props.title || 'Dialog';
    this.message = props.message;
    this.positive = props.positive || 'OK';
    this.negative = props.negative || "NO";
    this.neutral = props.neutral || 'Not Sure';
  }

  actionTaken(result: any) {
    // this.ngbActiveModal.close(JSON.stringify(result));
    this.ngbActiveModal.close(result);
  }

}
