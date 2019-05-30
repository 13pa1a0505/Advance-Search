import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import {NgbModule}              from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule }     from './app-routing.module';


import { AppComponent }          from './app.component';
import { SearchListComponent }   from './search-list/search-list.component';
import { AdvancedsearchListComponent } from './advancedsearch-list/advancedsearch-list.component';
import { Ng2SearchPipeModule }  from 'ng2-search-filter';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';
import { AdvancedsearchlistService} from '../advancedsearch-list.service';



const appRoutes: Routes = [
  { path: 'Search', component: SearchListComponent },
  { path: 'AdvancedSearch', component: AdvancedsearchListComponent },
  { path: 'Search_results', component: SearchResultsComponent},
];

@NgModule({
  imports: [
    BrowserModule,NgbModule,
    FormsModule,Ng2SearchPipeModule,AppRoutingModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdvancedsearchListComponent,
    SearchListComponent,
    SearchResultsComponent
  ],
  providers:[AdvancedsearchlistService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
