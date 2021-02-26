import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Contact } from '@interfaces';
import { ContactsActions, ContactsSelectors } from '@store/contacts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: 'contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  public form!: FormGroup;
  public contacts$!: Observable<Contact[]>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ContactsSelectors.ContactsState>,
    public router: Router
  ) { }

  get name(): AbstractControl | null {
    return this.form.get('name');
  }

  get surname(): AbstractControl | null {
    return this.form.get('surname');
  }

  get address(): AbstractControl | null {
    return this.form.get('address');
  }

  get city(): AbstractControl | null {
    return this.form.get('city');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    });

    this.contacts$ = this.store.select(ContactsSelectors.selectContacts);
  }

  /**
   * @description This function will not trigger `form.reset()` to allow the User to update a single contact
   */
  add(): void {
    this.store.dispatch(ContactsActions.addContact({ contact: this.createContact() }));
  }

  delete(id: number): void {
    this.store.dispatch(ContactsActions.deleteContact({ id }));
  }

  /**
   * @description Update a contact with the informations in the form
   * @param id Id of the contact to update
   */
  update(id: number): void {
    this.store.dispatch(ContactsActions.updateContact({ newContact: this.createContact(), id }));
  }

  createContact(): Omit<Contact, 'id'> {
    return {
      name: this.name?.value,
      surname: this.surname?.value,
      address: this.address?.value,
      city: this.city?.value
    };
  }
}
