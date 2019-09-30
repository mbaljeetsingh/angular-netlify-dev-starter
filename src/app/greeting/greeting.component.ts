import { Component, OnInit } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  hello;
  constructor(private greetingService: GreetingService) {}

  ngOnInit() {
    // this.greetingService.getHello().subscribe(data => {
    //   this.hello = data;
    // })
    this.hello = this.greetingService.getHello();
  }
}
