import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, from, forkJoin } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import * as ContactsActions from './actions';

@Injectable()
export class ContactEffect {
  /*
  public getContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActions.getContacts),
      mergeMap(() =>

        )
      )
    )
  );
  */

  constructor(private actions$: Actions) { }
}
