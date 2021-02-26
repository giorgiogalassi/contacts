import { combineReducers, on, Action, createReducer } from '@ngrx/store';

import { ContactsState } from './selectors';

import * as ContactsActions from './actions';

import { Contact } from '@interfaces';

export const contactsFeatureKey = 'contactsFeature';
export const initialState: ContactsState = {
  contacts: []
};

const reducer = createReducer(
  initialState,
  on(ContactsActions.addContact, (state: ContactsState, { contact }) =>
    ({ ...state, contacts: [...state.contacts, { ...contact, id: Date.now() }] })),
  on(ContactsActions.updateContact, (state: ContactsState, { newContact, id }) => {
    const contacts: Contact[] = [...state.contacts];
    const index: number = state.contacts.findIndex(c => c.id === id);

    if (index <= -1) {
      return { ...state };
    } else {
      contacts[index] = { ...newContact, id: Date.now() };

      return { ...state, contacts };
    }
  }),
  on(ContactsActions.deleteContact, (state: ContactsState, { id }) =>
    ({ ...state, contacts: [...state.contacts.filter((contact: Contact) => contact.id !== id)] }))
);

export function contactReducer(state: ContactsState, action: Action): ContactsState {
  return reducer(state, action);
}
