import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { ContactsRoutingModule } from './contacts-routing.module';

// Pages
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    ContactsRoutingModule,
    CommonModule
  ]
})
export class ContactsModule { }
