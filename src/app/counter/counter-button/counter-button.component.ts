import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent implements OnInit{




constructor(private store : Store <AppState>){}

ngOnInit(): void {}

onIncrement(){
this.store.dispatch(increment());
}

onDecrement(){
this.store.dispatch(decrement());
}

onReset(){
  this.store.dispatch(reset());

}


}

