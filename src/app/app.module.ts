import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TodoModule } from './Todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { todoReducer } from './Todos/todo.reducer';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
     StoreModule.forRoot({ todos: todoReducer }),
         StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
