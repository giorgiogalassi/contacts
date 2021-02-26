import { createAction, props } from '@ngrx/store';

import { Contact } from '@interfaces';

/**
 *  @description This action is used to add the contact to the list
 */
export const addContact = createAction('[Contact] Add!', props<{ contact: Omit<Contact, 'id'> }>());

/**
 *  @description This action is used to update a contact within the list
 */
export const updateContact = createAction('[Contact] Update!', props<{ newContact: Omit<Contact, 'id'>, id: number }>());

/**
 *  @description This action is used to delete a contact from the list
 */
export const deleteContact = createAction('[Contact] Delete!', props<{ id: number }>());
