import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from '../welcome/welcome.component';
import {TableComponent} from '../table/table.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'table', component: TableComponent},
  { path: '', pathMatch: 'full', redirectTo: 'welcome'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
