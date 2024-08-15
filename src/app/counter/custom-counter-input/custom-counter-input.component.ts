import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customDecrement, customIncrement } from '../state/counter.action';
import { getChannelName } from '../state/counter.selector';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent implements OnInit {

  value2! : number;
  value!: number;
  channelName$!: Observable<string>;

  constructor(private store : Store<AppState>){

  }
  ngOnInit(): void {

  this.channelName$ = this.store.select(getChannelName);
  }
  onAdd(){
    this.store.dispatch(customIncrement({count : +this.value}));
  }
  onChangeChannelName(){
   this.store.dispatch(changeChannelName());

  }
  onSub(){
    console.log("hehe");
    this.store.dispatch(customDecrement({count: this.value2}));

  }
}


