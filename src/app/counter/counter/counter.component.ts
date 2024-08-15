import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  counter: any;
constructor() {}
  ngOnInit(): void {}

onIncrement() {
  this.counter++;
}

onDecrement(){
  this.counter--;
}

onReset(){
  this.counter=0;
}

}
