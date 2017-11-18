import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { ContentComponent } from '../content/content.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: ContentComponent },
  { path: '**', redirectTo: '/index' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
