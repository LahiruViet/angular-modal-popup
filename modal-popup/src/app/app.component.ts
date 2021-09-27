import { Component, TemplateRef } from '@angular/core';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Modal Popups Demo'

  constructor(private dialogService: DialogService) {  }

  openThreeButtonsModalPopup() {

    this.dialogService.open(
      {
        title: 'Subscribe Me',
        message: 'Do you want to subscribe to this service?',
        positive: '',
        negative: null,
        neutral: 'Not sure'
      })
      .then(result => {
        console.log(result);
      }, error => console.log(error));
  }

}
