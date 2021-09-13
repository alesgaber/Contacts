import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Contact } from '../../models/contact.mode';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(`${environment.apiBaseUrl}/contacts`)
      .pipe(catchError((error) => throwError(error)));
  }

  createContact(payload: Contact): Observable<Contact> {
    return this.http
      .post<Contact>(`${environment.apiBaseUrl}/contacts`, payload)
      .pipe(catchError((error) => throwError(error)));
  }

  removeContact(payload: Contact): Observable<any> {
    return this.http
      .delete<Contact>(`${environment.apiBaseUrl}/contacts/${payload.id}`)
      .pipe(catchError((error) => throwError(error)));
  }
}
