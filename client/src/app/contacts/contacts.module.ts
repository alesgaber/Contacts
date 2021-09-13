import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';

const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.ContactViewComponent,
  },
];

@NgModule({
  declarations: [...fromContainers.components, ...fromComponents.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [...fromServices.services],
})
export class ContactsModule {}
