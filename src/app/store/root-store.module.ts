import { environment } from '../../environments/environment';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ContactsStoreModule } from './contacts/contacts-store.module';
import { ContactEffect } from './contacts/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    ContactsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([ContactEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  declarations: []
})
export class RootStoreModule { }
