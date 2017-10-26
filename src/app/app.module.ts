import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpService } from './http.service';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ClaimsManagementComponent } from './claims-management/claims-management.component';
import { ClaimsDetailsComponent } from './claims-details/claims-details.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { StatusComponent } from './status/status.component';


const appRoutes: Routes = [
  { path: 'dashboard', component: SearchComponent },
  { path: 'claimsManagement', component: ClaimsManagementComponent },
  { path: 'dashboard', component: SearchComponent },
  { path: 'claimsManagement', component: ClaimsManagementComponent, 
    children: [
      { path: 'claimDetails', component: ClaimsDetailsComponent },
      { path: 'attachments', component: AttachmentsComponent },
      { path: 'status', component: StatusComponent },
    
            
    ],
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    LeftNavComponent,
    ClaimsManagementComponent,
    ClaimsDetailsComponent,
    AttachmentsComponent,
    StatusComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers:[ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
