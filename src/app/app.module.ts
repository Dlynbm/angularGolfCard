import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule, MatSelectModule, MatToolbarModule, MatTableModule, MatIconModule,
  MatToolbar
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';



import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {GolfCourseService} from './golf-course/golf-course-service';
import {RoutingModule} from './routing/routing.module';



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
    RoutingModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule
  ],

providers: [GolfCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
