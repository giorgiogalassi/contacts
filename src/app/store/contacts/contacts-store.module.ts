import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromContacts from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromContacts.contactsFeatureKey, fromContacts.contactReducer),
    EffectsModule.forFeature([])
  ]
})
export class ContactsStoreModule { }
