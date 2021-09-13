import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Contact } from '../../models/contact.mode';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[] | null = [];

  @Output() delete: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(contact: Contact) {
    this.delete.emit(contact);
  }

  getContactInfo(contact: Contact): string {
    const displayInfos = [contact.email, contact.telephone];

    return displayInfos.filter((v) => v != null && v != '').join(' | ');
  }
}
