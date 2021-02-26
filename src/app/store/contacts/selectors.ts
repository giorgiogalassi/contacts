import { createSelector, createFeatureSelector } from '@ngrx/store';

import { contactsFeatureKey } from './reducers';

import { Contact } from '@interfaces';

export interface ContactsState {
  contacts: Contact[];
}

export const selectFeature = createFeatureSelector<ContactsState>(contactsFeatureKey);

export const selectContacts = createSelector(selectFeature, (state: ContactsState) => state.contacts);
export const selectContact = createSelector(selectContacts, (contacts: Contact[], id: number) => contacts.find(c => c.id === Number(id)));
