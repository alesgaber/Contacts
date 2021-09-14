import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Contact } from '../../models/contact.mode';
import { ContactsService } from '../../services';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss'],
})
export class ContactViewComponent implements OnInit {
  saving = false;
  initForm = false;
  contacts: Contact[] = [];

  constructor(
    private contactService: ContactsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactService
      .getContacts()
      .subscribe((contacts) => (this.contacts = contacts));
  }

  onDelete(contact: Contact) {
    this.contactService.removeContact(contact).subscribe(() => {
      this.contacts = this.contacts.filter((f) => f.id != contact.id);
      this.toastr.info(
        `You successfully deleted ${contact.name} from contacts.`
      );
    });
  }

  onAdd(contact: Contact) {
    const contactsData: Contact[] = [];

    var a = Math.max(...contactsData.map((c) => c.id));

    this.saving = true;

    //delay for testing purposes
    setTimeout(() => {
      this.contactService
        .createContact(contact)
        .pipe(
          finalize(() => {
            this.saving = false;
          })
        )
        .subscribe((contact) => {
          console.log(contact);
          this.contacts = [...this.contacts, contact];
          this.toastr.success(
            `You successfully added ${contact.name} to contacts.`
          );
        });
    }, 300);
  }
}
