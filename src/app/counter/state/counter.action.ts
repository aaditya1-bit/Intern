import{createAction, props} from '@ngrx/store';


export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');


export const customIncrement = createAction(
  'customincement',
  props<{count : number}>()
);

export const changeChannelName= createAction('changeChannelName');

export const customDecrement = createAction(
  'customdecrement',
  props<{count:number}>()
);
