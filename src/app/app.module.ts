import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { HttpService } from './http.service';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule
  ],
  providers:[ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
