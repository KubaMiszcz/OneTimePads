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
      this.message="mission 226 tank A-398 start 34UEA12345 67892"
      this.convertedMessage = this.appService.convertMessage(this.message);

     this.convertedMessage= this.convertedMessage.replace(/(.{5})/g,"$1 ")

           this.deconvertedMessage = this.appService.deconvertMessage(this.convertedMessage.replaceAll(' ',''));
    }
    
    convertMessage(){
      this.convertedMessage = this.appService.convertMessage(this.message);
  }
    deconvertMessage(){
      this.deconvertedMessage = this.appService.deconvertMessage(this.convertedMessage);
  }



}
