import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit, OnDestroy{
  counter$!: Observable<number>;

  constructor(private store: Store<AppState>){}
  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  this.counter$ = this.store.select(getCounter)
  };
  }

