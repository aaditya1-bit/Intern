import { changeChannelName, customDecrement, customIncrement, decrement, increment, reset } from "./counter.action";
import { CounterState, initialState } from "./counter.state";
import {Action, createReducer, on} from "@ngrx/store";

const _counterReducer = createReducer(
  initialState,
  on(increment , (state)=>{
    return {
      ...state,
      counter: state.counter + 1,
    };

}),
  on(decrement, (state)=>{
    return{
      ...state,
      counter : state.counter -1,
    };
  }),
  on(reset, (state)=>{
    return{
      ...state,
      counter : 0,
    };
  }),
  on(customIncrement, (state, action)=>{
    return{
      ...state,
      counter :(state.counter) +( action.count) ,
    };
  }),
  on(changeChannelName, (state) =>{
    return{
      ...state,
      channelName :"Monkey D Luffy"
    };
  }),
  on(customDecrement,(state, action)=>{
    return{
      ...state,
      counter : (state.counter) -(action.count),
    };

  }),
)

export function counterReducer(state: CounterState | undefined, action: Action<string> ){
  return _counterReducer(state,action);
}
