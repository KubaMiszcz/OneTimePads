import { AppService } from './../../services/app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  message='';
  convertedMessage='';
  deconvertedMessage='';

  constructor(private appService:AppService) {
  }

  ngOnInit(): void {
      this.message="msg: mission tank 123 start"
      this.convertedMessage = this.appService.convertMessage(this.message);
      this.deconvertedMessage = this.appService.deconvertMessage(this.convertedMessage);
    }
    
    convertMessage(){
      this.convertedMessage = this.appService.convertMessage(this.message);
  }
    deconvertMessage(){
      this.convertedMessage = this.appService.deconvertMessage(this.message);
  }



}
