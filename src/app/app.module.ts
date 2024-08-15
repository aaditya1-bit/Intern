import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/component/header/header.component';
import { PostslistComponent } from './posts/postslist/postslist.component';
import { environment } from '../environments/environment';
import { postsReducer } from './posts/state/posts.reduce';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
    HeaderComponent,
    PostslistComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly : environment.production
    }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
