import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reduce";
import { PostsState } from "../posts/state/post.state";

export  interface AppState{
  counter:CounterState
  posts : PostsState
}

export const appReducer = {
  counter : counterReducer,
  posts : postsReducer,

}
