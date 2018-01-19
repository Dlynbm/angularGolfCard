import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {HttpModule} from '@angular/http';



import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule, MatSelectModule, MatToolbarModule, MatTableModule, MatIconModule,
  MatToolbar
} from '@angular/material';
import { TableComponent } from './table/table.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes} from '@angular/router';
import {GolfCourseService} from './golf-course/golf-course-service';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent},
        { path: 'table', component: TableComponent}
      ])
    ],

providers: [GolfCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
